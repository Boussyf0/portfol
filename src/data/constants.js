/**
 * Application constants for Abderrahim Boussyf's portfolio
 */

// Navigation items
export const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// Skills organized by category
export const SKILL_CATEGORIES = [
  {
    category: "Generative AI, LLMs & Evaluation",
    skills: ["Hybrid RAG (Qdrant, ChromaDB, BM25, RRF)", "Ollama (Qwen2.5, Llama 3.1, Mixtral)", "LLM-as-a-Judge (Jev, Opik)", "RLHF", "AI Guardrails & Safety Gates", "LangGraph", "Agentic Workflows", "Model Context Protocol (MCP)"]
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "BiLSTM / LSTM", "YOLOv8", "Predictive Maintenance (RUL)", "Time-Series & Anomaly Detection", "Probability Calibration"]
  },
  {
    category: "MLOps & Cloud Infrastructure",
    skills: ["MLflow (Model Registry)", "Evidently AI (Drift Monitoring)", "Apache Airflow", "Feast", "Docker", "Kubernetes (Helm, Skaffold)", "CI/CD (GitHub Actions)", "OCI", "Fly.io", "Prometheus", "Grafana"]
  },
  {
    category: "Data & Software Engineering",
    skills: ["Python", "SQL", "FastAPI (Async REST/SSE)", "Apache Kafka", "TimescaleDB", "InfluxDB", "PostgreSQL (pgcrypto)", "Redis", "Real-Time IoT (BLE/GATT, MQTT)", "Next.js", "React", "Flutter"]
  },
  {
    category: "Responsible AI & Governance",
    skills: ["EU AI Act (High-Risk Systems)", "GDPR", "Moroccan Law 09-08 (CNDP)", "Data Residency & Privacy by Design", "Agile / Scrum", "BPMN 2.0"]
  }
];

// Flattened skills list for components that need a simple array
export const SKILLS = SKILL_CATEGORIES.reduce((acc, category) => {
  return [...acc, ...category.skills];
}, []);

// Projects
export const PROJECTS = [
  {
    id: 'medisense-ai',
    title: 'MediSense AI',
    tagline: 'On-Premise Cognitive Clinical Decision Support & Hybrid Triage Engine',
    desc: 'Clinical environments require real-time triage, anomaly detection across continuous patient telemetry, and rapid access to medical protocols—all under strict data-privacy constraints that prohibit sending sensitive patient records to external cloud LLM APIs.',
    caseStudy: {
      problem: 'Clinical environments require real-time triage, anomaly detection across continuous patient telemetry, and rapid access to medical protocols—all under strict data-privacy constraints that prohibit sending sensitive patient records to external cloud LLM APIs.',
      architecture: [
        {
          label: 'Multi-Modal Inference Pipeline',
          text: 'Engineered an on-premise cognitive platform pairing a PyTorch BiLSTM network for temporal vital-sign anomaly detection (0.997 AUC-ROC, 99.2% F1) with an XGBoost classifier for patient no-show risk stratification (0.94 ROC-AUC).'
        },
        {
          label: 'Grounded Hybrid RAG',
          text: 'Built a hybrid dense-sparse retrieval pipeline (Qdrant + BM25 + RRF fusion on Qwen2.5 via Ollama) to cross-reference patient context against clinical guidelines in French, Arabic, and Darija. Enforced deterministic output schemas and source-citation grounding to eliminate generative hallucinations in high-stakes clinical workflows.'
        },
        {
          label: 'Clinical Decision Interface & MLOps',
          text: 'Designed a low-latency, 3-column clinical workspace surfacing real-time Kafka/BLE risk alerts, retrieved medical evidence, and actionable triage recommendations—backed by Airflow, MLflow, Evidently AI, and 508 automated tests (80% coverage) compliant with GDPR, CNDP 09-08, and the EU AI Act.'
        }
      ],
      impact: 'Production-validated with 508 automated tests (80% coverage), 0.997 AUC-ROC on vital-sign anomaly detection, and zero-external-API data residency.'
    },
    technologies: ['Python', 'FastAPI', 'PyTorch (BiLSTM)', 'XGBoost', 'Qdrant', 'Multi-Agent Orchestration', 'Docker', 'Apache Kafka', 'MLflow', 'Airflow'],
    link: 'https://github.com/Boussyf0',
    demo: 'https://drive.google.com/file/d/1wGHb7PFnbUVe9YuvhA4ifCQP-4VmcHE5/view?usp=sharing',
    featured: true
  },
  {
    id: 'mantis',
    title: 'MANTIS',
    tagline: 'Real-Time Event-Driven Predictive Maintenance for Industrial Manufacturing',
    desc: 'Unplanned equipment downtime in heavy manufacturing (such as concrete production) causes severe operational bottlenecks, while traditional threshold-based alarms trigger high rates of false positives and miss subtle pre-failure degradation patterns.',
    caseStudy: {
      problem: 'Unplanned equipment downtime in heavy manufacturing (such as concrete production) causes severe operational bottlenecks, while traditional threshold-based alarms trigger high rates of false positives and miss subtle pre-failure degradation patterns.',
      architecture: [
        {
          label: 'High-Throughput Streaming Ingestion',
          text: 'Architected an asynchronous, event-driven backbone using Apache Kafka to ingest, buffer, and decouple high-frequency industrial sensor telemetry from downstream inference workers.'
        },
        {
          label: 'Dual-Layer Anomaly Detection',
          text: 'Combined deep sequence modeling (PyTorch LSTM, RMSE 12.5 on NASA C-MAPSS) for temporal drift and RUL forecasting with statistical outlier detection (PyOD) to catch both gradual mechanical wear and sudden sensor spikes.'
        },
        {
          label: 'Time-Series Persistence & Live Telemetry',
          text: 'Stored high-resolution sensor streams in TimescaleDB for fast historical window queries and exposed real-time health indices on a React / Next.js operator dashboard.'
        }
      ],
      impact: 'Field-tested in an active Moroccan concrete pole manufacturing facility (batching plants & overhead cranes), validating end-to-end stream processing, real-time alert generation, and actionable maintenance scheduling targeting a 30–50% reduction in unplanned downtime.'
    },
    technologies: ['Apache Kafka', 'PyTorch (LSTM)', 'PyOD', 'TimescaleDB', 'FastAPI', 'React / Next.js', 'Docker', 'MLflow', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Boussyf0/MANTIS',
    video: 'https://youtu.be/W1oyX2C1gkU',
    featured: true
  },
  {
    id: 'chawerni',
    title: 'Chawerni',
    tagline: 'Trilingual Moroccan LegalTech Hybrid RAG & Automated LLM-as-a-Judge Evaluation',
    desc: 'Legal consultation across Moroccan statutory codes requires high-precision retrieval across French, Arabic, and Darija, where ungrounded LLM responses or misquoted articles create unacceptable legal liability.',
    caseStudy: {
      problem: 'Legal consultation across Moroccan statutory codes requires high-precision retrieval across French, Arabic, and Darija, where ungrounded LLM responses or misquoted articles create unacceptable legal liability.',
      architecture: [
        {
          label: 'Multi-Code Legal Knowledge Graph & Hybrid RAG',
          text: 'Indexed and structured 13 Moroccan legal codes into a trilingual retrieval pipeline (French, Arabic, Darija) enforcing strict article-level citation grounding.'
        },
        {
          label: 'Automated Non-Regression Evaluation (Jev / Opik)',
          text: 'Engineered an automated LLM-as-a-Judge evaluation harness using Jev and Opik across a 50-question legal benchmark to score grounding, relevance, completeness, and legal prudence via structured outputs.'
        }
      ],
      impact: 'Eliminated unverified legal citations and established a reproducible CI evaluation gate before prompt or model updates.'
    },
    technologies: ['Python', 'Hybrid RAG', 'Jev', 'Opik', 'LLM-as-a-Judge', 'FastAPI', 'Qdrant', 'LLMs'],
    link: 'https://github.com/Boussyf0',
    demo: 'https://drive.google.com/file/d/1G5N00X_OGr3346PGpaheuPfQ6o995Aov/view?usp=sharing',
    featured: true
  },
  {
    id: 'ml-pipeline-pro',
    title: 'ML-Pipeline-Pro',
    tagline: 'End-to-End Enterprise Churn MLOps & Feature Store Platform',
    desc: 'Production-grade MLOps pipeline (0.87 AUC-ROC) with automated feature engineering and serving (Feast, Redis), DAG orchestration (Airflow), experiment tracking and model registry (MLflow), data/concept drift monitoring (Evidently AI), FastAPI serving, and Prometheus/Grafana observability with GitHub Actions CI/CD.',
    technologies: ['Python', 'Airflow', 'MLflow', 'Feast', 'Evidently AI', 'FastAPI', 'Redis', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Boussyf0/ML-Pipeline-Pro',
    video: 'https://www.youtube.com/watch?v=weX9Pq9YGBQ',
    featured: true
  },
  {
    id: 'aerointellicad',
    title: 'AeroIntelliCAD',
    tagline: 'AI-Powered Aerospace CAD Generation & Automated CFD Simulation Platform',
    desc: 'Microservices aerospace CAD/CFD platform integrating Llama 3.1 and YOLOv8 for 3D model generation and visual inspection, automated regulatory validation (35+ FAA/EASA constraints), and OpenFOAM CFD simulation served via FastAPI and Next.js.',
    technologies: ['Next.js', 'FastAPI', 'Llama 3.1', 'YOLOv8', 'OpenFOAM', 'Three.js', 'RAG', 'Python', 'Docker'],
    link: 'https://github.com/Boussyf0/AeroIntelliCAD',
    video: 'https://www.youtube.com/watch?v=UGsLej-iOrY',
    featured: true
  },
  {
    id: 'rag-agent',
    title: 'BrainGen Conversational RAG',
    tagline: 'Enterprise Conversational RAG & Automated ML Lead Qualification Engine',
    desc: 'Production RAG conversational platform (ChromaDB, FastAPI, Groq Llama-3.1) achieving 90.4% semantic accuracy and paired with an ML lead-scoring pipeline—delivering a +50% uplift in lead qualification, +40% lead conversion, and 60% Customer Acquisition Cost (CAC) reduction.',
    technologies: ['Python', 'FastAPI', 'ChromaDB', 'Llama 3.1', 'RAG', 'Scikit-learn'],
    link: 'https://github.com/Boussyf0',
    featured: true
  },
  {
    id: 'salesforce-agent',
    title: 'BrainGen AI + Salesforce Agentforce',
    desc: '🏆 North Africa Dreamin\' 2025 Hackathon Accepted Idea. AI-powered lead qualification platform combining RAG chat, BANT+ qualification, and Salesforce Agentforce—cutting qualification time by 80% with <2s response latency.',
    demo: 'https://drive.google.com/file/d/1t9CgJO_uM8VvWJ-O_EykO48C5H3_--w_/view?usp=sharing',
    acceptanceLetter: '/assets/hackathon_acceptance.pdf',
    technologies: ['Salesforce', 'Agentforce', 'RAG', 'Llama 3', 'Python'],
    link: 'https://github.com/Boussyf0',
    featured: true
  },
  {
    id: 'virt-iot',
    title: 'Cloud-Native IoT Platform on Kubernetes',
    desc: 'Scalable IoT streaming platform on Kubernetes with MQTT broker, InfluxDB time-series storage, Grafana visualization, and Prometheus monitoring with TLS security and high availability.',
    technologies: ['Kubernetes', 'Docker', 'MQTT', 'InfluxDB', 'Grafana', 'Prometheus', 'Python'],
    link: 'https://github.com/Boussyf0/Cloud-Native-IoT-Platform-on-Kubernetes',
    video: 'https://www.youtube.com/watch?v=tXKfjhWzEew&t=3s',
    featured: true
  },
  {
    id: 'ai-agent-mcp',
    title: 'Modular AI Agent with Model Context Protocol (MCP)',
    desc: 'Autonomous AI agent built on AWSLabs Model Context Protocol (MCP) servers for tool-augmented workflow execution and dynamic interface generation.',
    technologies: ['Python', 'MCP', 'AWS', 'LLMs', 'React'],
    link: 'https://github.com/Boussyf0/AI-MCP-Agent',
    featured: false
  },
  {
    id: 'ai-interview-simulator',
    title: 'AI Interview Simulator',
    desc: 'Local LLM-driven technical interview platform that generates role-specific questions, evaluates candidate responses, and provides structured feedback.',
    technologies: ['Python', 'LLMs', 'NLP', 'React'],
    link: 'https://github.com/Boussyf0/ai-interview-simulator',
    featured: false
  },
  {
    id: 'energy-consumption-forecasting',
    title: 'Electrical Grid & Energy Consumption Forecasting',
    desc: 'Time-series forecasting and grid-loss EDA platform (LSTM, ARIMA, Pandas) cutting reporting time by 30% and pinpointing root factors driving 40%+ of technical distribution losses.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Streamlit', 'Pandas'],
    link: 'https://github.com/Boussyf0/energy-analysis',
    featured: false
  },
  {
    id: 'health-trackr',
    title: 'Health_Trackr — Clinical Symptom Analytics',
    desc: 'Patient symptom analytics and hospitalization decision-support system built with Python and Streamlit.',
    technologies: ['Python', 'Machine Learning', 'Healthcare Analytics', 'Data Analysis', 'Streamlit'],
    link: 'https://github.com/Boussyf0/health-trackr',
    featured: false
  },
  {
    id: 'job-matching',
    title: 'Job Matching Agent',
    desc: 'LLM-based semantic matching agent that parses resumes and ranks job postings.',
    technologies: ['Python', 'LLMs', 'Selenium'],
    link: 'https://github.com/Boussyf0/AI-Recruiter-LLM'
  },
  {
    id: 'chess-game',
    title: 'Chess Engine in C#',
    desc: 'Complete chess engine and desktop UI in C#/.NET with minimax AI logic.',
    technologies: ['C#', '.NET', 'WPF'],
    link: 'https://github.com/Boussyf0/Chess_Game'
  }
];

// Certifications
export const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
    credentialId: "Professional",
    link: "/certifications/Oracle_Certificate.pdf",
    skills: ["Generative AI", "OCI", "LLMs", "Prompt Engineering"],
    logo: "/assets/cert_logos/oracle.svg"
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    date: "2024",
    credentialId: "Professional Certificate",
    link: "/certifications/Google_Advanced_Data_Analytics.pdf",
    skills: ["Data Analysis", "Python", "Machine Learning", "Statistics"],
    logo: "/assets/cert_logos/google.svg"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    credentialId: "CLF-C02",
    link: "/certifications/AWS_Cloud_Practitioner.pdf",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
    logo: "/assets/cert_logos/aws.svg"
  },
  {
    title: "Mastering RAG Systems",
    issuer: "AI Enhancement",
    date: "2024",
    credentialId: "Specialization",
    link: "/certifications/RAG_Systems.pdf",
    skills: ["RAG", "Knowledge Graphs", "LLMs", "Vector Databases"],
    logo: null // Using fallback icon
  },
  {
    title: "Large Language Models (LLMs)",
    issuer: "H2O.ai",
    date: "2024",
    credentialId: "Course",
    link: "/certifications/H2O_LLMs.pdf",
    skills: ["LLMs", "Fine-tuning", "Prompt Engineering"],
    logo: "/assets/cert_logos/h2o.svg"
  },
  {
    title: "Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    date: "2023",
    credentialId: "Coursera",
    link: "/certifications/Containers_Docker_K8s.pdf",
    skills: ["Docker", "Kubernetes", "OpenShift", "DevOps"],
    logo: "/assets/cert_logos/ibm.svg"
  },
  {
    title: "Software Design and Project Management",
    issuer: "University of Alberta",
    date: "2023",
    credentialId: "Coursera",
    link: "/certifications/Software_Engineering.pdf",
    skills: ["Software Architecture", "Design Patterns", "Agile", "Project Management"],
    logo: "/assets/cert_logos/ualberta.png"
  }
];

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/boussyf0',
  linkedin: 'https://www.linkedin.com/in/abderrahim-boussyf-167539175/',
  email: 'boussyf0@gmail.com'
}; 