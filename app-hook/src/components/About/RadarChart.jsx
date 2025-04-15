import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// ลงทะเบียนส่วนประกอบสำหรับ Radar Chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title 
);

const RadarChart = () => {
  const data = {
    labels: ['ความเร็ว', 'ความแข็งแกร่ง', 'ความฉลาด', 'ความยืดหยุ่น', 'ความคิดสร้างสรรค์'],
    datasets: [
      {
        label: 'ทีม A',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'ทีม B',
        data: [28, 48, 40, 19, 96],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'เปรียบเทียบทักษะทีม (Radar Chart)',
      },
    },
  };

  return (
    <div>
        <h1 className='text-center text-[40px] font-bold'>Radar Chart</h1>
        <div className='flex justify-center w-[500px]'>
            <Radar data={data} options={options} />
        </div>
    </div>
  );
};

export default RadarChart;