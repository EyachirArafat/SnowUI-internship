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

export const TrafficByDevice = () => {
  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic",
        data: [12000, 20000, 15000, 30000, 10000, 18000],
        backgroundColor: [
          "rgba(159, 159, 248, 1)",
          "rgba(150, 226, 214, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(146, 191, 255, 1)",
          "rgba(174, 199, 237, 1)",
          "rgba(148, 233, 184, 1)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
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
          // color: "#4A5568",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          // color: "#4A5568",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="overflow-x-auto  w-full">
      <div className="min-w-[400px] h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
