# CV bullet points

Use this file as a pool of bullet points. Copy the lines you want into `main.tex` and wrap each in `\item ...`. In LaTeX, use `\&` for `&` and `\%` for `%` if those appear in the text.

---

## Education

### Universitat de Barcelona  (Feb 26 - Jun 26)

- Semester abroad in Barcelona with spanish coursework
- **Relevant Coursework:** Multivariate Statistics, Econometrics, Forecasting Methods, Spanish B2

### LMU Munich — BS Statistics & Data Science (Oct 23 – Mar 27)

- **Projects:**
- Seminar paper on detecting communities in microbial oceanic networks
- Circadian modeling of metabolite profiles of stroke patients
- World Bank Data Analysis in R

- **Relevant Coursework:** Calculus I & II, Linear Algebra, Probability Theory, Statistical Inference, Programming in R and Python, Machine Learning and Linear Modeling

### Technical University Munich — BS Management & Technology (Oct 22 – Sep 23)

- Took foundational courses in management, finance, and economics, developing passion for data science through statistics module and working student role

### Staatliche Fachoberschule Weilheim — German Abitur (Sep 19 – Jul 22)

- *(no bullets in current CV; add optional points here if needed)*

---

## Experience

### BIRKENSTOCK — Global Analytics & BI (Apr 25 – Feb 26)

- Created a lineage tracker mapping the full flow from data warehouse ingestion and staging to downstream usage on analytics platforms (e.g. Tableau), to monitor dependencies, data privacy, and access.
- Used lineage documentation to support migration planning to Snowflake.
- Built an automated Google PageSpeed tracker to assess performance improvements after the replatforming initiative.
- Built a progressive ensemble for order forecasting using Prophet, XGBoost, and other statistical models, and continuously improved predictive performance.
- Performed correlation analysis on weather variables to select relevant features and integrated Weather API data to improve order forecast accuracy.
- Optimized data warehouse pipelines and created tailored data sources for regional analysts.
- Built geospatial order mapping, enabling spatial analysis and revealing regional demand patterns to improve forecasting.

### BIRKENSTOCK — Digital Operations Europe (Mar 23 – Mar 25)

- Automated invoice checks for inbound shipments using Python, saving 5 hours of manual work weekly
- Processed customer service data with Python and developed Tableau dashboards to monitor claims and detect product faults, driving quicker resolutions
- Conducted market analysis of carrier structures and return behavior to support strategic decision-making
- Researched EPR and packaging compliance across multiple countries,restructuring internal processes
- Led packaging audits in Germany and France, overseeing reporting and auditprocedures
- Revamped Webshop Return Communication by performing an extensiveContentsquare analysis, streamlining the process and FAQs in collaborationwith developers
- Weekly Operational KPI Reporting and 3PL Performance Monitoring
- Provided interim oversight of Customer Service & Inbound Deliveries for 2months with subsequent New Staff Onboarding


---

## Projects

### Stroke Circadian Metabolomics — [Github](https://github.com/maxifrei6/stroke-circadian)

- Analyzed circadian patterns in metabolomic data from stroke patients (LMU Hospital Großhadern) using pathway scores, multiple imputation (missForest, bootstrap), and Lasso regression to link metabolite/pathway levels with time-of-stroke (day vs. night).
- Built an R-based pipeline from raw data merge to figures and a LaTeX thesis.

Tools used: R, R Markdown, LaTeX, Quarto, GitHub

### Microbial Network Communities — [GitHub](https://github.com/maxifrei6/microbial-network-communities)

- Compared Atlantic and Pacific marine microbial co-occurrence networks using community detection (Louvain, Infomap, spectral methods) and consensus clustering.
- Interpreted modules with taxonomy and environmental variables (temperature, salinity, depth) and produced network visualizations and algorithm comparisons to support a seminar thesis.

Tools used: R, LaTeX, GitHub

### YOLO Wardrobe Item Detection — [Github](https://github.com/maxifrei6/wardrobe_detection_yolo)

- Learning PyTorch by fine-tuning YOLO models for wardrobe item detection to deploy on Raspberry Pi
- Tools used: PyTorch, OpenCV, Raspberry Pi

### World Bank Data Analysis — [Github](https://github.com/maxifrei6/worldbank_analysis)

- Explored education-related research questions with a World Bank dataset, leveraging linear models to uncover correlations and relationships. Designed visualizations to communicate key findings
- Tools used: R, Github

---

## Initiatives

### Student Representative (Sep 21 – Aug 22)

- Implemented a later school start, managing the application, project execution, and evaluation, which reduced average waiting times in public transportation for students
- Organized yearbook, diploma awarding ceremony and clothing donation campaign for Ukraine

---

## Skills

### Languages

- German (native language), English (B2+), Spanish (Taking B2 course), French (B1)


### Technologies

- Microsoft Office, R (ggplot, dplyr, quarto), Python (NumPy, Pandas, basic Scikit & PyTorch), Basic SQL, PowerBI, Tableau (incl. Prep Builder), Contentsquare (Web Analytics), Atlassian Suite (Jira, Confluence), GCP, AWS

---

## LaTeX snippet reference

**Experience / standard bullets (itemize):**
```latex
\begin{onecolentry}
    \setlength{\leftmargini}{2em}
    \begin{itemize}
        \item <paste bullet text here>
        \item <paste bullet text here>
    \end{itemize}
\end{onecolentry}
```

**Education / Projects / Initiatives (highlights):**
```latex
\begin{onecolentry}
    \begin{highlights}
        \item <paste bullet text here>
        \item <paste bullet text here>
    \end{highlights}
\end{onecolentry}
```

When pasting from this file into LaTeX, replace `&` with `\&`.
