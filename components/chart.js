import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const state = {
  labels: ["Pik.ba", "Ebay.com", "Amazon.com", "Alibaba.com"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [
        getRandomInt(50, 200),
        getRandomInt(100, 150),
        getRandomInt(150, 250),
        getRandomInt(150, 250),
      ],
    },
  ],
};

export default class ChartComponent extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          width={380}
          height={370}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
