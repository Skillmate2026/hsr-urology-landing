# n8n Setup — HSR Urology lead webhook → Google Sheets

The website posts every lead to **`https://n8n.nomiris.com/webhook/hsrurology`** as an
HTTP **POST** with this JSON body:

```json
{
  "name": "Jane Doe",
  "phone": "9876543210",
  "message": "optional text",
  "lead_type": "whatsapp",        // "whatsapp" or "book"
  "cta_location": "hero_form",    // header | floating_button | hero_form | doctor_card | final_cta | contact_section | prostate_package
  "page_url": "https://hsrurologyclinic.com/?utm_source=google&gclid=..."
}
```

The workflow (Webhook → "Append or update row in sheet") needs three fixes:
1. The Webhook is set to **GET** — it must be **POST** (the site sends POST; a GET
   webhook returns "webhook not registered" 404).
2. The Google Sheets node must map the 6 fields (plus a timestamp) to columns.
3. The workflow must be **Activated** so the production URL goes live.

---

## PROMPT FOR YOUR BROWSER AGENT

Copy everything in the block below into your browser agent.

```
You are configuring an existing n8n workflow in the editor at https://n8n.nomiris.com.
Open the workflow that has a "Webhook" node connected to a Google Sheets
"Append or update row in sheet" node. Make the changes below, save after each node,
and ACTIVATE the workflow at the end. Go step by step.

CONTEXT — the website sends an HTTP POST to https://n8n.nomiris.com/webhook/hsrurology
with this JSON body:
  name, phone, message, lead_type, cta_location, page_url
In the Webhook node's output the body fields live under "body" (e.g. {{ $json.body.name }}).

STEP 1 — Fix the Webhook node:
  - Double-click the "Webhook" node.
  - Set "HTTP Method" to POST   (it is currently GET — this is the key fix).
  - Set "Path" to: hsrurology   (so the full Production URL is
    https://n8n.nomiris.com/webhook/hsrurology).
  - "Authentication": None.
  - "Respond": Immediately   (Response Code 200). The website does not read the
    response, so respond as fast as possible.
  - Save the node.

STEP 2 — Prepare the Google Sheet:
  - In Google Sheets, make sure there is a spreadsheet (e.g. "HSR Urology Leads")
    with a tab/sheet named "Leads", and a HEADER ROW in row 1 with exactly these
    column names, in order:
        Timestamp | Name | Phone | Message | Lead Type | CTA Location | Page URL
  - (The header row must exist so n8n can list the columns for mapping.)

STEP 3 — Configure the "Append or update row in sheet" node:
  - Open the node.
  - Credential: select the connected Google account that can edit that sheet
    (connect a new Google Sheets OAuth credential if none exists).
  - Operation: choose "Append Row" (so every submission is recorded as a new row).
    [Only choose "Append or Update Row" instead if you want to de-duplicate; if so,
     set "Column to match on" = Phone.]
  - Document: select the "HSR Urology Leads" spreadsheet (from list or by URL/ID).
  - Sheet: select the "Leads" tab.
  - Mapping Column Mode: "Map Each Column Manually".
  - Map each column to these values (type them exactly, including the = sign and braces):
        Timestamp     = {{ $now.toISO() }}
        Name          = {{ $json.body.name }}
        Phone         = {{ $json.body.phone }}
        Message       = {{ $json.body.message }}
        Lead Type     = {{ $json.body.lead_type }}
        CTA Location  = {{ $json.body.cta_location }}
        Page URL      = {{ $json.body.page_url }}
    IMPORTANT: if, while testing, the values come through empty, the fields may be at
    the top level instead of under "body" — in that case drop the ".body" part and use
    {{ $json.name }}, {{ $json.phone }}, etc. Check the node's Input panel to see the
    real shape, then use whichever path shows the data.
  - Save the node.

STEP 4 — Test (before activating):
  - Click "Listen for test event" (or "Execute workflow") on the canvas. n8n now waits
    on the TEST url: https://n8n.nomiris.com/webhook-test/hsrurology
  - Tell the person running this that you are listening, so they can send a test POST
    to that test URL. Confirm the execution appears on the canvas and a new row lands
    in the Google Sheet with all 7 columns filled.

STEP 5 — Activate (go live):
  - Toggle the workflow to "Active" (switch in the top-right of the editor).
  - This registers the PRODUCTION url https://n8n.nomiris.com/webhook/hsrurology so the
    live website can post leads. Production runs appear under "Executions", not on the
    canvas.
  - Confirm the toggle shows Active and report done.
```

---

## After the agent finishes
Tell me when the workflow is **Active** (Step 5) and I'll re-send the dummy POST to the
production URL — you should get a 200 and a new row in the sheet. To test the **test**
URL instead (Step 4), have the agent click "Listen for test event" and tell me, and I'll
post to `https://n8n.nomiris.com/webhook-test/hsrurology`.
