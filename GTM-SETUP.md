# GTM Setup — HSR Urology Landing (Container `GTM-KJQQ9CJ7`)

## dataLayer contract (what the site pushes)

The site pushes these events to `window.dataLayer`. GTM triggers/variables below are built against exactly these names.

### Engagement events (micro-conversions) — on click
| `event` | Parameters |
|---|---|
| `whatsapp_click` | `cta_location` |
| `book_appointment_click` | `cta_location` |
| `call_click` | `cta_location` |

### Lead events (primary conversions) — on form submit, just before redirect
| `event` | Parameters |
|---|---|
| `whatsapp_lead` | `lead_type` (`"whatsapp"`), `cta_location`, `form_name`, `form_phone` (E.164, e.g. `+919054255425`), `page_url` (full landing URL incl. query string) |
| `book_appointment_lead` | `lead_type` (`"book"`), `cta_location`, `form_name`, `form_phone`, `page_url` |

`cta_location` is one of: `header`, `floating_button`, `hero_form`, `doctor_card`, `final_cta`, `sticky_tab`, `contact_section`.

> **PII note:** `form_name` / `form_phone` are personal data. Use them **only** for Google Ads **Enhanced Conversions** (GTM hashes them before sending). Do **not** map them as GA4 event parameters.

---

## Fill these in before running the prompt
- `[GA4_MEASUREMENT_ID]` — e.g. `G-XXXXXXXXXX` (skip the GA4 section if you don't use GA4)
- `[ADS_CONVERSION_ID]` — Google Ads conversion ID, e.g. `AW-123456789`
- `[WHATSAPP_LABEL]` — conversion label for the "WhatsApp Lead" conversion action
- `[BOOK_LABEL]` — conversion label for the "Book Appointment Lead" conversion action
- `[CALL_LABEL]` — conversion label for the "Call Click" conversion action (optional)

Create the matching conversion actions in Google Ads first (Goals → Conversions → New, source = Website, "use GTM"), so you have the labels.

---

## PROMPT FOR YOUR BROWSER AGENT

Copy everything in the block below into your browser agent. Replace the `[...]` placeholders first.

```
You are configuring Google Tag Manager for a landing page. Work in the GTM web UI at https://tagmanager.google.com. Open the container with public ID GTM-KJQQ9CJ7 (account: HSR Urology / whatever it belongs to). Do everything inside the default Workspace. Go slowly, save each item, and DO NOT click "Submit"/"Publish" until I confirm — leave everything saved in the workspace for review.

The website already pushes these dataLayer events (build triggers/variables to match EXACTLY, names are case-sensitive):
- whatsapp_click            params: cta_location
- book_appointment_click    params: cta_location
- call_click                params: cta_location
- whatsapp_lead             params: lead_type, cta_location, form_name, form_phone, page_url
- book_appointment_lead     params: lead_type, cta_location, form_name, form_phone, page_url
form_phone is already in E.164 format (e.g. +919054255425).

STEP 1 — Create Data Layer Variables (Variables → User-Defined → New → "Data Layer Variable"). Create one for each, naming the variable "DLV - <key>" and setting "Data Layer Variable Name" to exactly <key>, Version 2:
  DLV - lead_type        -> lead_type
  DLV - cta_location     -> cta_location
  DLV - form_name        -> form_name
  DLV - form_phone       -> form_phone
  DLV - page_url         -> page_url

STEP 2 — Create Triggers (Triggers → New → Trigger Configuration → "Custom Event"). For each, set "Event name" to the exact string and "This trigger fires on" = All Custom Events. Name them:
  CE - whatsapp_click            (Event name: whatsapp_click)
  CE - book_appointment_click    (Event name: book_appointment_click)
  CE - call_click                (Event name: call_click)
  CE - whatsapp_lead             (Event name: whatsapp_lead)
  CE - book_appointment_lead     (Event name: book_appointment_lead)

STEP 3 — GA4 tags (SKIP THIS WHOLE STEP if [GA4_MEASUREMENT_ID] was not provided).
3a. Tags → New → "Google Tag". Tag ID = [GA4_MEASUREMENT_ID]. Trigger = Initialization - All Pages. Name it "Google Tag - GA4".
3b. Create GA4 Event tags (Tag type "Google Analytics: GA4 Event"). For each, set "Measurement ID / Tag" to the Google Tag above (or [GA4_MEASUREMENT_ID]):
    - Name: "GA4 - generate_lead (whatsapp)" | Event Name: generate_lead | Event Parameters: lead_type={{DLV - lead_type}}, cta_location={{DLV - cta_location}}, method=whatsapp | Trigger: CE - whatsapp_lead
    - Name: "GA4 - generate_lead (book)"     | Event Name: generate_lead | Event Parameters: lead_type={{DLV - lead_type}}, cta_location={{DLV - cta_location}}, method=book | Trigger: CE - book_appointment_lead
    - Name: "GA4 - whatsapp_click"   | Event Name: whatsapp_click   | Param: cta_location={{DLV - cta_location}} | Trigger: CE - whatsapp_click
    - Name: "GA4 - book_click"       | Event Name: book_appointment_click | Param: cta_location={{DLV - cta_location}} | Trigger: CE - book_appointment_click
    - Name: "GA4 - call_click"       | Event Name: call_click       | Param: cta_location={{DLV - cta_location}} | Trigger: CE - call_click
    DO NOT add form_name or form_phone to any GA4 tag (PII policy).

STEP 4 — Google Ads tags (SKIP if [ADS_CONVERSION_ID] not provided).
4a. Tags → New → "Conversion Linker". Trigger = All Pages. Name "Google Ads - Conversion Linker".
4b. Create Google Ads Conversion Tracking tags. For each, set Conversion ID = [ADS_CONVERSION_ID] and the Conversion Label as noted, then under "Include user-provided data from your website" choose "Enter manually" / new user-provided data variable and map Phone Number = {{DLV - form_phone}} and (optional) Name = {{DLV - form_name}} — this enables Enhanced Conversions:
    - Name: "Ads - Conversion - WhatsApp Lead" | Label: [WHATSAPP_LABEL] | Trigger: CE - whatsapp_lead | Enhanced conversions: phone={{DLV - form_phone}}
    - Name: "Ads - Conversion - Book Lead"     | Label: [BOOK_LABEL]     | Trigger: CE - book_appointment_lead | Enhanced conversions: phone={{DLV - form_phone}}
    - Name: "Ads - Conversion - Call Click"    | Label: [CALL_LABEL]     | Trigger: CE - call_click   (no enhanced data; optional)
4c. In Google Ads (Settings → Conversions → Diagnostics, or each conversion action), turn ON Enhanced Conversions for Leads with "Google Tag Manager" as the setup method.

STEP 5 — Test, do NOT publish yet.
  Click "Preview", enter the site URL, and in the connected Tag Assistant:
  - Load the page → confirm "Google Tag - GA4" and "Conversion Linker" fire.
  - Click the floating WhatsApp button → confirm whatsapp_click fires with cta_location=floating_button, then fill the form + submit → confirm whatsapp_lead fires and the GA4 generate_lead + Ads WhatsApp conversion tags fire, with form_phone present on the Ads tag only.
  - Repeat for a "Book Appointment" button (book_appointment_click then book_appointment_lead) and a phone/Call link (call_click).
  Report which tags fired and the variable values you saw. STOP and wait for my confirmation before clicking Submit / Publish.
```

---

## After the agent reports back
Review the Preview results, then in GTM click **Submit → Publish** (version name e.g. "Lead conversion events"). In Google Ads, confirm each conversion action moves to "Recording conversions" within a few hours of live traffic.
