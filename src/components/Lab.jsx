import React, { useState } from 'react';
import { Box, Card, Tab, Tabs, Typography, Container, CircularProgress, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

// Mock data for visualization
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 }
];

// Section components with error boundaries
const Section = ({ title, children }) => {
  return (
    <Card 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        p: 4, 
        my: 2,
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children || <CircularProgress sx={{ alignSelf: 'center', my: 'auto' }} />}
    </Card>
  );
};

// Data Visualization Section
const DataVizSection = () => (
  <Box sx={{ height: 400 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);

// AI Models Showcase Section
const AIModelsShowcase = () => {
  const [inputText, setInputText] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    // Simulate AI prediction
    setPrediction(`Sentiment: ${Math.random() > 0.5 ? 'Positive' : 'Negative'}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Enter text for sentiment analysis"
        multiline
        rows={4}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" onClick={handlePredict}>
        Analyze Sentiment
      </Button>
      {prediction && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {prediction}
        </Typography>
      )}
    </Box>
  );
};

// DevOps Pipeline Demo Section
const DevOpsPipelineDemo = () => {
  const steps = ['Build', 'Test', 'Deploy', 'Monitor'];
  const [activeStep, setActiveStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <motion.div
        animate={{ x: `${(activeStep / (steps.length - 1)) * 100}%` }}
        transition={{ duration: 0.5 }}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#6366f1',
          borderRadius: '50%'
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        {steps.map((step, index) => (
          <Typography
            key={step}
            variant="body1"
            color={index === activeStep ? 'primary' : 'text.secondary'}
          >
            {step}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

// Dataset Explorer Section
const DatasetExplorer = () => {
  const data = [
    { id: 1, name: 'Sample A', value: 100, category: 'Type 1' },
    { id: 2, name: 'Sample B', value: 200, category: 'Type 2' },
    { id: 3, name: 'Sample C', value: 300, category: 'Type 1' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell>{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Mini Apps Gallery Section
const MiniAppsGallery = () => {
  const apps = [
    { title: 'Image Classifier', description: 'Upload and classify images' },
    { title: 'Local Chatbot', description: 'Interactive AI chat experience' },
    { title: 'Code Generator', description: 'AI-powered code suggestions' },
  ];

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
      {apps.map((app) => (
        <Card key={app.title} sx={{ p: 2 }}>
          <Typography variant="h6">{app.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {app.description}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

const Lab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const sections = [
    {
      title: 'Data Visualization',
      content: <DataVizSection />
    },
    {
      title: 'AI Models',
      content: <AIModelsShowcase />
    },
    {
      title: 'DevOps Pipeline',
      content: <DevOpsPipelineDemo />
    },
    {
      title: 'Dataset Explorer',
      content: <DatasetExplorer />
    },
    {
      title: 'Mini Apps',
      content: <MiniAppsGallery />
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
        py: { xs: 8, md: 12 }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 3
            }}
          >
            Interactive Lab
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            paragraph
            sx={{ mb: 4 }}
          >
            Explore interactive demos and experiments
          </Typography>
        </motion.div>

        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          mb: 3,
          width: '100%'
        }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            aria-label="lab sections"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                minWidth: { xs: 'auto', sm: 120 }
              }
            }}
          >
            {sections.map((section, index) => (
              <Tab 
                key={section.title} 
                label={section.title}
                id={`lab-tab-${index}`}
                aria-controls={`lab-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {sections.map((section, index) => (
          activeTab === index && (
            <Box
              key={section.title}
              role="tabpanel"
              id={`lab-tabpanel-${index}`}
              aria-labelledby={`lab-tab-${index}`}
            >
              <Section title={section.title}>
                {section.content}
              </Section>
            </Box>
          )
        ))}
      </Container>
    </Box>
  );
};

export default Lab; 