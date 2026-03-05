window.PORTFOLIO_DATA = {
  hero: {
    nameLines: ["Maximilian", "Frei"],
    tagline: "Statistics student at LMU Munich, currently on a semester abroad at the University of Barcelona. Below you’ll find my projects and research, as well as my work at Birkenstock.",
    profileImage: "assets/profile-image.jpg",
    languages: [
      { flag: "🇩🇪", label: "German", level: "Native" },
      { flag: "🇬🇧", label: "English", level: "Native-level" },
      { flag: "🇪🇸", label: "Spanish", level: "B2" },
      { flag: "🇫🇷", label: "French", level: "B1" },
    ],
  },
  links: {
    github: "https://github.com/maxifrei6",
    linkedin: "https://www.linkedin.com/in/maximilian-frei-30915424b/",
    email: "maxifrei@protonmail.com",
    cvPdf: "assets/pdf/cv.pdf",
  },
  education: [
    {
      period: "Feb 2026 — Jun 2026",
      institution: "Universitat de Barcelona",
      degree: "Semester abroad — Spanish coursework",
      tags: [
        "Multivariate Statistics",
        "Econometrics",
        "Forecasting Methods",
        "Spanish B2",
      ],
    },
    {
      period: "Oct 2023 — Mar 2027",
      institution: "LMU Munich",
      degree: "B.Sc. in Statistics & Data Science (Minor: Computer Science)",
      tags: [
        "Calculus I & II",
        "Linear Algebra",
        "Probability Theory",
        "Statistical Inference",
        "Machine Learning",
        "Linear Modeling",
      ],
    },
    {
      period: "Oct 2022 — Sep 2023",
      institution: "Technical University of Munich",
      degree: "B.Sc. in Management & Technology — switched to Statistics",
      tags: [
        "Management",
        "Finance",
        "Economics",
      ],
    },
  ],
  experience: [
    {
      period: "Apr 2025 — Feb 2026",
      company: "Birkenstock",
      role: "Working Student · Global Analytics & BI",
      tags: ["Prophet", "XGBoost", "Python", "SQL", "Data Warehouse", "Geospatial"],
      bullets: [
        "Created a lineage tracker from warehouse ingestion to downstream analytics (e.g. Tableau) to monitor dependencies and data access; supported Snowflake migration planning.",
        "Built a progressive ensemble for order forecasting using Prophet, XGBoost, and other statistical models, and continuously improved predictive performance.",
        "Performed correlation analysis on weather variables to select relevant features and integrated Weather API data to improve order forecast accuracy.",
        "Built geospatial order mapping, enabling spatial analysis and revealing regional demand patterns to improve forecasting.",
        "Optimized data warehouse pipelines and created tailored data sources for regional analysts.",
      ],
    },
    {
      period: "Mar 2023 — Mar 2025",
      company: "Birkenstock",
      role: "Working Student · Digital Operations Europe",
      tags: ["Python", "Tableau", "Contentsquare", "Analytics", "EPR", "Logistics"],
      bullets: [
        "Automated invoice checks for inbound shipments using Python, saving 5 hours of manual work weekly.",
        "Processed customer service data with Python and developed Tableau dashboards to monitor claims and detect product faults, driving quicker resolutions.",
        "Conducted analysis of carrier structures, return behavior, and EPR/packaging compliance across markets; led packaging audits in Germany and France.",
        "Revamped webshop return communication via extensive Contentsquare analysis, streamlining the process and FAQs with developers.",
      ],
    },
  ],
  projects: [
    {
      id: "2",
      category: "Network Analysis",
      title: "Microbial Network Communities",
      image: "assets/projects/network.png",
      teaser:
        "Comparing Atlantic and Pacific marine microbial co-occurrence networks with community detection and consensus clustering.",
      github: "https://github.com/maxifrei6/microbial-network-communities",
      pdf: "assets/pdf/microbial-network-communities.pdf",
      abstract:
        "This project asks whether microbial co-occurrence networks in the Atlantic and Pacific differ in how they are organized into communities. Using ocean microbiome data (upper 200 m), it compares modular structure across basins and interprets detected communities with taxonomy and environmental variables (temperature, salinity, depth) to attach ecological meaning.",
      methodology:
        "Association networks were built from the same set of taxa in both basins so comparisons are fair. Several community-detection algorithms were run and their partitions compared; consensus clustering was used to obtain a single, stable partition per basin for interpretation.",
      results:
        "Both networks are similarly sparse (about 25,000 edges each). The Atlantic consistently attains higher modularity than the Pacific across all methods; the consensus partition yields 11 communities in the Atlantic and 10 in the Pacific. Pacific modules are larger on average and more even in size, giving a clear ecological contrast between the two basins.",
    },
    {
      id: "1",
      category: "Biostatistics",
      title: "Stroke Circadian Metabolomics",
      image: "assets/projects/stroke.png",
      teaser:
        "Circadian patterns in metabolomic data from stroke patients using pathway scores, multiple imputation, and Lasso regression.",
      github: "https://github.com/maxifrei6/stroke-circadian",
      pdf: "assets/pdf/stroke-circadian.pdf",
      abstract:
        "This project examines whether blood metabolite profiles of stroke patients differ by time of stroke (day vs night). Using clinical and metabolomic data from 210 patients (LMU Hospital Großhadern), it aims to find metabolites and pathways that associate with time of day of stroke onset.",
      methodology:
        "Metabolites were mapped to biological pathways and lipid classes; missing values were handled with multiple imputation and pathway-level scores were derived. Day vs night (07:00–23:00 vs 23:00–07:00) was tested with appropriate statistical tests and FDR correction; a sensitivity analysis checked whether findings held under different classification choices. Lasso regression was used to select pathways and lipid groups most associated with time of stroke.",
      results:
        "No strong, stable association emerged at the level of individual metabolites. At the aggregated level, certain lipid classes and pathways were significantly associated with time of stroke. The lipid class Glycerophosphoethanolamines (GP02) remained significant after multiple-testing correction and was robust in sensitivity analyses. Lasso highlighted further pathways and lipid groups with positive or negative association to day vs night, giving a clear picture of which biological processes vary with time of stroke.",
    },
    {
      id: "3",
      category: "Computer Vision",
      title: "YOLO Wardrobe Item Detection",
      image: "assets/projects/yolo.png",
      teaser:
        "Fine-tuning YOLO models for wardrobe item detection to deploy on Raspberry Pi.",
      github: "https://github.com/maxifrei6/wardrobe_detection_yolo",
      abstract:
        "This project builds a custom object-detection model to identify wardrobe items (shirts, t-shirts, pants, shoes) from images, with the goal of a model that can run on edge devices.",
      methodology:
        "A manually collected image set was labeled with bounding boxes and split into train and validation sets with balanced classes. A lightweight detection model was fine-tuned on this data with early stopping to avoid overfitting.",
      results:
        "The model reached near-perfect precision and recall across all nine item classes (precision 0.98, recall 0.97, mAP 0.98). Slight weakness remained on dark t-shirts and light blue shirts. Inference runs in under 30 ms per image, so the model is suitable for real-time use on constrained hardware.",
    },
    {
      id: "4",
      category: "Data Analysis",
      title: "World Bank Data Analysis",
      image: "assets/projects/worldbank.png",
      teaser:
        "Exploring education-related research questions with World Bank data using R and linear models.",
      github: "https://github.com/maxifrei6/worldbank_analysis",
      abstract:
        "This project uses World Bank development data (25 countries, 2000–2021) to explore relationships between socioeconomic and environmental indicators. It tackles four topic areas: education and government debt, agriculture and emissions, HIV and education/alcohol, and tobacco use.",
      methodology:
        "Data were cleaned, merged, and grouped by income, population density, and other dimensions for subgroup analysis. Each topic used robust regression and correlation methods plus visualizations to test the relationships of interest.",
      results:
        "Education: central government debt and labor force with basic education are positively correlated overall, with opposite patterns in medium- vs high-income countries and stronger effects when segmenting by population size; pupil–teacher ratio links to education outcomes more clearly in high-density countries. Results are summarized in figures and a presentation across all four topics.",
    },
  ],
  papers: [],
  skills: {
    languages: "hero",
    technologies: [
      "R",
      "Python",
      "SQL",
      "LaTeX",
      "Tableau (incl. Prep Builder)",
      "Power BI",
      "Contentsquare",
      "Jira & Confluence",
      "GCP",
      "AWS",
    ],
  },
};
