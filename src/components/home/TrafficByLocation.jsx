import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export const TrafficByLocation = () => {
  const doughnutData = {
    labels: ["United States", "Canada", "Mexico", "Other"],
    datasets: [
      {
        label: "Traffic by Location",
        data: [52.1, 22.8, 13.9, 11.2],
        backgroundColor: [
          "rgba(0, 0, 0, 1)", // United States
          "rgba(146, 191, 255, 1)", // Canada
          "rgba(148, 233, 184, 1)", // Mexico
          "rgba(174, 199, 237, 1)", // Other
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const Locations = [
    {id: 1, color: "#000000", countryName: "United States", percentage: "52.1%"},
    {id: 2, color: "#92BFFF", countryName: "Canada", percentage: "22.8%"},
    {id: 3, color: "#94E9B8", countryName: "Mexico", percentage: "13.9%"},
    {id: 4, color: "#AEC7ED", countryName: "Other", percentage: "11.2%"},
  ]

  return (
    <div className="w-full h-full flex justify-center items-center ">
  <div className="relative flex justify-center items-center gap-6 w-full max-w-md h-64">
    <Doughnut data={doughnutData} options={doughnutOptions} />
    

    <div className="grid grid-cols-1 gap-4">
      {Locations.map((location) => (
        <div key={location.id} className="flex items-center gap-4 text-gray-900 dark:text-gray-200">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: location.color }}
          ></span>
          <p className="text-sm font-medium">{location.countryName}</p>
          <p className="text-sm mr-auto">{location.percentage}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};
