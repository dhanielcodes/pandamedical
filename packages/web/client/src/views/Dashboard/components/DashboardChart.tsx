import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

interface IProps {
  lows: number;
  normals: number;
  highs: number;
  average: number | string;
  unit: string;
}

const DashboardChart = ({ lows, normals, highs, average, unit }: IProps) => {
  const chartData = [
    { title: 'Lows', value: lows, color: '#FECE5B' },
    { title: 'Normals', value: normals, color: '#7BE495' },
    { title: 'Highs', value: highs, color: '#F75010' },
  ];
  return (
    <div className="Dashboard-doughnut">
      <PieChart
        data={chartData}
        radius={40}
        lineWidth={10}
        paddingAngle={10}
        startAngle={270}
        rounded
        animate
      />
      <h3 className="chart-text">
        <span id="average">Average</span> <br />{' '}
        <span id="data-num">{average}</span> <br />{' '}
        <span id="data-unit">{unit}</span>
      </h3>
    </div>
  );
};

export default DashboardChart;
