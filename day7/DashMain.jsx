import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
//import Detail from "./detail";
import './BarChart.css';
const BarChart = () => {
  const [selectedGraph, setSelectedGraph] = useState('bar');

  const handleGraphChange = (event) => {
    setSelectedGraph(event.target.value);
  };
    const barChartOptions = {
      chart: {
        type: 'bar',
        background: '#1C305C',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ['#2962ff',  '#2e7d32', '#ff6d00', '#583cb3'],
      plotOptions: {
        
        bar: {
          distributed: true,
          borderRadius: 4,
          horizontal: false,
          columnWidth: '30%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      grid: {
        borderColor: '#55596e',
        yaxis: {
          lines: {
            show: true,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        labels: {
          colors: '#f5f7ff',
        },
        show: true,
        position: 'top',
      },
      stroke: {
        colors: ['transparent'],
        show: true,
        width: 2,
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
      },
      xaxis: {
        categories: ['Project1 ', 'Project2 ', 'Project3 ', 'Project4 ', 'Project5'],
        title: {
          style: {
            
            color: '#f5f7ff',
          },
        },
        axisBorder: {
          show: true,
          color: '#55596e',
        },
        axisTicks: {
          show: true,
          color: '#55596e',
        },
        labels: {
          style: {
            colors: '#f5f7ff',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Count',
          style: {
            color: '#f5f7ff',
          },
        },
        axisBorder: {
          color: '#55596e',
          show: true,
        },
        axisTicks: {
          color: '#55596e',
          show: true,
        },
        labels: {
          style: {
            colors: '#f5f7ff',
          },
        },
      },
    };
  
    const barChartData = [
      {
        name: '',
        data: [27.3,21.7,20.3,16.7,17.2],
      },
    ];
const areaChartOptions = { 
  chart: {
    type: 'area',
    background: '#1C305C',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#d50000','#00ab57'],
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Project',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Downloads',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  }, };
  const areaChartData = [ {
    name: 'Project',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'Downloads',
    data: [11, 32, 45, 32, 34, 52, 41],
  }, ];


    
    
    
  
     return (
    
      <div className="page-wrapper" style={{ background: '#1C305C'}}>
        
        <div className='header-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20%' }}>
            <h2 style={{color:'white', marginRight: '10px'}}>Choose Criteria:</h2>
          <div className="dropdown-container" >
            <select value={selectedGraph} onChange={handleGraphChange}>
              <option value="bar">Years</option>
              <option value="line">Weekly</option>
            </select>
          </div>
        </div>
          <div className='header-graph'>
            
        {selectedGraph === 'bar' ? (
            <div className="chart-container">
            <ReactApexChart
              options={barChartOptions}
              series={barChartData}
              type="bar"
              height={300}
            />
            </div>
        ) : (
          <>
          x <div className="chart-container-area">
              <ReactApexChart
                options={areaChartOptions}
                series={areaChartData}
                type="area"
                
              />
              </div>
  
            
          </>
        )}
          </div>
      </div>
    
  );
};
  export default BarChart;