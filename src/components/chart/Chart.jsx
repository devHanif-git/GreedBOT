import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Legend
);

const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];

export const options = {
  responsive: true,
  borderRadius: 3,
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "white",
        callback: function (value) {
          return value + "%";
        },
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
      position: "top",
    },
  },
};

export const Chart = ({ chartData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Cumulative Profits",
        data: chartData.map((item) => item.data),
        backgroundColor: "rgba(255, 206, 86, 100)",
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      className={`max-w-[350px] max-h-[240px]`}
    />
  );
};
