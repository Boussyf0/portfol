import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DataDashboard = () => {
  const theme = useTheme();
  const { MotionDiv, style } = useScrollAnimation({
    start: 0,
    end: 0.5,
    yStart: 50,
    yEnd: 0,
  });

  const apiResponseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'API Response Time (ms)',
        data: [120, 110, 95, 90, 85, 80],
        borderColor: theme.palette.primary.main,
        backgroundColor: 'rgba(0, 115, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const modelAccuracyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Model Accuracy (%)',
        data: [85, 88, 90, 92, 94, 96],
        borderColor: theme.palette.secondary.main,
        backgroundColor: 'rgba(135, 0, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const buildData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'CI/CD Builds',
        data: [45, 52, 60, 65, 70, 75],
        borderColor: '#00ff9d',
        backgroundColor: 'rgba(0, 255, 157, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
          font: {
            family: 'JetBrains Mono',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: theme.palette.text.secondary,
          font: {
            family: 'JetBrains Mono',
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: theme.palette.text.secondary,
          font: {
            family: 'JetBrains Mono',
          },
        },
      },
    },
  };

  return (
    <MotionDiv style={style}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: 3,
          p: 3,
        }}
      >
        <Card
          sx={{
            background: theme.customGradients.glass,
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Orbitron',
                textTransform: 'uppercase',
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              API Performance
            </Typography>
            <Line data={apiResponseData} options={chartOptions} />
          </CardContent>
        </Card>

        <Card
          sx={{
            background: theme.customGradients.glass,
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Orbitron',
                textTransform: 'uppercase',
                mb: 2,
                color: theme.palette.secondary.main,
              }}
            >
              Model Accuracy
            </Typography>
            <Line data={modelAccuracyData} options={chartOptions} />
          </CardContent>
        </Card>

        <Card
          sx={{
            background: theme.customGradients.glass,
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Orbitron',
                textTransform: 'uppercase',
                mb: 2,
                color: '#00ff9d',
              }}
            >
              CI/CD Builds
            </Typography>
            <Line data={buildData} options={chartOptions} />
          </CardContent>
        </Card>
      </Box>
    </MotionDiv>
  );
};

export default DataDashboard; 