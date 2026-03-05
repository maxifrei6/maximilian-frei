window.PORTFOLIO_DATA = {
  hero: {
    kicker: "Statistics & Data Science",
    nameLines: ["Maximilian", "Frei"],
    tagline: "I'm a Statistics & Data Science student and working in Global Analytics & BI at BIRKENSTOCK.",
    profileImage: "assets/profile-image.jpg",
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
        "Seminar: microbial oceanic network communities",
        "Circadian modeling: metabolite profiles (stroke patients)",
        "World Bank Data Analysis in R",
        "Calculus I & II",
        "Linear Algebra",
        "Probability Theory",
        "Statistical Inference",
        "R & Python",
        "Machine Learning",
        "Linear Modeling",
      ],
    },
    {
      period: "Oct 2022 — Sep 2023",
      institution: "Technical University of Munich",
      degree: "B.Sc. in Management & Technology",
      tags: [
        "Management",
        "Finance",
        "Economics",
        "Discovered passion for statistics & data",
      ],
    },
  ],
  experience: [
    {
      period: "Apr 2025 — Feb 2026",
      company: "BIRKENSTOCK",
      role: "Working Student · Global Analytics & BI",
      tags: ["Forecasting", "Prophet", "XGBoost", "Python", "Data Warehouse", "Geospatial"],
      bullets: [
        "Building a progressive ensemble for order forecasting using Prophet, XGBoost, and other statistical models, continuously improving predictive performance.",
        "Performed correlation analysis on weather variables to select relevant features and integrated Weather API data to improve order forecast accuracy.",
        "Optimizing data warehouse pipelines and creating tailored data sources for regional analysts.",
        "Built geospatial order mapping, enabling spatial analysis and revealing regional demand patterns to improve forecasting.",
      ],
    },
    {
      period: "Mar 2023 — Mar 2025",
      company: "BIRKENSTOCK",
      role: "Working Student · Digital Operations Europe",
      tags: ["Python", "Tableau", "Operations", "Analytics", "Contentsquare", "EPR"],
      bullets: [
        "Automated invoice checks for inbound shipments using Python, saving 5 hours of manual work weekly.",
        "Processed customer service data with Python and developed Tableau dashboards to monitor claims and detect product faults, driving quicker resolutions.",
        "Conducted market analysis of carrier structures and return behavior to support strategic decision-making.",
        "Researched EPR and packaging compliance across multiple countries, restructuring internal processes.",
        "Led packaging audits in Germany and France, overseeing reporting and audit procedures.",
        "Revamped webshop return communication via extensive Contentsquare analysis, streamlining the process and FAQs with developers.",
        "Weekly operational KPI reporting and 3PL performance monitoring.",
        "Provided interim oversight of Customer Service & Inbound Deliveries for 2 months with subsequent new staff onboarding.",
      ],
    },
  ],
  projects: [
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
        "Analyzed circadian patterns in metabolomic data from stroke patients (LMU Hospital Großhadern) using pathway scores, multiple imputation (missForest, bootstrap), and Lasso regression to link metabolite and pathway levels with time-of-stroke (day vs. night).",
      methodology:
        "Built an R-based pipeline from raw data merge to figures and a LaTeX thesis. Applied pathway scoring, missForest and bootstrap for missing data, and Lasso regression for inference.",
      results:
        "Identified interpretable links between metabolite/pathway levels and time-of-stroke, with full reproducibility via R Markdown, Quarto, and LaTeX.",
    },
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
        "Compared Atlantic and Pacific marine microbial co-occurrence networks using community detection (Louvain, Infomap, spectral methods) and consensus clustering.",
      methodology:
        "Interpreted modules with taxonomy and environmental variables (temperature, salinity, depth). Produced network visualizations and algorithm comparisons to support a seminar thesis in R and LaTeX.",
      results:
        "Clear comparison of community structure across oceans and methods, with visualizations and reproducible analysis on GitHub.",
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
        "A personal learning project to explore modern object detection. YOLO models are fine-tuned to recognize different wardrobe items in real-world images.",
      methodology:
        "Trained and evaluated YOLO models using PyTorch and OpenCV, iteratively refining data augmentation and annotation strategies. Target deployment platform is a Raspberry Pi.",
      results:
        "Achieved reliable detection performance on a small, custom dataset, validating the feasibility of running an embedded wardrobe assistant on low-power hardware.",
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
        "An analytical project using World Bank data to investigate education-related questions and relationships between indicators across countries and over time.",
      methodology:
        "Cleaned and transformed World Bank datasets in R, applied linear models to uncover correlations, and created visualizations to communicate the key patterns.",
      results:
        "Identified interpretable relationships between education indicators and other socio-economic variables, summarized in reproducible analysis notebooks.",
    },
  ],
  papers: [],
};
