import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// ลงทะเบียนส่วนประกอบสำหรับ Doughnut Chart
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = () => {
  const data = {
    labels: ['ผลิตภัณฑ์ A', 'ผลิตภัณฑ์ B', 'ผลิตภัณฑ์ C'],
    datasets: [
      {
        label: 'สัดส่วนยอดขาย',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout:'50%',
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'สัดส่วนยอดขาย (Doughnut Chart)',
      },
    },
  };

  return (
    <div>
        <h1 className='text-center text-[40px] font-bold'>
            Doughnut Chart
        </h1>
        <div className="flex justify-center w-[500px]">
            <Doughnut data={data} options={options} />
        </div>
    </div>
  );
};

export default DoughnutChart;