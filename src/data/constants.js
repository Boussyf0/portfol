/**
 * Application constants for Abderrahim Boussyf's portfolio
 */

// Navigation items
export const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// Skills organized by category
export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "Java", "PHP", "JavaScript"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["LLMs", "RAG", "Llama", "Mistral", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "XGBoost"]
  },
  {
    category: "Big Data & Cloud",
    skills: ["Apache Spark", "AWS (EC2, S3, Lambda)", "Data Analysis", "Data Visualization"]
  },
  {
    category: "Data Analysis Tools",
    skills: ["Pandas", "Numpy", "Matplotlib", "Seaborn"]
  },
  {
    category: "Vector Databases",
    skills: ["Pinecone", "FAISS", "Milvus"]
  },
  {
    category: "Web & Tools",
    skills: ["Streamlit", "React", "Docker", "GitHub Actions", "Selenium", "Web Scraping", "Jupyter Notebooks"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "DevOps"]
  }
];

// Flattened skills list for components that need a simple array
export const SKILLS = SKILL_CATEGORIES.reduce((acc, category) => {
  return [...acc, ...category.skills];
}, []);

// Projects
export const PROJECTS = [
  {
    id: 'salesforce-agent',
    title: 'BrainGen AI + Salesforce Agentforce',
    desc: '🏆 North Africa Dreamin\' 2025 Hackathon Accepted Idea. AI-Powered Lead Qualification platform combining RAG chat, BANT+ qualification, and Salesforce Agentforce. Achieved 80% reduction in qualification time, 60% increase in lead quality, and <2s response time.',
    demo: 'https://drive.google.com/file/d/1t9CgJO_uM8VvWJ-O_EykO48C5H3_--w_/view?usp=sharing',
    acceptanceLetter: '/assets/hackathon_acceptance.pdf',
    technologies: ['Salesforce', 'Agentforce', 'RAG', 'Llama 3', 'Python'],
    link: 'https://github.com/Boussyf0',
    featured: true
  },
  {
    id: 'rag-agent',
    title: 'Agent RAG et Qualification Automatique des Leads',
    desc: 'Agent RAG et Qualification Automatique des Leads chez Brain Gen Technology. Système intelligent utilisant LangChain et OpenAI pour analyser et qualifier les leads automatiquement.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'Streamlit'],
    link: 'https://github.com/Boussyf0', // Add actual link if available, or keep generic
    featured: true
  },
  {
    id: 'ai-interview-simulator',
    title: 'AI Interview Simulator',
    desc: 'Local system based on LLMs to generate customized interview questions, evaluate answers, and suggest areas for improvement.',
    technologies: ['Python', 'LLMs', 'NLP', 'React'],
    link: 'https://github.com/Boussyf0/ai-interview-simulator',
    featured: true
  },
  {
    id: 'energy-consumption-forecasting',
    title: 'Energy Consumption Forecasting',
    desc: 'Predictive model for energy consumption using time series (LSTM, ARIMA). Deployed on Streamlit with interactive visualizations.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Streamlit', 'Pandas'],
    link: 'https://github.com/Boussyf0/energy-analysis',
    featured: true
  },
  {
    id: 'health-trackr',
    title: 'Health_Trackr',
    desc: 'System designed for patient symptom analysis and hospitalization management. Collects and analyzes patient-reported symptoms to enhance decision-making for hospitalization.',
    technologies: ['Python', 'Machine Learning', 'Healthcare Analytics', 'Data Analysis', 'Streamlit'],
    link: 'https://github.com/Boussyf0/health-trackr',
    featured: true
  },
  {
    id: 'ai-agent-mcp',
    title: 'AI Agent with AWSLabs MCP',
    desc: 'Development of a modular AI agent based on AWS MCP servers for task automation and intelligent interface generation.',
    technologies: ['Python', 'AWS', 'LLMs', 'React'],
    link: 'https://github.com/Boussyf0/AI-MCP-Agent',
    featured: true
  },
  {
    id: 'job-matching',
    title: 'Job Matching Agent',
    desc: 'LLM-based agent scraping and matching resumes with job postings.',
    technologies: ['Python', 'LLMs', 'Selenium'],
    link: 'https://github.com/Boussyf0/AI-Recruiter-LLM'
  },
  {
    id: 'virt-iot',
    title: 'Cloud-Native IoT Platform',
    desc: 'Scalable IoT platform on Kubernetes with MQTT broker, InfluxDB time-series storage, Grafana visualization, and Prometheus monitoring. Features TLS security, persistent storage, and high availability.',
    technologies: ['Kubernetes', 'Docker', 'MQTT', 'InfluxDB', 'Grafana', 'Prometheus', 'Python'],
    link: 'https://github.com/Boussyf0/Cloud-Native-IoT-Platform-on-Kubernetes',
    video: 'https://www.youtube.com/watch?v=tXKfjhWzEew&t=3s',
    featured: true
  },

  {
    id: 'ml-pipeline-pro',
    title: 'ML-Pipeline-Pro: Enterprise MLOps Platform',
    desc: 'Production-grade MLOps pipeline for Customer Churn Prediction with automated training, model registry, serving, and monitoring. Features Airflow orchestration, MLflow model registry, FastAPI serving, and comprehensive monitoring with Prometheus and Grafana.',
    technologies: ['Python', 'MLflow', 'Airflow', 'FastAPI', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Boussyf0/ML-Pipeline-Pro',
    video: 'https://www.youtube.com/watch?v=weX9Pq9YGBQ',
    featured: true
  },
  {
    id: 'mantis',
    title: 'MANTIS - Industrial Predictive Maintenance Platform',
    desc: 'Enterprise microservices platform for predictive maintenance in smart factories. Features real-time IIoT data ingestion (OPC UA, MQTT, Modbus), ML-powered anomaly detection, RUL prediction with LSTM/GRU, and intelligent maintenance orchestration. Built with Kafka streaming, TimescaleDB, MLflow, and comprehensive monitoring.',
    technologies: ['Python', 'Kafka', 'Docker', 'Kubernetes', 'TimescaleDB', 'PostgreSQL', 'InfluxDB', 'PyTorch', 'MLflow', 'React', 'FastAPI', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Boussyf0/MANTIS',
    video: 'https://youtu.be/W1oyX2C1gkU',
    featured: true
  },
  {
    id: 'aerointellicad',
    title: 'AeroIntelliCAD - AI-Powered Aerospace CAD Platform',
    desc: 'Revolutionary SaaS platform for aerospace engineering featuring AI-powered 3D model generation from text/images, automated regulatory validation (35+ FAA/EASA constraints), integrated CFD simulation with OpenFOAM, and RAG chatbot for technical assistance. Fully web-based with no installation required.',
    technologies: ['React', 'Next.js', 'Three.js', 'AI/ML', 'Computer Vision', 'OpenFOAM', 'RAG', 'LLMs', 'Python', 'CAD', 'CFD'],
    link: 'https://github.com/Boussyf0/AeroIntelliCAD',
    video: 'https://www.youtube.com/watch?v=UGsLej-iOrY',
    featured: true
  },
  {
    id: 'chess-game',
    title: 'Chess Game C#',
    desc: 'Chess engine in C# with complete UI and AI logic implementation.',
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