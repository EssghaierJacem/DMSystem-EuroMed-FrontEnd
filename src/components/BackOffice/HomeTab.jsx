import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Line, Pie, Bar, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale
);

const theme = createTheme({
  components: {
    MuiChart: {
      styleOverrides: {
        root: {
          color: 'white',
        },
        axis: {
          color: 'white',
        },
        legend: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
  },
});

const HomeTab = () => {
  const [averageScores, setAverageScores] = useState({});
  const [globalScoresByTaille, setGlobalScoresByTaille] = useState({});
  const [globalScoresByPays, setGlobalScoresByPays] = useState({});
  const [globalScores, setGlobalScores] = useState({});

  useEffect(() => {
    const fetchAverageScores = async () => {
      try {
        const response = await axiosInstance.get('/processusUPs/average-scores');
        setAverageScores(response.data);
      } catch (error) {
        console.error('Error fetching average scores:', error);
      }
    };

    const fetchGlobalScoresByTaille = async () => {
      try {
        const response = await axiosInstance.get('/societes/global-scores-by-taille');
        setGlobalScoresByTaille(response.data);
      } catch (error) {
        console.error('Error fetching global scores by taille:', error);
      }
    };

    const fetchGlobalScoresByPays = async () => {
      try {
        const response = await axiosInstance.get('/societes/global-scores-by-pays');
        setGlobalScoresByPays(response.data);
      } catch (error) {
        console.error('Error fetching global scores by pays:', error);
      }
    };

    const fetchGlobalScores = async () => {
      try {
        const response = await axiosInstance.get('/societes/global-scores');
        setGlobalScores(response.data);
      } catch (error) {
        console.error('Error fetching global scores:', error);
      }
    };

    fetchAverageScores();
    fetchGlobalScoresByTaille();
    fetchGlobalScoresByPays();
    fetchGlobalScores();
  }, []);

  const pieChartData = {
    labels: Object.keys(globalScoresByTaille),
    datasets: [
      {
        data: Object.values(globalScoresByTaille),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const radarChartData = {
    labels: Object.keys(globalScoresByPays),
    datasets: Object.keys(globalScoresByPays).map((pays) => ({
      label: pays,
      data: Object.values(globalScoresByPays[pays]),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    })),
  };

  const lineChartData = {
    labels: Object.keys(globalScores),
    datasets: [
      {
        label: 'Global Scores',
        data: Object.values(globalScores),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const barChartData = {
    labels: Object.keys(averageScores),
    datasets: [
      {
        label: 'Average Scores',
        data: Object.values(averageScores),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat-tab">
        <div className="main-wrapper p-0">
          <div className="fixed-header">
            <div className="d-flex align-items-center gap-2">
              <h3>Admin - Dashboard</h3>
            </div>
            <a className="premium-btn" data-cursor="pointer" href="#" rel="noreferrer noopener">
              <i className="iconsax" data-icon="crown-2" icon-name="crown-2"></i>
              <span>SUPER ADMIN</span>
            </a>
          </div>
          <div className="main-section">
            <div className="row mb-4 px-3">
              <div className="col-md-3">
                <div className="data-card p-3 rounded d-flex align-items-center" style={{ backgroundColor: '#E5E4E2' }}>
                  <i className="icon-placeholder me-2"></i>
                  <div>
                    <h5>Moyenne de Maturité digitale</h5>
                    <p>Valeur1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="data-card p-3 rounded d-flex align-items-center" style={{ backgroundColor: '#B2BEB5' }}>
                  <i className="icon-placeholder me-2"></i>
                  <div>
                    <h5>Nombre de sociétés</h5>
                    <p>Valeur2</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="data-card p-3 rounded d-flex align-items-center" style={{ backgroundColor: '#D3D3D3' }}>
                  <i className="icon-placeholder me-2"></i>
                  <div>
                    <h5>Nombre de formulaires</h5>
                    <p>Valeur3</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="data-card p-3 rounded d-flex align-items-center" style={{ backgroundColor: '#B2BEB5' }}>
                  <i className="icon-placeholder me-2"></i>
                  <div>
                    <h5>Nombre de pays</h5>
                    <p>Value 4</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Charts row */}
            <div className="row mb-4 px-3">
              <div className="col-md-6">
              <h3 className="text-white">Text Loreum</h3>
                <div className="chart-container"
                  style={{ backgroundColor: '#212935', padding: '20px', borderRadius: '8px', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Pie
                    data={pieChartData}
                    options={{
                      plugins: {
                        legend: {
                          labels: {
                            color: 'white',
                          },
                        },
                        tooltip: {
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          titleColor: 'white',
                          bodyColor: 'white',
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
              <h3 className="text-white">Text Loreum</h3>
                <div className="chart-container"
                  style={{ backgroundColor: '#212935', padding: '20px', borderRadius: '8px', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Line
                    data={lineChartData}
                    options={{
                      plugins: {
                        legend: {
                          labels: {
                            color: 'white',
                          },
                        },
                        tooltip: {
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          titleColor: 'white',
                          bodyColor: 'white',
                        },
                      },
                      scales: {
                        x: {
                          ticks: {
                            color: 'white',
                          },
                        },
                        y: {
                          ticks: {
                            color: 'white',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            {/* GridDemo row */}
            <div className="row mb-4 px-3">
              <div className="col-md-6">
              <h3 className="text-white">Text Loreum</h3>
                <div className="chart-container"
                  style={{ backgroundColor: '#212935', padding: '20px', borderRadius: '8px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Bar
                    data={barChartData}
                    options={{
                      indexAxis: 'y',
                      plugins: {
                        legend: {
                          labels: {
                            color: 'white',
                          },
                        },
                        tooltip: {
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          titleColor: 'white',
                          bodyColor: 'white',
                        },
                      },
                      scales: {
                        x: {
                          ticks: {
                            color: 'white',
                          },
                        },
                        y: {
                          ticks: {
                            color: 'white',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="text-white">Text Loreum</h3>
                <div className="chart-container"
                  style={{ backgroundColor: '#212935', padding: '20px', borderRadius: '8px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Radar
                    data={radarChartData}
                    options={{
                      plugins: {
                        legend: {
                          labels: {
                            color: 'white',
                          },
                        },
                        tooltip: {
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          titleColor: 'white',
                          bodyColor: 'white',
                        },
                      },
                      scales: {
                        r: {
                          angleLines: {
                            color: 'white',
                          },
                          grid: {
                            color: 'rgba(255, 255, 255, 0.5)',
                          },
                          pointLabels: {
                            color: 'white',
                          },
                          ticks: {
                            color: 'white',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomeTab;
