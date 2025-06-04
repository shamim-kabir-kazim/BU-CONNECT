import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        {
          label: '2021',
          data: [80, 70, 65, 60],
          barStyle: { rx: 6, ry: 6 },
        },
        {
          label: '2022',
          data: [85, 75, 60, 65],
          barStyle: { rx: 6, ry: 6 },
        },
        {
          label: '2023',
          data: [90, 80, 70, 70],
          barStyle: { rx: 6, ry: 6 },
        },
        {
          label: '2024',
          data: [95, 85, 75, 75],
          barStyle: { rx: 6, ry: 6 },
        },
      ]}
      height={320}
      xAxis={[
        {
          data: ['CSE', 'BBA', 'Law', 'EEE'],
          scaleType: 'band',
        },
      ]}
    />
  );
}
