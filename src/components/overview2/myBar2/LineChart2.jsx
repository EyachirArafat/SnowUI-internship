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
import { TimeDrop } from '../../common/TimeDrop';
import { GraphDrop } from '../../common/GraphDrop';
import { DotHorizontal } from '../../common/DotHorizontal';

// import { TrafficByWebsite } from '../../home/TrafficByWebsite';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'This Year',
      data: [5, 3, 8, 2, 9, 6],
      borderColor: '#AF52DE',
      backgroundColor: 'rgba(79, 70, 229, 0.2)',
      tension: 0.3,
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


export const LineChart2 = () => {
  const [activeButton, setActiveButton] = useState("Total Users");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=''>
      <div className='bg-bg1 dark:bg-bg5/5 sm:p-4 p-2 rounded-xl'>
        <div className='flex justify-between flex-wrap pb-4'>
          <div className="flex flex-wrap sm:gap-3 gap-1 sm:pr-6 ">
            <button
              onClick={() => handleButtonClick("Total Users")}
              className={`sm:text-base text-t14 ${
                activeButton === "Total Users" ? " font-bold text-SPurple" : ""
              }`}
            >
              Users
            </button>
            <button
              onClick={() => handleButtonClick("Total Projects")}
              className={`sm:text-base text-t14 ${
                activeButton === "Total Projects" ? "font-bold" : ""
              }`}
            >
              Projects
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

          <div className='flex gap-2 cursor-pointer flex-wrap'>
            <TimeDrop/>
            <GraphDrop/>
            <DotHorizontal className="p-3"/>
          </div>
        </div>

        {/* Chart Section */}
        <div style={{ height: '300px', width: '100%' }}>
          {activeButton === "Total Users" && (<Line data={data} options={options} />)}
        </div>
      </div>
    </div>
  );
};
