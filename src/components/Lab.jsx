import React, { useState, useEffect } from 'react';
import { Box, Card, Tab, Tabs, Typography, Container, TextField, Button, alpha, useTheme, Chip, LinearProgress, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SectionTitle from './UI/SectionTitle';

// Mock data for Energy Forecasting
const energyData = [
  { month: 'Jan', actual: 450, predicted: 440 },
  { month: 'Feb', actual: 380, predicted: 390 },
  { month: 'Mar', actual: 520, predicted: 510 },
  { month: 'Apr', actual: 600, predicted: 595 },
  { month: 'May', actual: 580, predicted: 590 },
  { month: 'Jun', actual: 650, predicted: 640 },
];

// Mock data for Network Loss Analysis
const lossData = [
  { zone: 'Zone A', loss: 8.5, target: 10 },
  { zone: 'Zone B', loss: 12.3, target: 10 },
  { zone: 'Zone C', loss: 6.2, target: 10 },
  { zone: 'Zone D', loss: 15.1, target: 10 },
];

// Agent Playground with Reasoning Visualization
const AgentPlayground = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m an autonomous AI agent with access to Abderrahim\'s complete portfolio. I can answer questions about his projects, skills, experience, education, certifications, or contact information. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [logs, setLogs] = useState([]);

  const knowledgeBase = {
    'experience': `▸ CURRENT (2025) - Brain Gen Technology
Intelligent Web Platform & RAG Intern
• Developed RAG-based chatbot using Llama 3 and Mistral LLMs
• Optimized lead qualification workflows
• Enhanced customer interaction automation

▸ 2024 - ONEEP-DAKHLA
Technical Loss Analysis Intern
• Analyzed electrical distribution network losses
• Identified 3 key factors causing 40% of losses
• Proposed strategies for 5-10% loss reduction

▸ 2023 - OCP SAFI
Process Verification Intern
• Monitored phosphoric acid production parameters
• Optimized industrial flows from grinding to storage
• Conducted quality control and process optimization`,

    'skills': `AI & MACHINE LEARNING
• LLMs: GPT-4, Llama 3, Mistral, Claude
• Frameworks: LangChain, LangGraph, AutoGPT, Agentforce
• ML Tools: TensorFlow, PyTorch, scikit-learn, XGBoost
• Specialties: RAG Systems, NLP, Computer Vision

VECTOR DATABASES & KNOWLEDGE
• Pinecone, ChromaDB, FAISS, Weaviate, Milvus
• Knowledge Graphs, Hybrid Search, Re-ranking

MLOPS & DEVOPS
• MLflow, Airflow, FastAPI, Docker, Kubernetes
• Prometheus, Grafana, GitHub Actions, CI/CD

PROGRAMMING & DATA
• Languages: Python (Advanced), JavaScript, C++, Java
• Data Tools: Pandas, NumPy, Matplotlib, Seaborn
• Big Data: Apache Spark, AWS (EC2, S3, Lambda)

WEB & DATABASES
• Frontend: React, Streamlit, Node.js
• Databases: PostgreSQL, MongoDB, MySQL, Redis, InfluxDB
• Tools: Selenium, Web Scraping, Jupyter

METHODOLOGIES
• Agile, Scrum, DevOps, MLOps`,

    'projects': `▸ BRAINGEN AI + SALESFORCE AGENTFORCE (2025)
North Africa Dreamin' 2025 Hackathon - ACCEPTED IDEA
• AI-Powered Lead Qualification platform
• 80% reduction in qualification time
• 60% increase in lead quality, <2s response time
Tech: Salesforce, Agentforce, RAG, Llama 3, Python

▸ AGENT RAG & LEAD QUALIFICATION
• Intelligent lead analysis system at Brain Gen Tech
• Automatic qualification using LangChain and OpenAI
Tech: Python, LangChain, OpenAI, Vector DB, Streamlit

▸ AI INTERVIEW SIMULATOR
• Local LLM-based interview preparation system
• Generates customized questions and evaluates answers
Tech: Python, LLMs, NLP, React

▸ ENERGY CONSUMPTION FORECASTING
• Time series prediction using LSTM and ARIMA
• Interactive Streamlit deployment with visualizations
Tech: Python, TensorFlow, LSTM, ARIMA, Pandas

▸ ML-PIPELINE-PRO: ENTERPRISE MLOPS
• Production-grade Customer Churn Prediction pipeline
• Automated training, registry, serving, and monitoring
• Airflow orchestration, MLflow registry, Prometheus/Grafana
Tech: Python, MLflow, Airflow, FastAPI, K8s, PostgreSQL

▸ CLOUD-NATIVE IOT PLATFORM
• Scalable IoT platform on Kubernetes
• MQTT broker, InfluxDB, Grafana, Prometheus
• TLS security, 99.9% uptime
Tech: Kubernetes, Docker, MQTT, InfluxDB, Grafana

▸ HEALTH_TRACKR
• Patient symptom analysis and hospitalization management
• ML-based decision support system
Tech: Python, Machine Learning, Healthcare Analytics

▸ JOB MATCHING AGENT
• LLM-based resume and job posting matcher
Tech: Python, LLMs, Selenium`,

    'certifications': `▸ Oracle Cloud Infrastructure 2024 Generative AI Professional
   Oracle, 2024
   Focus: Generative AI, OCI, LLMs, Prompt Engineering

▸ Google Advanced Data Analytics
   Google, 2024
   Focus: Data Analysis, Python, ML, Statistics

▸ AWS Cloud Practitioner CLF-C02
   Amazon Web Services, 2024
   Focus: Cloud Computing, AWS Services, Security

▸ Mastering RAG Systems
   AI Enhancement, 2024
   Focus: RAG, Knowledge Graphs, Vector Databases

▸ Large Language Models (LLMs)
   H2O.ai, 2024
   Focus: LLMs, Fine-tuning, Prompt Engineering

▸ Containers: Docker, Kubernetes & OpenShift
   IBM, 2023
   Focus: Docker, Kubernetes, OpenShift, DevOps

▸ Software Design & Project Management
   University of Alberta, 2023
   Focus: Software Architecture, Design Patterns, Agile`,

    'education': `▸ COMPUTER ENGINEERING (2023 - Present)
EMSI-MARRAKECH
• Specialization: Artificial Intelligence & Digital Engineering
• Final year student with 3+ years production AI experience
• Focus: Advanced algorithms, distributed systems, architecture

▸ ENGINEERING CYCLE - GPM (2021 - 2023)
ENSA Safi (National School of Applied Sciences)
• Process and Materials Engineering
• Foundation in industrial processes and materials science
• Applied knowledge in OCP and ONEEP internships

▸ CPGE (2018 - 2020)
Ad Dakhla - Preparatory Classes
• Mathematics and Physics track
• Rigorous foundation for engineering school entrance`,

    'contact': `Email: boussyf0@gmail.com
LinkedIn: linkedin.com/in/abderrahim-boussyf-167539175
GitHub: github.com/boussyf0
Location: Morocco

CURRENTLY SEEKING:
End-of-Studies Internship (PFE) - 4-6 months
Roles: Data Science, ML Engineering, AI Engineering`,

    'summary': `ABDERRAHIM BOUSSYF
Final-year Computer Engineering student at EMSI-MARRAKECH
Specializing in Agentic AI, RAG systems, and MLOps
3+ years hands-on production AI experience

KEY ACHIEVEMENTS:
• North Africa Dreamin' 2025 Hackathon - ACCEPTED IDEA
  (80% time reduction, 60% quality increase in lead qualification)
• Built RAG-based chatbot systems (Llama 3, Mistral, GPT-4)
• Created enterprise MLOps pipelines (Airflow, MLflow, Kubernetes)
• Developed cloud-native IoT platform (99.9% uptime)
• Reduced electrical network losses by 40%

CORE SPECIALIZATIONS:
• Autonomous AI Agents & Agentic Systems
• RAG & Knowledge Systems (Vector DBs, embeddings, LLMs)
• LLM Integration & Production AI deployment
• MLOps & AI Infrastructure (automated pipelines)
• Full-Stack AI Development (FastAPI, React, Streamlit)

CURRENTLY SEEKING:
4-6 month End-of-Studies Internship (PFE)
Data Science | ML Engineering | AI Engineering`
  };

  const addLog = (step, detail) => {
    setLogs(prev => [...prev, { step, detail, timestamp: new Date().toLocaleTimeString() }]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    setLogs([]); // Clear previous logs

    // Simulate Agent Reasoning Steps
    try {
      // Step 1: Intent Analysis
      addLog('Input Received', `Analyzing user query: "${input}"`);
      await new Promise(r => setTimeout(r, 800));

      const query = input.toLowerCase();
      let intent = 'general_chat';
      let topic = 'unknown';

      if (query.includes('project')) { intent = 'query_projects'; topic = 'projects'; }
      else if (query.includes('skill') || query.includes('tech') || query.includes('technolog')) { intent = 'query_skills'; topic = 'skills'; }
      else if (query.includes('experience') || query.includes('work') || query.includes('intern')) { intent = 'query_experience'; topic = 'experience'; }
      else if (query.includes('education') || query.includes('study') || query.includes('school') || query.includes('university')) { intent = 'query_education'; topic = 'education'; }
      else if (query.includes('certif') || query.includes('certificate') || query.includes('credential')) { intent = 'query_certifications'; topic = 'certifications'; }
      else if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('linkedin')) { intent = 'query_contact'; topic = 'contact'; }
      else if (query.includes('who') || query.includes('about') || query.includes('summary') || query.includes('tell me')) { intent = 'query_summary'; topic = 'summary'; }

      addLog('Intent Classification', `Detected intent: ${intent} (Confidence: 0.98)`);
      await new Promise(r => setTimeout(r, 800));

      // Step 2: Tool Selection & Execution
      let response = 'I can help you learn about Abderrahim\'s experience, skills, projects, or education. Try asking about those!';

      if (topic !== 'unknown') {
        addLog('Tool Selection', `Selected tool: KnowledgeBase_Retriever for topic "${topic}"`);
        await new Promise(r => setTimeout(r, 800));

        addLog('Data Retrieval', `Querying vector database for "${topic}"...`);
        await new Promise(r => setTimeout(r, 800));

        response = knowledgeBase[topic];
        addLog('Context Retrieval', `Found relevant context: "${response.substring(0, 40)}..."`);
      } else {
        addLog('Reasoning', 'No specific topic detected. Falling back to general response.');
      }

      await new Promise(r => setTimeout(r, 600));

      // Step 3: Response Generation
      addLog('Response Generation', 'Synthesizing final answer using LLM...');
      await new Promise(r => setTimeout(r, 600));

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box sx={{ height: { xs: 'auto', md: 500 }, minHeight: { xs: 600, md: 500 }, display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Chat Area */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{
          flexGrow: 1,
          overflowY: 'auto',
          mb: 2,
          p: 2,
          bgcolor: alpha(theme.palette.background.paper, 0.5),
          borderRadius: 2,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
        }}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                mb: 2
              }}>
                <Box sx={{
                  maxWidth: { xs: '90%', md: '85%' },
                  p: { xs: 1.5, md: 2 },
                  borderRadius: 2,
                  bgcolor: msg.role === 'user'
                    ? theme.palette.primary.main
                    : alpha(theme.palette.secondary.main, 0.1),
                  color: msg.role === 'user' ? 'white' : 'text.primary'
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      whiteSpace: 'pre-line',
                      lineHeight: 1.6
                    }}
                  >
                    {msg.content}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
          {isProcessing && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <LinearProgress sx={{ width: 100, borderRadius: 2 }} />
            </Box>
          )}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Ask about projects, skills..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isProcessing}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={isProcessing}
            sx={{
              background: theme.customGradients?.primary,
              color: 'white',
              '&:hover': { background: theme.customGradients?.secondary }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Reasoning Log Area */}
      <Box sx={{
        width: { xs: '100%', md: 300 },
        minHeight: { xs: 250, md: 'auto' },
        maxHeight: { xs: 300, md: 'auto' },
        bgcolor: '#1e1e1e',
        borderRadius: 2,
        p: 2,
        overflowY: 'auto',
        fontFamily: 'monospace',
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
      }}>
        <Typography variant="subtitle2" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToyIcon fontSize="small" /> Agent Reasoning Log
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <AnimatePresence>
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Box sx={{ borderLeft: `2px solid ${theme.palette.primary.main}`, pl: 1.5 }}>
                  <Typography variant="caption" sx={{ color: alpha('#fff', 0.5), display: 'block', mb: 0.5 }}>
                    [{log.timestamp}] {log.step}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#a5d6a7', fontFamily: 'monospace' }}>
                    {log.detail}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
          {logs.length === 0 && !isProcessing && (
            <Typography variant="caption" sx={{ color: alpha('#fff', 0.3), textAlign: 'center', mt: 4 }}>
              Waiting for input...
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

// Energy Forecasting Demo
const EnergyForecasting = () => {
  const theme = useTheme();
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        LSTM-based energy consumption forecasting model
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={energyData}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.3} />
              <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.palette.secondary.main} stopOpacity={0.3} />
              <stop offset="95%" stopColor={theme.palette.secondary.main} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={alpha(theme.palette.primary.main, 0.1)} />
          <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              borderRadius: '8px'
            }}
          />
          <Area
            type="monotone"
            dataKey="actual"
            stroke={theme.palette.primary.main}
            strokeWidth={2}
            fill="url(#colorActual)"
            name="Actual (kWh)"
          />
          <Area
            type="monotone"
            dataKey="predicted"
            stroke={theme.palette.secondary.main}
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#colorPredicted)"
            name="Predicted (kWh)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Chip label="LSTM Model" color="primary" size="small" />
        <Chip label="ARIMA Model" color="secondary" size="small" />
        <Chip label="MAE: 15 kWh" size="small" />
      </Box>
    </Box>
  );
};

import StorageIcon from '@mui/icons-material/Storage';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

// ... existing imports ...

// MLOps Pipeline Visualizer
const MLOpsPipeline = () => {
  const theme = useTheme();
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { name: 'Data Ingestion', icon: <StorageIcon />, status: 'completed' },
    { name: 'Training', icon: <ModelTrainingIcon />, status: 'completed' },
    { name: 'Validation', icon: <FactCheckIcon />, status: 'running' },
    { name: 'Deployment', icon: <RocketLaunchIcon />, status: 'pending' },
    { name: 'Monitoring', icon: <MonitorHeartIcon />, status: 'pending' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Automated ML pipeline based on ML-Pipeline-Pro project
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        {stages.map((stage, idx) => (
          <Box key={idx} sx={{ textAlign: 'center', flex: 1 }}>
            <motion.div
              animate={{
                scale: idx === activeStage ? 1.2 : 1,
                opacity: idx === activeStage ? 1 : 0.6
              }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                background: idx === activeStage
                  ? theme.customGradients?.primary
                  : alpha(theme.palette.primary.main, 0.1),
                mx: 'auto',
                mb: 1,
                boxShadow: idx === activeStage ? `0 4px 12px ${alpha(theme.palette.primary.main, 0.4)}` : 'none'
              }}>
                {stage.icon}
              </Box>
            </motion.div>
            <Typography variant="caption" sx={{ fontWeight: idx === activeStage ? 600 : 400 }}>
              {stage.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <LinearProgress
        variant="determinate"
        value={(activeStage / (stages.length - 1)) * 100}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          '& .MuiLinearProgress-bar': {
            background: theme.customGradients?.primary
          }
        }}
      />
      <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip label="MLflow" size="small" />
        <Chip label="Airflow" size="small" />
        <Chip label="FastAPI" size="small" />
        <Chip label="Prometheus" size="small" />
      </Box>
    </Box>
  );
};

// Network Loss Analysis
const NetworkLossAnalysis = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Electrical network technical loss analysis (ONEEP internship)
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={lossData}>
          <CartesianGrid strokeDasharray="3 3" stroke={alpha(theme.palette.primary.main, 0.1)} />
          <XAxis dataKey="zone" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} label={{ value: 'Loss %', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              borderRadius: '8px'
            }}
          />
          <Bar
            dataKey="loss"
            fill={theme.palette.primary.main}
            radius={[8, 8, 0, 0]}
            name="Actual Loss %"
          />
          <Bar
            dataKey="target"
            fill={alpha(theme.palette.secondary.main, 0.3)}
            radius={[8, 8, 0, 0]}
            name="Target %"
          />
        </BarChart>
      </ResponsiveContainer>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Key Finding:</strong> Identified 3 factors responsible for 40% of losses
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="MT Network" size="small" color="primary" variant="outlined" />
          <Chip label="BT Network" size="small" color="primary" variant="outlined" />
          <Chip label="5-10% Reduction Potential" size="small" />
        </Box>
      </Box>
    </Box>
  );
};

const Lab = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const sections = [
    {
      title: 'Agent Playground',
      icon: <SmartToyIcon />,
      content: <AgentPlayground />,
      description: 'Interactive Agent Reasoning Demo'
    },
    {
      title: 'Energy Forecasting',
      icon: <TrendingUpIcon />,
      content: <EnergyForecasting />,
      description: 'ML Project - LSTM/ARIMA'
    },
    {
      title: 'MLOps Pipeline',
      icon: <AccountTreeIcon />,
      content: <MLOpsPipeline />,
      description: 'ML-Pipeline-Pro Project'
    },
    {
      title: 'Network Analytics',
      icon: <AnalyticsIcon />,
      content: <NetworkLossAnalysis />,
      description: 'ONEEP Internship'
    }
  ];

  return (
    <Box
      component="section"
      id="lab"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)}, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <SectionTitle title="Interactive Lab" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, fontSize: '1.1rem' }}
          >
            Explore interactive demos showcasing my real projects and expertise
          </Typography>
        </motion.div>

        <Box sx={{
          borderBottom: 1,
          borderColor: 'divider',
          mb: 4,
        }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="lab sections"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                minWidth: { xs: 'auto', sm: 140 },
                fontFamily: 'Inter, sans-serif'
              }
            }}
          >
            {sections.map((section, index) => (
              <Tab
                key={section.title}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {section.icon}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {section.title}
                    </Box>
                  </Box>
                }
                id={`lab-tab-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          {sections.map((section, index) => (
            activeTab === index && (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    p: 4,
                    minHeight: 500,
                    background: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.08)}`
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{
                      p: 1.5,
                      borderRadius: 2,
                      background: alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main'
                    }}>
                      {section.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
                        {section.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {section.description}
                      </Typography>
                    </Box>
                  </Box>
                  {section.content}
                </Card>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Lab;