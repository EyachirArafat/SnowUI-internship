import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const TrafficByLocation2 = () => {

  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const data = {
    labels: ["USA",
      "Canada",
      "Mexico",
      "China",
      "Japan",
      "Australia"],
    datasets: [
      {
        label: "Traffic",
        data: [120000, 200000, 90000, 130000, 203000, 100000],
        backgroundColor: [
          isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
          isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
          isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
          isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
          isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
          isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
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
          color: "#ffffff",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-4xl ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
