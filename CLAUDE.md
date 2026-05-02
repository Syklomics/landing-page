# Syklomics Website — Project Guide

This document explains every file in this project and how to deploy and update the website.

---

## What's in This Folder

```
syklomics-deploy/
├── index.html        ← The entire website (single file)
├── Dockerfile        ← Instructions for building the container
├── nginx.conf        ← Web server configuration
├── deploy.sh         ← One-command deployment script
├── .dockerignore     ← Files to exclude from the container
└── CLAUDE.md         ← This file
```

---

## How to Deploy (Step by Step)

### Prerequisites
- A Google Cloud account with a project already set up
- Billing enabled on your GCP project
- Google Cloud Shell (no installs needed — it's in the GCP Console)

---

### Step 1 — Open Cloud Shell

1. Go to https://console.cloud.google.com
2. Select your GCP project from the top dropdown
3. Click the **`>_`** icon in the top-right toolbar to open Cloud Shell

---

### Step 2 — Upload Your Files

In Cloud Shell, click the **three-dot menu (⋮) → Upload** and upload all files from this folder:
- `index.html`
- `Dockerfile`
- `nginx.conf`
- `deploy.sh`

Then in the Cloud Shell terminal, organise them:

```bash
mkdir syklomics-site
mv index.html Dockerfile nginx.conf deploy.sh syklomics-site/
cd syklomics-site
```

---

### Step 3 — Enable Required APIs (first time only)

```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com
```

---

### Step 4 — Deploy

Replace `YOUR_PROJECT_ID` with your actual GCP project ID (visible in the top bar of GCP Console):

```bash
bash deploy.sh YOUR_PROJECT_ID us-central1
```

This will:
1. Build a Docker container with your website inside
2. Push it to Google Container Registry
3. Deploy it to Cloud Run as a public website

When it finishes, you'll see a live `https://syklomics-site-xxxx.run.app` URL.

---

### Step 5 — Connect Your Custom Domain

1. In GCP Console, go to **Cloud Run → syklomics-site → Custom Domains**
2. Click **Add mapping** and enter your domain (e.g. `syklomics.com`)
3. GCP will show you DNS records — copy them
4. Log in to wherever you registered your domain and paste those DNS records
5. Wait 10–60 minutes for DNS to propagate
6. Your site will be live at your domain with HTTPS automatically

---

## How to Update the Website

When you want to change the website content:

1. Edit `index.html` (the entire site is in this one file)
2. Upload the updated file to Cloud Shell
3. Run the deploy command again:
   ```bash
   bash deploy.sh YOUR_PROJECT_ID us-central1
   ```
The update takes about 2–3 minutes to go live.

---

## Asking Claude to Make Changes

You can paste any section of `index.html` into a conversation with Claude and ask for changes. Useful prompts:

- *"Update the founders section with this new bio: ..."*
- *"Change the hero headline to: ..."*
- *"Add a new section between Science and Differentiation about our regulatory strategy"*
- *"Change the colour of the CTA button to [colour]"*
- *"Add a new nav link called 'Pipeline' pointing to a new section"*

After Claude gives you updated code, replace the relevant section in `index.html` and redeploy.

---

## Colour Reference (Brand Palette)

| Name         | Hex       | Use                              |
|--------------|-----------|----------------------------------|
| Deep Claret  | `#3D0D1E` | Darkest backgrounds, hero        |
| Burgundy     | `#5C1A2E` | Primary brand colour, CTAs       |
| Claret       | `#7B2D42` | Secondary elements               |
| Wine         | `#9B3D55` | Accents, borders                 |
| Rose         | `#C46F84` | Highlights, tags, chart accents  |
| Blush        | `#E8B4C0` | Light accents on dark backgrounds|
| Petal        | `#F5DDE3` | Light section backgrounds        |
| Cream        | `#FBF7F5` | Main light background            |

---

## Font Reference

| Font                 | Role                        | Weights Used      |
|----------------------|-----------------------------|-------------------|
| Outfit               | Headlines, wordmark, UI     | 200, 300, 600, 700, 800 |
| Cormorant Garamond   | Quotes, taglines, accents   | 300 italic        |
| DM Sans              | Body text, captions         | 300, 400, 500     |

All fonts load from Google Fonts — no files to manage.

---

## Website Sections (in order)

1. **Navigation** — fixed top bar, becomes frosted glass on scroll
2. **Hero** — full-screen dark burgundy, animated floating RBC cells, key stats
3. **Problem** — the case for SCD drug discovery reform, four key statistics
4. **Platform** — the three platform pillars (repurposing, novel design, biomarker discovery)
5. **Science** — the three omics layers (genomics, proteomics, metabolomics)
6. **Our Edge** — four competitive advantages vs Healx, BenevolentAI, Recursion
7. **Founders** — Fatima Oyawoye (CEO) and Pamilerin Idowu (CTO)
8. **Roadmap** — three-stage development timeline with cost estimates
9. **CTA** — contact call to action
10. **Footer** — links, locations, legal

---

## Cost Estimate (GCP Cloud Run)

Cloud Run charges only for actual usage. For a marketing/pitch website:
- **Estimated monthly cost: $0–$5** at typical traffic levels
- Cloud Run has a generous free tier (2 million requests/month free)
- You are not charged when the site has no visitors

---

## Support

This website was designed and built using the Syklomics brand identity system.  
For changes or questions, share this file and `index.html` with Claude for context.

*Syklomics Biotechnology · Bristol, UK · Ibadan, Nigeria*
