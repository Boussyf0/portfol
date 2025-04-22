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
    skills: ["LLMs", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "XGBoost"]
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
    id: 'chess-game',
    title: 'Chess Game C#', 
    desc: 'Chess engine in C# with complete UI and AI logic implementation.',
    technologies: ['C#', '.NET', 'WPF'],
    link: 'https://github.com/Boussyf0/Chess_Game' 
  }
];

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/boussyf0',
  linkedin: 'https://www.linkedin.com/in/abderrahim-boussyf-167539175/',
  email: 'boussyf0@gmail.com'
}; 