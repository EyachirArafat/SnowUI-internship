import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { TrafficByWebsite } from './TrafficByWebsite';

// Register Chart.js Components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Data and Options
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      label: 'This Year',
      data: [12000, 9000, 13000, 19000, 27000, 23000, 20000, 12000, 9000],
      borderColor: '#000000',
      backgroundColor: 'rgba(79, 70, 229, 0.2)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Last Year',
      data: [10000, 12000, 13000, 15000, 16000, 18000, 21000, 10000, 12000],
      borderColor: '#AEC7ED',
      backgroundColor: 'rgba(147, 51, 234, 0.2)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        // color: '#4A5568',
      },
    },
    y: {
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
        borderDash: [5, 5],
      },
      ticks: {
        // color: '#4A5568',
      },
      beginAtZero: true,
    },
  },
};


export const LineChart = () => {
  const [activeButton, setActiveButton] = useState("Total Users");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=''>
      <div className='grid grid-cols-4 gap-4'>
        <div className='sm:col-span-3 col-span-4 bg-bg1 dark:bg-bg5/5 sm:p-4 p-2 rounded-xl'>
          <div className='flex flex-wrap pb-4'>
          <div className="flex flex-wrap sm:gap-3 gap-1 sm:border-r sm:pr-6 ">
            <button
              onClick={() => handleButtonClick("Total Users")}
              className={`sm:text-base text-t14 ${
                activeButton === "Total Users" ? " font-bold" : ""
              }`}
            >
              Total Users
            </button>
            <button
              onClick={() => handleButtonClick("Total Projects")}
              className={`sm:text-base text-t14 ${
                activeButton === "Total Projects" ? "font-bold" : ""
              }`}
            >
              Total Projects
            </button>
            <button
              onClick={() => handleButtonClick("Operating Status")}
              className={`sm:text-base text-t14 ${
                activeButton === "Operating Status" ? " font-bold" : ""
              }`}
            >
              Operating Status
            </button>
          </div>
          <div className='sm:pl-6 pl-2 flex gap-3 items-center'>
            {/* Custom Legend */}
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-black '></span>
              <p className='text-gray-700 dark:text-gray-400'>This Year</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-blue-400'></span>
              <p className='text-gray-700 dark:text-gray-400'>Last Year</p>
            </div>
          </div>
          </div>

          {/* Chart Section */}
          <div style={{ height: '300px', width: '100%' }}>
            {activeButton === "Total Users" && (<Line data={data} options={options} />)}
          </div>
        </div>
        <div className='sm:col-span-1 col-span-4 bg-bg1 dark:bg-bg5/5 sm:p-4 p-2 rounded-xl'>
          <TrafficByWebsite/>
        </div>
      </div>
      
    </div>
  );
};
