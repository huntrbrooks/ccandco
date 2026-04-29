# CC & CO. Aesthetics Content Machine Guide

Version: 2026-04-26  
Source of truth: CC & CO. website codebase  
Primary use: Feed into Google NotebookLM, n8n, Claude Code, and scheduled routines so AI systems can create on-brand content for CC & CO. Aesthetics without guessing.

## How To Use This Guide

This document is designed to be the operating manual for an automated content creation machine. Upload the finished PDF into Google NotebookLM as a core source. Reference it from Claude Code prompts, n8n workflow prompts, cron-generated task briefs, and any content approval checklists.

The machine should use this guide to understand:

- What CC & CO. Aesthetics is.
- What the brand looks and sounds like.
- Which services are offered.
- Which claims are allowed and which must be avoided.
- What content to create each day, week, and month.
- What should become Instagram highlights.
- How to build repeatable n8n, Claude Code, NotebookLM, and cron routines.

This guide does not replace human approval. The safest workflow is: generate draft, check against this guide, get owner approval, then post or schedule.

## Source-Of-Truth Summary

CC & CO. Aesthetics is a premium boutique beauty studio in Elwood, Melbourne. The website positions the business around bespoke beauty treatments, confidence-focused results, certified experts, precision, warmth, and a tranquil studio experience.

Canonical brand facts from the website:

- Display name: CC & CO.
- Legal name: CC & CO. Aesthetics.
- Core headline: BEAUTY THAT INSPIRES CONFIDENCE.
- Category: Boutique beauty studio.
- Location: Elwood, Melbourne, VIC, Australia.
- Website: [ccandcoaesthetics.com](https://ccandcoaesthetics.com).
- Instagram handle: @ccandcoaesthetics.
- Email: [cassandra@ccandco.beauty](mailto:cassandra@ccandco.beauty).
- Phone: +61 451 444 250.
- Services: lash extensions, lash lift and tint, professional teeth whitening, brow sculpting, brow tint, and beauty add-on consultation.

Important note: The address in the codebase is configured as 146 Glen Huntly Road, Elwood 3184, Victoria. Before publishing location-heavy content at scale, verify the Google Business Profile details with the business owner.

## Brand Identity

### Brand Positioning

CC & CO. is not positioned as a loud, bargain, trend-chasing beauty salon. It is positioned as a calm, boutique, premium beauty studio where every treatment is considered, personal, and confidence-building.

The brand promise is:

- Enhance natural beauty.
- Deliver polished, tailored results.
- Make clients feel listened to, comfortable, and confident.
- Provide a calm studio experience without fuss.
- Use precision, care, and quality products.

The content machine should keep the brand in the space of elevated beauty, not aggressive sales.

### Brand Personality

The brand should feel:

- Calm.
- Warm.
- Boutique.
- Feminine.
- Polished.
- Confident.
- Reassuring.
- Personal.
- Professional.
- Softly luxurious.
- Detail-oriented.

It should not feel:

- Clinical.
- Cheap.
- Pushy.
- Overly dramatic.
- Meme-heavy.
- Loud.
- Medical.
- Generic.
- Overly corporate.
- Influencer-only.
- Trend-chasing.

### Brand Voice

The voice should be clear, gentle, polished, and confidence-led. Write as if speaking to a client who wants to feel cared for and make an informed beauty choice.

Use phrases like:

- Boutique beauty studio in Elwood.
- Tailored to your features.
- Designed around your goals.
- Calm, considered appointments.
- Natural beauty, enhanced.
- Soft definition.
- Polished everyday beauty.
- Confidence-focused results.
- Precision and care.
- A relaxed studio experience.
- Clear aftercare guidance.
- Low-maintenance beauty.
- Event-ready polish.

Avoid phrases like:

- Guaranteed results.
- Instant transformation.
- Medical-grade unless explicitly verified.
- Pain-free guarantee.
- Permanent results.
- Cheapest lashes in Melbourne.
- Best in Australia.
- Miracle whitening.
- Fix your flaws.
- You need this.
- Any wording that makes clients feel inadequate.

### Tone Formula

Every caption, blog idea, email, or post should generally follow this formula:

1. Start with a client feeling or goal.
2. Connect that goal to a service or tip.
3. Explain the benefit in simple, calm language.
4. Add a soft call to action.

Example:

If you love polished lashes but still want them to feel soft and wearable, classic lash extensions are a beautiful place to start. Each set is mapped to your natural features so the result feels refined, comfortable, and easy for everyday. Book your consultation when you are ready for a fresh set.

## Colour Scheme

The active colour system is defined in the website CSS. Use these colours for content templates, PDF references, social tiles, highlight covers, story backgrounds, and design prompts.

### Primary Palette

| Role | Colour | Hex | Use |
| --- | --- | --- | --- |
| Warm ivory | Background | #fbf7f1 | Main background, story canvases, calm negative space |
| Charcoal | Text | #2c2622 | Main text, high-contrast captions, footer-style graphics |
| Deep brown | Primary | #5e4638 | CTA buttons, headings, strong emphasis |
| Soft tan | Secondary | #ead8ca | Panels, cards, subtle blocks |
| Cream | Muted | #f2e8dd | Background sections, checklist graphics |
| Blush rose | Accent | #d7b6a5 | Highlights, stickers, soft dividers |
| Taupe | Support | #9b8171 | Secondary text, borders, small labels |
| Champagne | Warm metallic | #dbc4a4 | Premium accents, numbered steps, highlight covers |

### Visual Direction

Use:

- Warm neutral backgrounds.
- Soft shadows.
- Rounded panels.
- Editorial close-up photography.
- Calm studio shots.
- Minimal text overlays.
- Serif headings paired with clean sans-serif body text.
- Subtle blush and champagne accents.

Avoid:

- Neon colours.
- High-saturation pinks.
- Harsh black backgrounds unless used as charcoal with restraint.
- Busy collage layouts.
- Overloaded Canva templates.
- Heavy filters that distort skin tone, lashes, brows, or teeth.

### Typography Feel

The site uses:

- Inter for clean body text.
- Cormorant Garamond for elegant headings.

For Canva or design tools, choose combinations that feel similar:

- Heading: Cormorant Garamond, Garamond, Playfair Display, or a soft editorial serif.
- Body: Inter, Helvetica, Open Sans, or a clean modern sans.

Design rule: Use one elegant heading and one clear body font. Do not mix many fonts.

## Company Overview

### What The Company Entails

CC & CO. Aesthetics is a boutique beauty studio focused on elevated beauty treatments in a tranquil, welcoming setting. The business currently offers lashes, teeth whitening, brows, and consultation-led add-ons.

The business is built around:

- Personalised treatments.
- Certified expertise.
- Calm appointments.
- Natural-to-bold beauty options.
- Beauty routines that feel easier.
- Results that support confidence.
- Clear aftercare and guidance.

### Client Experience

The website describes a three-step experience:

1. Consultation: The team starts with the client's goals, lifestyle, natural features, and treatment history.
2. Treatment: The service is performed with precision, premium products, and a calm pace.
3. Aftercare: The client leaves with clear guidance to help results last.

Every piece of content should reinforce that experience.

### Target Audience

The primary audience is women in and around Elwood, Melbourne, and Bayside Melbourne who want polished beauty treatments in a calm studio setting.

Core client groups:

- First-time lash clients.
- Clients who want natural, soft definition.
- Clients who want fuller, more striking lashes.
- Clients preparing for events.
- Clients who prefer low-maintenance beauty.
- Clients wanting brow refinement.
- Clients wanting a brighter smile.
- Clients who value aftercare guidance.
- Clients who want tailored recommendations before booking.

Secondary audience:

- Local collaborators.
- Product partners.
- Beauty brands.
- Training or trade partners.
- Wholesale or business contacts.

## Services On Offer

The content machine must never invent new services. Use the current service list below unless the website is updated.

### Classic Lash Extensions

Category: Lashes  
Duration: 1.5-2 hours  
Starting price: $100  
Best for: Natural definition, first-time lash clients, minimal beauty routines.

Core message:

Classic lash extensions create soft, refined lash enhancement by applying extensions one-to-one for natural-looking definition.

Content angles:

- What classic lashes are.
- Why classic lashes are a good first set.
- Natural vs dramatic lash expectations.
- How lash mapping works.
- Refill timing and aftercare.
- Morning routine simplification.
- How to prepare for a lash appointment.

### Hybrid Lash Extensions

Category: Lashes  
Duration: 1.5-2.5 hours  
Starting price: $110  
Best for: Soft fullness, texture, everyday glam, customised lash looks.

Core message:

Hybrid lashes blend classic and volume techniques for a fuller, textured result while staying wearable.

Content angles:

- Classic vs hybrid lashes.
- Who should choose hybrid lashes.
- How density can be tailored.
- Soft glam everyday lash styling.
- How hybrid lashes support sparse natural lashes when suitable.
- Lash mapping examples.

### Volume Lash Extensions

Category: Lashes  
Duration: 2-2.5 hours  
Starting price: $150  
Best for: Bold lash looks, makeup wearers, event beauty, fuller lash lines.

Core message:

Volume lashes create a fuller and more striking lash set using lightweight fans designed around the client's features.

Content angles:

- What volume lashes are.
- Soft volume vs dramatic volume.
- Why lightweight fans matter.
- Event-ready lash planning.
- How to keep volume lashes fluffy.
- Refill rhythm for fuller sets.

### Lash Lift And Tint

Category: Lashes  
Duration: 40-60 minutes  
Starting price: $70  
Best for: Natural lashes, low-maintenance beauty, holidays, clients not ready for extensions.

Core message:

A lash lift and tint enhances natural lashes by lifting, shaping, and darkening them for a fresh, open-eyed finish.

Content angles:

- Lash lift vs lash extensions.
- Why lash lifts are low maintenance.
- Holiday and travel beauty prep.
- First 24-hour aftercare.
- How long lash lifts commonly last.
- Natural lash enhancement.

### Professional Teeth Whitening

Category: Teeth Whitening  
Duration: 1.5 hours  
Starting price: $300  
Best for: Brighter smiles, event preparation, in-studio cosmetic treatment.

Core message:

Professional teeth whitening is a cosmetic treatment designed to brighten the smile in a guided, comfortable studio setting.

Content angles:

- White diet reminders.
- Event smile prep timeline.
- What to expect at an appointment.
- Pre-care and aftercare.
- Common staining foods and drinks to avoid after treatment.
- Confidence for photos, events, and everyday polish.

Guardrail:

Do not make dental or medical claims. Do not promise exact shade changes. Do not imply treatment is suitable for every person.

### Brow Sculpting

Category: Brows  
Duration: 30-40 minutes  
Starting price: $45  
Best for: Balanced brow shape, clients growing out brows, natural refinement.

Core message:

Brow sculpting tidies, shapes, and refines brows so they frame the client's features with balance.

Content angles:

- Why brow shape changes the face.
- Natural brow refinement.
- Growing out brows.
- Pairing brow sculpting with tint.
- Maintenance timing.
- Before appointment prep.

### Brow Tint

Category: Brows  
Duration: 20-30 minutes  
Starting price: $30  
Best for: Fair brows, sparse-looking brows, soft colour definition, pairing with brow sculpting.

Core message:

Brow tint adds natural-looking depth and definition, helping brows appear fuller and more polished.

Content angles:

- Brow tint for fair brows.
- Brow tint and sculpt pairing.
- Soft definition without heavy makeup.
- Tint shade selection.
- Brow tint aftercare.

### Beauty Add-On Consultation

Category: Consultation  
Duration: 20 minutes  
Starting price: From $25  
Best for: New clients, event planning, clients unsure which service to choose.

Core message:

The beauty add-on consultation helps clients choose the right combination of services for their goals, timing, and suitability.

Content angles:

- Not sure what to book?
- How a consultation helps.
- Event-prep treatment planning.
- Combining lashes, brows, and whitening.
- Personalised recommendations.

## Content Pillars

The content machine should rotate through these pillars so the brand does not become repetitive.

### Pillar 1: Education

Purpose: Help clients understand services before booking.

Examples:

- Classic vs hybrid vs volume lashes.
- Lash lift vs lash extensions.
- What to expect at a teeth whitening appointment.
- Brow sculpting vs brow tint.
- How lash mapping works.
- Why aftercare matters.

### Pillar 2: Confidence And Transformation

Purpose: Tie services back to how clients feel.

Examples:

- Event-ready beauty.
- Fresh set feeling.
- A brighter smile for photos.
- Polished brows for everyday confidence.
- Beauty that simplifies the morning routine.

Use before and after content only when real images are available and approved.

### Pillar 3: Aftercare

Purpose: Improve client results and reduce avoidable problems.

Examples:

- Lash cleansing reminders.
- Refill timing.
- Lash lift first 24 hours.
- Teeth whitening white diet.
- Brow tint aftercare.
- Appointment prep checklists.

### Pillar 4: Trust And Studio Experience

Purpose: Show why the studio feels different.

Examples:

- Calm appointments.
- Consultation-led treatment.
- Certified experts.
- Premium products.
- Clear aftercare.
- Client comfort.

### Pillar 5: Local Elwood Beauty

Purpose: Support local SEO and community relevance.

Examples:

- Beauty studio in Elwood.
- Event prep for Melbourne weekends.
- Bayside beauty routines.
- Local appointment reminders.
- Soft glam for local occasions.

Do not overuse suburb keywords unnaturally. Keep it readable.

### Pillar 6: Social Proof

Purpose: Turn reviews into trust-building content.

Examples:

- Quote cards.
- Story screenshots.
- "What clients say" posts.
- Service-specific testimonials.
- Review request reminders.

Never invent reviews. Use real testimonials only.

### Pillar 7: Booking And Availability

Purpose: Convert interest into appointments.

Examples:

- "Not sure what to book? Start with a consultation."
- "Planning for an event? Book ahead."
- "Refill timing reminder."
- "Book your lash appointment."

Avoid fake urgency unless actual appointment availability is verified.

### Pillar 8: Trade And Collaboration

Purpose: Support the trade page and business partnerships.

Examples:

- Partnership enquiries.
- Training opportunities.
- Product collaborations.
- Wholesale or brand conversations.
- Professional studio values.

Keep trade content polished and business-aware.

## Platform Strategy

### Instagram Feed

Best use:

- Reels.
- Carousel education posts.
- Soft testimonial graphics.
- Service explainers.
- Before/after posts when approved.
- Studio experience photos.

Feed content should look elegant and calm. Do not overload graphics with text.

Recommended feed mix per week:

- 2 educational posts.
- 1 service spotlight.
- 1 social proof or transformation post.
- 1 soft booking or consultation post.

### Instagram Reels

Best use:

- Appointment process.
- Lash brush-through.
- Studio calm moments.
- Treatment prep.
- Aftercare reminders.
- "Choose your lash set" explainers.
- Event prep ideas.

Reel structure:

1. Hook in the first 2 seconds.
2. Show close-up treatment or studio detail.
3. Add 2-4 short text overlays.
4. End with a soft CTA.

Example reel hook:

"Not sure whether classic or hybrid lashes are right for you?"

### Instagram Stories

Best use:

- Daily light-touch activity.
- Polls.
- Appointment reminders.
- Behind the scenes.
- Aftercare tips.
- Booking prompts.
- Highlight-building content.

Daily story rhythm:

- 1 behind-the-scenes or studio mood story.
- 1 helpful tip or appointment reminder.
- 1 soft CTA or interactive poll.

### Instagram Highlights

Highlights should act like a mini website for clients who discover the brand on Instagram.

Recommended highlight order:

1. Start Here.
2. Lashes.
3. Lash Lift.
4. Whitening.
5. Brows.
6. Aftercare.
7. Reviews.
8. Prices.
9. Book.
10. Studio.
11. Trade.

Highlight cover style:

- Warm ivory background.
- Deep brown or taupe icon.
- Simple serif or clean uppercase label.
- No clutter.

### Google Business Profile

Best use:

- Weekly posts for local discovery.
- Service updates.
- Seasonal appointment reminders.
- Review-building prompts.
- Photos of studio and approved treatment work.

Recommended cadence:

- 1 Google Business Profile update per week.
- 2-4 new approved photos per month if available.
- Review requests after appointments.

### Website Blog Or Service Content Ideas

The current site does not include a blog. If a blog or article system is added later, use these topics:

- Classic vs Hybrid vs Volume Lashes: Which Set Is Right For You?
- Lash Lift vs Lash Extensions: A Calm Guide For First-Time Clients.
- Teeth Whitening Aftercare: What To Avoid For The First 24-48 Hours.
- Brow Sculpting And Brow Tint: How They Work Together.
- How To Prepare For Your First Lash Appointment In Elwood.
- Beauty Appointment Planning Before A Wedding, Event, Or Holiday.

Do not create a blog route unless the website owner asks for it. For now, these can become captions, carousels, or NotebookLM references.

### Email And SMS

Use only when the business has consent and a proper sending process.

Email ideas:

- New client welcome.
- First appointment preparation.
- Aftercare follow-up.
- Refill reminder.
- Seasonal event prep.
- Review request.
- Service spotlight.

SMS ideas:

- Appointment prep checklist.
- Refill reminder.
- Post-treatment aftercare link.
- Review request.

Keep SMS short and practical.

## Posting Cadence

### Weekly Schedule

Monday:

- Theme: Education.
- Output: Carousel or Reel.
- Example: "Classic vs Hybrid Lashes: How To Choose."

Tuesday:

- Theme: Studio trust.
- Output: Story sequence.
- Example: Consultation, treatment, aftercare.

Wednesday:

- Theme: Service spotlight.
- Output: Feed post or Reel.
- Example: Lash Lift and Tint for low-maintenance beauty.

Thursday:

- Theme: Aftercare.
- Output: Story plus highlight save.
- Example: Lash cleansing reminders.

Friday:

- Theme: Event prep or booking.
- Output: Reel, story, or Google Business Profile post.
- Example: Planning beauty appointments before weekend events.

Saturday:

- Theme: Social proof.
- Output: Review card or story.
- Example: Client quote about natural polished lashes.

Sunday:

- Theme: Planning.
- Output: Internal content machine routine.
- Example: Generate next week's content drafts and owner approval board.

### Monthly Schedule

Week 1:

- Focus on lashes.
- Include classic, hybrid, volume, or lash lift content.

Week 2:

- Focus on brows.
- Include sculpting, tint, and low-effort polish.

Week 3:

- Focus on teeth whitening.
- Include event prep, white diet, and what to expect.

Week 4:

- Focus on trust, reviews, studio, and consultation.
- Include testimonials and booking pathways.

If there are five weeks in a month, use the fifth week for seasonal content, trade, FAQs, or a recap.

## Content Matrix

Use this matrix to generate varied content without losing the brand.

| Service | Education | Trust | Aftercare | Conversion |
| --- | --- | --- | --- | --- |
| Classic lashes | What classic lashes are | Why they suit first-time clients | Cleanse and refill timing | Book a soft natural set |
| Hybrid lashes | Classic vs hybrid | Tailored density | Brush and avoid oil | Book soft glam lashes |
| Volume lashes | Soft vs bold volume | Lightweight fan explanation | Keep lashes fluffy | Book event-ready lashes |
| Lash lift | Lift vs extensions | Low-maintenance option | Keep dry for 24 hours | Book natural lash enhancement |
| Teeth whitening | What to expect | Comfort-led studio appointment | White diet 24-48 hours | Book smile prep |
| Brow sculpting | How shaping frames features | Tailored to natural growth | Avoid heat and exfoliation | Book brow refinement |
| Brow tint | Tint for fuller-looking brows | Shade selected for client | Avoid oils and exfoliation | Pair tint with brow sculpting |
| Consultation | Choosing the right service | Personal recommendations | Depends on booked services | Start with a consultation |

## Instagram Highlight Strategy

### Start Here

Purpose: Introduce the studio quickly.

Include:

- Studio name and location.
- "Boutique beauty studio in Elwood."
- Core services.
- Booking pathway.
- What to expect.

### Lashes

Purpose: Explain lash options.

Include:

- Classic lashes.
- Hybrid lashes.
- Volume lashes.
- How to choose.
- Refill timing.
- Lash aftercare.

### Lash Lift

Purpose: Separate natural lash enhancement from extensions.

Include:

- What a lash lift and tint is.
- Who it is for.
- First 24-hour aftercare.
- Holiday/travel angle.

### Whitening

Purpose: Build confidence around teeth whitening.

Include:

- What to expect.
- Appointment duration.
- White diet.
- Event prep.
- Comfort-led appointment.

### Brows

Purpose: Explain brow services.

Include:

- Brow sculpting.
- Brow tint.
- Pairing the two.
- Aftercare.
- Natural results.

### Aftercare

Purpose: Make aftercare easy to find.

Include:

- Lash extensions aftercare.
- Lash lift aftercare.
- Teeth whitening aftercare.
- Brow aftercare.
- When to rebook.

### Reviews

Purpose: Build trust.

Include:

- Approved testimonials.
- Review screenshots.
- Service-specific feedback.

### Prices

Purpose: Reduce friction.

Include:

- Starting prices.
- Duration guidance.
- Reminder that final suitability may be discussed at appointment.

### Book

Purpose: Make conversion obvious.

Include:

- Booking link.
- Contact options.
- Consultation option.
- Appointment prep.

### Studio

Purpose: Show the vibe.

Include:

- Studio details.
- Calm treatment space.
- Tools and products.
- Behind-the-scenes care.

### Trade

Purpose: Support partnerships.

Include:

- Collaboration enquiries.
- Training or product partnership interest.
- Trade contact CTA.

## Automation Architecture

The content machine should have four layers.

### Layer 1: Knowledge Base

Tool: Google NotebookLM.

Sources:

- This PDF.
- Current website pages.
- Service pages.
- Approved testimonials.
- Brand images and captions if available.
- Any owner-approved price sheet or service menu.
- Google Business Profile facts.
- Instagram bio and highlight screenshots.

NotebookLM role:

- Answer questions about the brand.
- Summarise service facts.
- Create content briefs.
- Check if content matches the guide.
- Provide source-grounded talking points.

### Layer 2: Planning And Orchestration

Tool: n8n.

Role:

- Run scheduled workflows.
- Pull the current month, season, and service focus.
- Generate content briefs.
- Send prompts to Claude.
- Save drafts to Google Docs, Notion, Airtable, or Google Sheets.
- Create approval tasks.
- Move approved posts into a publishing queue.

### Layer 3: Creative Generation

Tool: Claude Code or Claude.

Role:

- Generate captions.
- Generate carousel copy.
- Generate Reel scripts.
- Generate story sequences.
- Generate Google Business Profile posts.
- Generate email drafts.
- Generate image briefs for Canva or design tools.
- Check outputs against brand guardrails.

### Layer 4: Scheduling And Routine Execution

Tools: cron jobs, n8n schedules, calendar reminders.

Role:

- Daily content draft generation.
- Weekly calendar generation.
- Monthly strategy refresh.
- Review request prompts.
- Highlight maintenance prompts.
- Content performance summary prompts.

## n8n Workflow Blueprints

### Workflow 1: Weekly Content Calendar Generator

Trigger:

- Every Sunday at 5:00 PM.

Inputs:

- Current date.
- Upcoming week.
- Monthly service focus.
- This guide.
- Recent posts list if available.
- Upcoming promotions or availability if manually entered.

Steps:

1. Determine the week theme using the monthly schedule.
2. Generate five feed ideas, five story ideas, one Google Business Profile post, and one email idea.
3. Check for service balance.
4. Check every draft against guardrails.
5. Save the week plan to Google Sheets or Notion.
6. Notify owner for approval.

Output columns:

- Date.
- Platform.
- Content pillar.
- Service.
- Format.
- Hook.
- Caption draft.
- Visual brief.
- CTA.
- Highlight destination.
- Approval status.

### Workflow 2: Daily Caption And Story Draft

Trigger:

- Every weekday at 8:00 AM.

Steps:

1. Read today's approved content calendar row.
2. Generate 2 caption versions.
3. Generate 3 story frames.
4. Generate a visual brief.
5. Generate alt text.
6. Generate a short approval checklist.
7. Send to owner via email, Slack, or a project board.

Guardrail:

- Do not auto-post without approval unless the owner explicitly approves that workflow.

### Workflow 3: Review Repurposing

Trigger:

- When a new approved review is added to the review sheet.

Steps:

1. Confirm review is real and approved for marketing use.
2. Identify service mentioned.
3. Create one quote card caption.
4. Create one story sequence.
5. Create one Google Business Profile post idea.
6. Suggest highlight placement under Reviews.

Guardrail:

- Never invent names, services, or results.

### Workflow 4: Aftercare Reminder Generator

Trigger:

- Daily or after appointment export, if appointment data is available and consent is handled.

Steps:

1. Identify appointment service.
2. Generate aftercare message from service rules.
3. Keep message short and practical.
4. Send to approval queue or client messaging tool if legally and operationally approved.

Examples:

- Lash extensions: cleanse and brush daily, avoid oil-based products, avoid pulling or sleeping directly on lashes.
- Teeth whitening: follow white diet 24-48 hours, avoid staining food and drinks.
- Brow services: avoid heavy makeup, heat, steam, exfoliation, and oils immediately after treatment where relevant.

### Workflow 5: Monthly Content Performance Review

Trigger:

- First day of each month at 9:00 AM.

Inputs:

- Post list.
- Reach, saves, comments, enquiries, profile visits, bookings if available.

Steps:

1. Identify top posts by saves and enquiries.
2. Identify weak posts.
3. Extract repeated questions from comments or DMs.
4. Recommend next month's pillar mix.
5. Generate a one-page strategy summary.

## Cron Job Routines

Cron jobs can be used to trigger scripts or webhooks that start n8n workflows.

Example schedules:

```text
0 17 * * 0    Weekly content calendar every Sunday at 5 PM
0 8 * * 1-5   Daily content drafts every weekday at 8 AM
0 10 * * 4    Weekly Google Business Profile draft every Thursday at 10 AM
0 9 1 * *     Monthly strategy review on the first day of the month at 9 AM
0 15 * * 5    Highlight maintenance reminder every Friday at 3 PM
```

Cron routine principles:

- Keep generation separate from publishing.
- Log every generated output.
- Store drafts in one place.
- Require human approval for public posts.
- Include a fail-safe if source data is missing.

## Google NotebookLM Setup

Create one NotebookLM notebook called:

CC & CO. Aesthetics Content Machine

Upload:

- This PDF.
- Website service page exports.
- Current price/service menu.
- Approved testimonials.
- Brand photos or visual references if available.
- Any existing captions that performed well.
- Any owner notes about promotions or availability.

NotebookLM custom instruction:

Use the uploaded CC & CO. guide as the primary source of truth. Create content only for CC & CO. Aesthetics, a boutique beauty studio in Elwood, Melbourne. Maintain a calm, polished, premium, confidence-led tone. Do not invent services, prices, business details, medical claims, booking availability, results, reviews, or guarantees. If information is missing, say what needs to be confirmed.

NotebookLM questions to ask weekly:

- What should CC & CO. post this week based on the guide?
- Which service should be highlighted for local clients?
- What aftercare reminders are relevant this week?
- What are five Instagram Reel ideas that match the brand tone?
- Which posts should be saved as highlights?
- What topics should be avoided because they make unsupported claims?

## Claude Code Routine

Claude Code can be used as the content operations assistant. It should not directly change the website unless asked. For content work, use it to generate structured drafts and check brand alignment.

Recommended Claude Code project routine:

1. Read this guide.
2. Read the current source files if working inside the repo.
3. Generate a content brief.
4. Draft content.
5. Run a brand and claims check.
6. Save output to a content queue.
7. Ask for human approval before publishing.

Claude Code system prompt:

You are the CC & CO. Aesthetics content operations assistant. Your job is to create calm, polished, boutique beauty content for a studio in Elwood, Melbourne. Use the guide as the source of truth. Keep copy warm, precise, confidence-led, and easy to understand. Do not invent prices, availability, results, reviews, services, locations, medical claims, or booking guarantees. When unsure, flag the uncertainty.

## Prompt Library

### Weekly Calendar Prompt

Create a one-week content calendar for CC & CO. Aesthetics. Use the brand guide as the source of truth. Include Instagram feed, Reels, stories, Google Business Profile, and one optional email idea. Balance education, aftercare, trust, social proof, local Elwood relevance, and booking content. Include the content pillar, service focus, hook, caption direction, visual brief, CTA, and highlight destination. Do not invent offers or availability.

### Instagram Caption Prompt

Write three Instagram caption options for CC & CO. Aesthetics about [SERVICE/TOPIC]. Keep the tone calm, polished, boutique, and confidence-led. Use Australian English. Include a soft CTA. Avoid medical claims, guaranteed results, fake urgency, and invented details. Each caption should be 80-140 words.

### Reel Script Prompt

Create a 15-25 second Instagram Reel script for CC & CO. Aesthetics about [SERVICE/TOPIC]. Include a 2-second hook, shot list, text overlays, voiceover or caption copy, and CTA. Keep it elegant, simple, and practical. Suggest whether the Reel should be saved to a highlight.

### Carousel Prompt

Create a 6-slide Instagram carousel for CC & CO. Aesthetics about [SERVICE/TOPIC]. Include slide titles, short body copy, design notes, and caption. Keep text minimal and easy to read. Use the brand colours: warm ivory, deep brown, blush, champagne, taupe, and charcoal.

### Story Sequence Prompt

Create a 4-frame Instagram story sequence for CC & CO. Aesthetics about [SERVICE/TOPIC]. Include frame copy, sticker ideas, poll or question prompt, CTA, and recommended highlight. Keep it warm, useful, and low-pressure.

### Aftercare Prompt

Create an aftercare post for CC & CO. Aesthetics about [SERVICE]. Use only approved aftercare from the guide. Keep it simple, practical, and reassuring. Include a save-worthy checklist and a soft CTA to message or book if unsure.

### Google Business Profile Prompt

Write a Google Business Profile post for CC & CO. Aesthetics about [SERVICE/TOPIC]. Keep it local to Elwood and Melbourne, informative, and concise. Include a soft booking CTA. Do not keyword stuff.

### Review Repurposing Prompt

Turn this approved client review into three content pieces for CC & CO. Aesthetics: one Instagram caption, one story sequence, and one quote card text. Do not change the meaning of the review. Do not invent extra claims. Review: [PASTE REVIEW].

### Content QA Prompt

Review the following content against the CC & CO. Aesthetics guide. Check tone, brand fit, service accuracy, claims, price accuracy, local SEO, CTA quality, and highlight suitability. Return: approved, needs edits, or reject. Explain any required edits. Content: [PASTE CONTENT].

## Caption Templates

### Education Template

Not sure whether [OPTION A] or [OPTION B] is right for you? At CC & CO., every appointment starts with a calm consultation so your treatment can be tailored to your features, goals, and lifestyle. [SERVICE] is ideal if you want [BENEFIT]. If you are unsure, start with a consultation and we can guide you through the best option.

### Aftercare Template

Save this for after your [SERVICE] appointment. For the best result, [AFTERCARE TIP 1], [AFTERCARE TIP 2], and [AFTERCARE TIP 3]. A little care makes a big difference to how polished your result feels. Message us if you are unsure what is right for your treatment.

### Social Proof Template

Kind words from a CC & CO. client. "[REVIEW QUOTE]" We love creating calm, considered appointments where clients feel listened to and confident in their result. If you are ready for [SERVICE], book your appointment or start with a consultation.

### Booking Template

Planning ahead for [EVENT/SEASON]? Give yourself time for a calm appointment, clear aftercare, and a result that feels polished without rushing. CC & CO. offers [SERVICE LIST RELEVANT TO TOPIC] from our boutique Elwood studio. Book when you are ready.

### Local SEO Template

Looking for [SERVICE] in Elwood? CC & CO. is a boutique beauty studio offering tailored appointments in a calm, welcoming space. Whether you want [BENEFIT 1] or [BENEFIT 2], we will guide you through a treatment option that suits your goals.

## Visual Brief Library

### Lash Extension Visuals

Use:

- Close-up lash brush-through.
- Side angle showing curl and mapping.
- Clean studio bed setup.
- Lash tools neatly arranged.
- Client-safe, approved finished result photos.

Avoid:

- Overly harsh flash.
- Heavy filters.
- Unapproved client faces.
- Messy background.

### Teeth Whitening Visuals

Use:

- Calm treatment setup.
- Smile-prep lifestyle imagery.
- White diet checklist graphics.
- Soft before/after only if approved and realistic.

Avoid:

- Medical-looking dental claims.
- Exact shade promises.
- Over-whitened edits.

### Brow Visuals

Use:

- Brow mapping or grooming detail.
- Soft face-framing results.
- Tint shade consultation.
- Paired lash and brow polish.

Avoid:

- Overly sharp, unnatural brow edits.
- Before/after images without consent.

### Studio Visuals

Use:

- Warm lighting.
- Calm treatment space.
- Soft textures.
- Clean tools.
- Champagne, ivory, taupe, blush styling.

Avoid:

- Clutter.
- Harsh fluorescent lighting.
- Overly busy templates.

## Content Approval Checklist

Before anything is posted, check:

- Does it match the calm, polished, boutique tone?
- Is the service currently offered?
- Is the price accurate if mentioned?
- Is the location accurate?
- Are claims realistic and non-medical?
- Are client images and reviews approved?
- Is the CTA soft and clear?
- Does it support one content pillar?
- Should it be saved to a highlight?
- Does it avoid fake urgency?
- Does it avoid making clients feel inadequate?
- Does it use Australian English?

If any answer is uncertain, hold the post for human review.

## Guardrails For AI Systems

Never invent:

- New services.
- New prices.
- New locations.
- Appointment availability.
- Promotions.
- Client reviews.
- Before/after outcomes.
- Medical or dental claims.
- Guarantees.
- Staff names or qualifications not in source material.

Never say:

- Results are guaranteed.
- A treatment is suitable for everyone.
- Whitening will achieve a specific number of shades.
- Lash extensions will not affect natural lashes in all cases.
- Any health or medical claim that is not verified.

Always do:

- Use the source guide first.
- Flag missing information.
- Ask for confirmation before publishing uncertain content.
- Keep content warm, helpful, and brand-safe.
- Keep CTAs clear but low-pressure.

## Example Weekly Content Plan

### Monday Feed Carousel

Topic: Classic vs Hybrid Lashes  
Pillar: Education  
Hook: Not sure which lash set is right for you?  
CTA: Start with a consultation or book your lash appointment.  
Highlight: Lashes.

### Tuesday Stories

Topic: What to expect at CC & CO.  
Pillar: Trust  
Frames: Consultation, treatment, aftercare, booking CTA.  
Highlight: Start Here.

### Wednesday Reel

Topic: Lash Lift and Tint  
Pillar: Low-maintenance beauty  
Hook: Want natural lashes with a fresh lifted finish?  
Highlight: Lash Lift.

### Thursday Google Business Profile

Topic: Professional Teeth Whitening in Elwood  
Pillar: Local SEO and education  
CTA: Book a cosmetic teeth whitening appointment.

### Friday Stories

Topic: White diet reminder  
Pillar: Aftercare  
Highlight: Whitening and Aftercare.

### Saturday Feed Post

Topic: Client testimonial  
Pillar: Social proof  
Highlight: Reviews.

### Sunday Internal Routine

Topic: Generate next week's content calendar  
Pillar: Operations  
Action: Owner reviews and approves drafts.

## Example Content Outputs

### Classic Lash Caption

Classic lashes are a beautiful choice if you want soft, natural definition without a heavy finish. Each set is applied one-to-one and tailored to your eye shape, preferred curl, and everyday routine. The result is polished, refined, and easy to wear. If you are new to lash extensions, classic lashes are often a lovely place to start. Book your appointment or start with a consultation if you are unsure which set suits you best.

### Teeth Whitening Story Sequence

Frame 1: Planning a brighter smile for an event?  
Frame 2: Professional teeth whitening at CC & CO. is a guided cosmetic treatment in a calm studio setting.  
Frame 3: After your appointment, follow a white diet for 24-48 hours and avoid staining food and drinks.  
Frame 4: Book ahead so your smile prep feels relaxed, not rushed.

### Brow Sculpting Caption

Brow sculpting is about balance, not overworking your brows. The shape is refined around your natural growth, face shape, and preferred finish so your brows feel polished while still looking like you. It is a beautiful option if you want soft face-framing definition and simple maintenance guidance. Pair with brow tint if you would like extra depth.

## Maintenance Routine

Update this guide whenever:

- Services change.
- Prices change.
- Business address changes.
- Booking link changes.
- New testimonials are approved.
- New brand photos are available.
- A new service category is added.
- The website copy changes.
- The owner changes tone, offer, or strategy.

Monthly maintenance checklist:

- Confirm service list and prices.
- Confirm booking process.
- Add approved reviews.
- Remove outdated content prompts.
- Review top-performing posts.
- Refresh next month's service focus.
- Check highlight order.
- Check Google Business Profile details.

## Final Operating Principle

The content machine should make CC & CO. feel more consistent, more helpful, and easier to book. It should not make the brand louder, riskier, or less personal.

When in doubt, choose calm clarity:

- Be useful.
- Be warm.
- Be accurate.
- Be polished.
- Be confidence-led.
- Ask for human approval before publishing.
