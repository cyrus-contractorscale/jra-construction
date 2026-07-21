# JRA Construction — Site Audit Overview

Source of truth for the Next.js conversion. Crawled from live sitemaps on 2026-07-21. **122 pages crawled successfully, 0 failures.**

## Notes / flags

- `sitemap.xml` and `sitemap_index.xml` return **HTTP 500 to non-browser user agents** (bot protection); all sitemaps load fine with a browser UA. Not a content issue, but worth knowing for SEO tooling.
- **No broken or inaccessible pages found** — every sitemap URL returned HTTP 200 with content.
- **4 service-area URLs are aliases, not real pages**: `/service-area/bombay/`, `/service-area/east-tamaki/`, `/service-area/tamaki/`, and `/service-area/wiri/` render the generic Service Areas index content and set `rel=canonical` to `/service-areas/`. Only **39 service-area pages have unique content**. In the Next.js build these 4 should be redirects to `/service-areas/`.
- Several West/North service-area pages share a copy-pasted meta title ("Home Renovation Builder Bombay | JRA Construction") that doesn't match their suburb — an existing SEO defect on the live site, faithfully recorded in 04-service-areas.md. Worth fixing during conversion.

## Page inventory

| # | Group | Pages | Report file |
|---|---|---|---|
| 1 | Core pages | 12 | 01-core-pages.md |
| 2 | Services | 11 | 02-services.md |
| 3 | Projects (portfolio) | 22 | 03-projects.md |
| 4 | Service areas | 44 | 04-service-areas.md |
| 5 | Estimate funnel | 5 | 05-estimate-funnel.md |
| 6 | Blog posts | 28 | 06-blog.md |
| | **Total** | **122** | |

## Full URL list

| URL | Sitemap | Meta title |
|---|---|---|
| https://jraconstruction.co.nz/ | page | Home Builders In Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/about/ | page | Auckland's Trusted Building Team \| Instant Online Estimate |
| https://jraconstruction.co.nz/an-ultimate-guide-to-kitchen-renovations-in-auckland/ | post | Kitchen Renovation Ultimate Guide \| JRA Construction |
| https://jraconstruction.co.nz/aucklands-expert-bathroom-renovation-ultimate-guide-tips-tricks-and-more/ | post | Bathroom Renovation Guide \| JRA Construction |
| https://jraconstruction.co.nz/bathroom-renovations-guide/ | post | Bathroom Renovations Guide \| JRA Construction |
| https://jraconstruction.co.nz/blog/ | page | Building and Renovation Blog \| Instant Online Estimate |
| https://jraconstruction.co.nz/builder-architect-collaboration-auckland/ | post | Builder-Architect Collaboration in Auckland \| JRA Construction |
| https://jraconstruction.co.nz/building-your-dream-home-in-new-zealand-the-ultimate-new-build-guide/ | post | The Ultimate New Home Guide \| JRA Construction |
| https://jraconstruction.co.nz/careers/ | page | Auckland Construction Management \| 24-Hour Callback Policy |
| https://jraconstruction.co.nz/choosing-a-new-home-builder/ | post | Choosing a New Home Builder \| JRA Construction |
| https://jraconstruction.co.nz/contact/ | page | Contact Home Builder in Auckland \| Free Consultation |
| https://jraconstruction.co.nz/cost-to-build-new-house-auckland/ | post | Real Cost to Build a New House in Auckland 2026 \| JRA Construction |
| https://jraconstruction.co.nz/custom-home-building-timeline/ | post | A Typical Custom Home Building Timeline in Auckland - JRA Construction |
| https://jraconstruction.co.nz/custom-home-construction-checklist/ | post | Custom Home Construction Checklist for Auckland \| JRA Construction |
| https://jraconstruction.co.nz/custom-home-exterior-design/ | post | Custom Home Exterior Design Auckland \| Slopes & Durability \| JRA Construction |
| https://jraconstruction.co.nz/custom-home-floor-plans-in-auckland/ | post | Custom Home Floor Plans in Auckland \| JRA Construction |
| https://jraconstruction.co.nz/custom-home-warranties-insurance/ | post | Auckland Custom Home Warranties Insurance Gaps: Assessment Guide \| JRA Construction |
| https://jraconstruction.co.nz/e-addition/ | page | House Addition Cost Calculator Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/e-bathroom/ | page | Bathroom Renovation Cost Calculator \| Instant Online Estimate |
| https://jraconstruction.co.nz/e-home/ | page | Custom Home Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/e-kitchen/ | page | Kitchen Renovation Cost Calculator \| Instant Online Estimate |
| https://jraconstruction.co.nz/estimate/ | page | Construction & Renovation Estimates \| Instant Online |
| https://jraconstruction.co.nz/faq/ | page | FAQ for Home Building Construction Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/financing-custom-home-construction/ | post | Financing Custom Home Construction Guide \| JRA Construction |
| https://jraconstruction.co.nz/guarantee/ | page | Building Guarantee - JRA Construction |
| https://jraconstruction.co.nz/home-extensions-guide/ | post | Home Extensions Ultimate Guide \| JRA Construction |
| https://jraconstruction.co.nz/home-renovations-a-complete-guide-for-auckland-homeowners/ | post | Expert Auckland Home Renovation Guide \| JRA Construction |
| https://jraconstruction.co.nz/how-it-works/ | page | How it works - JRA Construction |
| https://jraconstruction.co.nz/how-much-does-a-home-addition-cost-in-auckland/ | post | How Much Does a Home Addition Cost in Auckland? \| JRA Construction |
| https://jraconstruction.co.nz/how-much-does-a-new-build-cost-in-auckland/ | post | Auckland New Build Cost \| JRA Construction |
| https://jraconstruction.co.nz/how-much-does-home-renovation-cost/ | post | Home Renovation Costs in Auckland \| JRA Construction |
| https://jraconstruction.co.nz/managing-custom-home-construction/ | post | Managing Custom Home Construction Guide \| JRA Construction |
| https://jraconstruction.co.nz/new-build-building-codes-and-regulations-auckland/ | post | New Build Building Codes and Regulations in Auckland \| JRA Construction |
| https://jraconstruction.co.nz/new-build-construction-costs/ | post | Real Costs of Building Your New Home |
| https://jraconstruction.co.nz/new-build-design-ideas/ | post | New Build Design Ideas \| JRA Construction |
| https://jraconstruction.co.nz/new-build-materials/ | post | New Build Materials \| JRA Construction |
| https://jraconstruction.co.nz/planning-a-home-extension-in-auckland-heres-the-step-by-step-process-you-should-know/ | post | Home Extension Process in Auckland \| JRA Construction |
| https://jraconstruction.co.nz/planning-your-new-build/ | post | Planning Your New Build \| JRA Construction |
| https://jraconstruction.co.nz/privacy-policy/ | page | Comprehensive Home Builder Privacy Policy \| JRA Construction |
| https://jraconstruction.co.nz/project/ | project | Projects - JRA Construction |
| https://jraconstruction.co.nz/project/bellevue/ | project | Bellevue - JRA Construction |
| https://jraconstruction.co.nz/project/cleve-road-green-bay/ | project | Cleve Road, Green Bay - JRA Construction |
| https://jraconstruction.co.nz/project/fir-street-waterview/ | project | Fir Street, Waterview \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/gunson-street-freemans-bay/ | project | Gunson Street, Freemans Bay \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/hurstmere-road/ | project | Hurstmere Road - JRA Construction |
| https://jraconstruction.co.nz/project/khukhu-milford/ | project | KhuKhu Milford - JRA Construction |
| https://jraconstruction.co.nz/project/laingholm-baptist-church/ | project | Laingholm Baptist Church \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/lucinda-place-glen-eden/ | project | Lucinda Place, Glen Eden \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/matakana/ | project | Matakana Renovation & Extension \| JRA Construction |
| https://jraconstruction.co.nz/project/mcleod-road-te-atatu/ | project | Mcleod Road, Te Atatu - JRA Construction |
| https://jraconstruction.co.nz/project/mount-eden-renovation/ | project | Mount Eden Villa Renovation Project \| JRA Construction |
| https://jraconstruction.co.nz/project/muriwai-renovation/ | project | Muriwai Renovation \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/north-piha-road/ | project | North Piha Road - JRA Construction |
| https://jraconstruction.co.nz/project/queensway/ | project | New Build Queensway Project \| JRA Construction |
| https://jraconstruction.co.nz/project/saint-leonards-road-mount-eden/ | project | Saint Leonards Road, Mount Eden Villa \| JRA Construction |
| https://jraconstruction.co.nz/project/sandringham-project/ | project | Sandringham Project \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/seacombe-road-point-chevalier/ | project | Seacombe Road, Point Chevalier Home Extension & Renovation |
| https://jraconstruction.co.nz/project/taipari-road-te-atatu/ | project | Taipari Road and Te Atatu Home Project \| JRA Construction |
| https://jraconstruction.co.nz/project/te-wiata-place-avondale/ | project | Te Wiata Place, Avondale \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/tiri-road-whangaparaoa/ | project | Tiri Road, Whangaparāoa \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/project/westminster-road-balmoral/ | project | Westminster Road, Balmoral \| JRA Construction in Auckland |
| https://jraconstruction.co.nz/service-area/bombay/ | service-area | Auckland Home Builders Service Area Coverage \| Instant Online Estimate |
| https://jraconstruction.co.nz/service-area/east-tamaki/ | service-area | Auckland Home Builders Service Area Coverage \| Instant Online Estimate |
| https://jraconstruction.co.nz/service-area/epsom/ | service-area | Home Renovation Builder Epsom \| JRA Construction |
| https://jraconstruction.co.nz/service-area/freemansbay-nz/ | service-area | Home Renovation Builder in Freemans Bay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/grey-lynn-nz/ | service-area | Home Renovation Builder in Grey Lynn NZ \| JRA Construction |
| https://jraconstruction.co.nz/service-area/herne-bay-nz/ | service-area | Home Renovation Builder in Herne Bay, NZ \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-albany/ | service-area | Custom Extensions & Home Renovation Albany \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-avondale/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-blockhouse-bay/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-browns-bay/ | service-area | Coastal Extensions & Home Renovation Browns Bay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-dairy-flat/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-devonport/ | service-area | Heritage Villa Renovations & Extensions Devonport \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-glen-eden/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-glenfield/ | service-area | Structural Extensions & Home Renovation Glenfield \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-greenhithe/ | service-area | Lifestyle Extensions & Home Renovation Greenhithe \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-helensville/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-henderson/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-kumeu/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-mairangi-bay/ | service-area | Coastal Extensions & Home Renovation Mairangi Bay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-milford/ | service-area | Coastal Extensions & Home Renovation Milford \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-northcote/ | service-area | Custom Extensions & Home Renovation Albany \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-orewa/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-paremoremo/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-red-beach/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-snells-beach/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-te-atatu/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-warkworth/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-waterview/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/home-renovation-builder-in-westmere/ | service-area | Home Renovation Builder Bombay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/kingsland-nz/ | service-area | Home Renovation Builder in Kingsland \| JRA Construction |
| https://jraconstruction.co.nz/service-area/mission-bay/ | service-area | Home Building and Renovation Mission Bay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/mount-albert-nz/ | service-area | Home Renovation Builder in Mount Albert \| JRA Construction |
| https://jraconstruction.co.nz/service-area/mount-eden/ | service-area | Home Renovation Builder Mount Eden \| JRA Construction |
| https://jraconstruction.co.nz/service-area/point-chevalier-nz/ | service-area | Home Renovation Builder in Point Chevalier \| JRA Construction |
| https://jraconstruction.co.nz/service-area/ponsonby-nz/ | service-area | Home Renovation Builder in Ponsonby, NZ \| JRA Construction |
| https://jraconstruction.co.nz/service-area/remuera/ | service-area | Home Building and Renovation Remuera \| JRA Construction |
| https://jraconstruction.co.nz/service-area/rothesay-bay/ | service-area | Home Renovation Builder Rothesay Bay \| JRA Construction |
| https://jraconstruction.co.nz/service-area/sandringham-nz/ | service-area | Home Renovation Builder in Sandringham, NZ \| JRA Construction |
| https://jraconstruction.co.nz/service-area/st-heliers-nz/ | service-area | Home Renovation Builder in St Heliers \| JRA Construction |
| https://jraconstruction.co.nz/service-area/takapuna/ | service-area | Home Building and Renovation Takapuna \| JRA Construction |
| https://jraconstruction.co.nz/service-area/tamaki/ | service-area | Auckland Home Builders Service Area Coverage \| Instant Online Estimate |
| https://jraconstruction.co.nz/service-area/titirangi/ | service-area | Home Renovation Builder Titirangi \| JRA Construction |
| https://jraconstruction.co.nz/service-area/wiri/ | service-area | Auckland Home Builders Service Area Coverage \| Instant Online Estimate |
| https://jraconstruction.co.nz/service-areas/ | page | Auckland Home Builders Service Area Coverage \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/ | page | Auckland Home Builder Services \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/bathroom-renovations/ | page | Bathroom Renovations Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/construction-management/ | page | Construction Management Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/custom-homes/ | page | Custom Homes Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/granny-flats/ | page | Granny Flats in Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/home-extensions/ | page | Home Extensions Auckland \| Instant Online Estimate \| Expand & Enhance Your Home With Confidence |
| https://jraconstruction.co.nz/services/home-maintenance/ | page | Home Maintenance in Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/home-renovations/ | page | Home Renovations Auckland \| Instant Online Estimate \| Quality & On-Time |
| https://jraconstruction.co.nz/services/kitchen-renovations/ | page | Kitchen Renovations in Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/minor-dwellings/ | page | Minor Dwellings in Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/services/quantity-surveying/ | page | Quantity Surveying Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/sitemap/ | page | Sitemap - JRA Construction |
| https://jraconstruction.co.nz/smart-home-features-custom-build/ | post | Smart Home Features for New Builds Guide \| JRA Construction |
| https://jraconstruction.co.nz/sustainable-custom-home-building/ | post | Sustainable Custom Home Building Guide \| JRA Construction |
| https://jraconstruction.co.nz/testimonials/ | page | Satisfied Clients - Home Builder Auckland \| Instant Online Estimate |
| https://jraconstruction.co.nz/the-ultimate-construction-project-management-guide/ | post | Construction Project Management Guide \| JRA Construction |
| https://jraconstruction.co.nz/why-choose-us/ | page | Auckland's Trusted Home Renovation Builder \| Instant Online Estimate |

## Global chrome (identical on every page)

### Header / navigation

- Home Builder and Quantity Surveying Auckland
- Book A Free Consultation
- Call Us: 021 276 9971
- Home
- About
- Why Choose Us
- How it works
- Guarantee
- Services
- Custom Homes
- Home Renovations
- Home Extensions
- Kitchen Renovations
- Bathroom Renovations
- Construction Management
- Quantity Surveying
- Home Maintenance
- Granny Flats
- Minor Dwellings
- Projects
- Testimonials
- Blog
- Free Consultation
- (021) 276 9971
- Monday - Friday
- 7:30am - 5:30pm

### Footer

- (H3) Call us on:
- (P) (021) 276 9971
- (P) Auckland, New Zealand
- (P) 7:30am - 5:30pm
- (P) Monday - Friday
- (P) Our quantity surveying services ensure your budget is well looked after. Contact us today!
- (P) Useful Links
- (LI) Home
- (LI) About Us
- (LI) Testimonials
- (LI) Contact Us
- (LI) Service Areas
- (LI) FAQs
- (LI) Blog
- (P) Our Services
- (LI) Custom Homes
- (LI) Home Renovations
- (LI) Home Extensions
- (LI) Kitchen Renovations
- (LI) Bathroom Renovations
- (LI) Quantity Surveying
- (LI) Home Maintenance
- (LI) Construction Management
- (LI) Minor Dwellings
- (LI) Granny Flats
- (P) Let's Connect
- (P) © Copyright 2025 | JRA Construction | All Rights Reserved | Privacy & Accessibility
- (P) Website & Advertising by ContractorScale.com

### Global images (logo, badges present site-wide)

| Image URL | Alt text |
|---|---|
| https://jraconstruction.co.nz/wp-content/uploads/2022/12/JRA_Logo_white.png | JRA Construction - L |
| https://jraconstruction.co.nz/wp-content/uploads/2023/02/JRA_Logo_blue.png | JRA Construction LTD |
