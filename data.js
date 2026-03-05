window.PORTFOLIO_DATA = {
  hero: {
    kicker: "Statistics & Data Science",
    nameLines: ["Maximilian", "Frei"],
    tagline: "LMU Statistics and Data Science · Working Student Global Analytics & BI at BIRKENSTOCK",
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
      period: "Oct 2023 — Today",
      institution: "LMU Munich",
      degree: "B.Sc. in Statistics & Data Science (Minor: Computer Science)",
      tags: [
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
    {
      period: "Sep 2019 — Jul 2022",
      institution: "Staatliche Fachoberschule Weilheim",
      degree: "German Abitur",
      tags: ["Student Representative", "Initiatives & events"],
    },
  ],
  experience: [
    {
      period: "Apr 2025 — Today",
      company: "BIRKENSTOCK",
      role: "Working Student · Global Analytics & BI",
      tags: ["Forecasting", "Prophet", "XGBoost", "Python", "Data Warehouse"],
      bullets: [
        "Building a progressive ensemble for order forecasting using Prophet, XGBoost, and other statistical models.",
        "Performed correlation analysis on weather variables and integrated Weather API data to improve forecast accuracy.",
        "Optimizing data warehouse pipelines and creating tailored data sources for regional analysts.",
      ],
    },
    {
      period: "Mar 2023 — Mar 2025",
      company: "BIRKENSTOCK",
      role: "Working Student · DtC Operations Europe",
      tags: ["Python", "Tableau", "Operations", "Analytics"],
      bullets: [
        "Automated invoice checks for inbound shipments using Python, saving around 5 hours of manual work per week.",
        "Processed customer service data and built Tableau dashboards to monitor claims and detect product faults.",
        "Conducted market analysis of carrier structures and return behavior to support strategic decisions.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      category: "Computer Vision",
      title: "YOLO Wardrobe Item Detection",
      teaser:
        "Fine-tuning YOLO models to detect wardrobe items and deploy the system on a Raspberry Pi.",
      repoUrl: "https://github.com/maxifrei6/wardrobe_detection_yolo",
      abstract:
        "A personal learning project to explore modern object detection. YOLO models are fine-tuned to recognize different wardrobe items in real-world images.",
      methodology:
        "Trained and evaluated YOLO models using PyTorch and OpenCV, iteratively refining data augmentation and annotation strategies. Target deployment platform is a Raspberry Pi.",
      results:
        "Achieved reliable detection performance on a small, custom dataset, validating the feasibility of running an embedded wardrobe assistant on low-power hardware.",
    },
    {
      id: "2",
      category: "Data Analysis",
      title: "World Bank Data Analysis",
      teaser:
        "Exploring education-related research questions with World Bank data using R and linear models.",
      repoUrl: "https://github.com/maxifrei6/worldbank_analysis",
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

