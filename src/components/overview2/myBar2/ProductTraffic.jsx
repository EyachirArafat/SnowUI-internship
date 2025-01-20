import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { DotHorizontal } from "../../common/DotHorizontal";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const ProductTrafficChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Dashboard",
        data: [50, 60, 55, 70, 65, 75, 80, 85, 70, 60, 65, 75],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        stack: "Stack 0",
        barThickness: 5,
      },
      {
        label: "SnowUI",
        data: [30, 40, 35, 50, 45, 55, 60, 65, 50, 40, 45, 55],
        backgroundColor: "rgba(201, 203, 207, 0.8)",
        stack: "Stack 0",
        barThickness: 5,
      },
      {
        label: "All",
        data: [80, 100, 90, 120, 110, 130, 140, 150, 120, 100, 110, 130],
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        stack: "Stack 0",
        barThickness: 5,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };
  
  return (
    <div className="pb-6">
      <div className='bg-bg1 dark:bg-bg5/5 sm:p-4 p-2 rounded-xl'>
        <div className='flex justify-between flex-wrap pb-4'>
          <h1 className="font-semibold text-[#FF3B30] text-t14  mb-6">Product Traffic</h1>
          <div className="flex gap-2 flex-wrap items-center">
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-black'></span>
              <p className='text-black/80 dark:text-gray-200'>All</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-gray-400'></span>
              <p className='text-black/80 dark:text-gray-200'>SnowUI</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-[#FF3B30]'></span>
              <p className='text-black/80 dark:text-gray-200'>Dashboard</p>
            </div>
            <DotHorizontal className="h-5 p-1"/>
          </div>
        </div>
      
      {/* Chart Section */}
      <div style={{ height: '300px', width: '100%' }}>
      <Bar data={data} options={options} />
      </div>
    </div>
    </div>
);
};
