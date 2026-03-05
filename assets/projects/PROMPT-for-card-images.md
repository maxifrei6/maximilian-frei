# ChatGPT prompt: generate portfolio card images

Use the prompt below with ChatGPT (or another image model) to generate thumbnail images for your project cards. Save each image in `assets/projects/` with the filenames listed so the website can find them.

---

## Instructions for the AI

**Copy this block and paste it into ChatGPT (or similar). Ask for 4 separate image descriptions or prompts, or one prompt per image.**

---

I need 4 thumbnail images for a professional academic/portfolio website. Each image will sit at the top of a project card (about 2:1 aspect ratio, e.g. 800×400 px). Style: clean, modern, slightly abstract or conceptual—suitable for a statistics/data science portfolio. Avoid text or logos in the image. Prefer a consistent visual language across all four (e.g. same color mood, similar level of abstraction).

Generate an image prompt for each of these projects so I can create the thumbnails:

1. **Stroke Circadian Metabolomics** — Research on circadian patterns in metabolomic data from stroke patients; pathway analysis, Lasso regression, day vs. night time-of-stroke. Suggest: abstract visualization of rhythms, metabolites, or day/night contrast (e.g. soft gradients, subtle wave or cycle motifs, medical/research feel without being literal).

2. **Microbial Network Communities** — Comparing Atlantic and Pacific marine microbial co-occurrence networks; community detection, network graphs, taxonomy. Suggest: abstract network or graph (nodes and edges), ocean/marine hint (blues, depth), or modular structure. No literal organisms.

3. **YOLO Wardrobe Item Detection** — Computer vision project: fine-tuning YOLO for wardrobe item detection, deployment on Raspberry Pi. Suggest: abstract representation of detection (e.g. bounding boxes, grid, or “vision” motif), or minimal tech/ML aesthetic. No clothing photos needed.

4. **World Bank Data Analysis** — Education-related research with World Bank data; linear models, correlations, visualizations. Suggest: abstract data viz (e.g. gentle charts, map-like shapes, or flowing data), global/education vibe, clean and professional.

For each, give me a single, detailed image-generation prompt (for DALL·E, Midjourney, or similar) that I can use to create one 2:1 landscape thumbnail. Keep the style consistent across the four prompts (e.g. “minimalist”, “soft gradients”, “professional portfolio thumbnail”).

---

## Filenames to use

After you generate or create the images, save them in the `assets/projects/` folder as:

| Project                      | Filename                     |
|-----------------------------|------------------------------|
| Stroke Circadian Metabolomics | `stroke-circadian.jpg`     |
| Microbial Network Communities | `microbial-network.jpg`   |
| YOLO Wardrobe Item Detection  | `yolo-wardrobe.jpg`       |
| World Bank Data Analysis      | `worldbank.jpg`            |

You can remove the `image` field from a project in `data.js` if you don’t want a thumbnail for that card; the layout will show the card without an image.
