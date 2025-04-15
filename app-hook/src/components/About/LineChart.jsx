import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// ลงทะเบียนส่วนประกอบสำหรับ Line Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม'],
    datasets: [
      {
        label: 'ยอดขาย (หน่วย)',
        data: [65, 59, 80, 81, 56],
        fill: false, // ไม่เติมสีใต้เส้น
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3, // ความโค้งของเส้น (0 = ตรง, 1 = โค้งมาก)
      },
      {
        label: 'ยอดขาย (หน่วย)',
        data: [1, 25, 5, 98, 120],
        fill: false, // ไม่เติมสีใต้เส้น
        borderColor: 'rgb(7, 255, 0)',
        tension: 0.3, // ความโค้งของเส้น (0 = ตรง, 1 = โค้งมาก)
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
        text: 'ยอดขายรายเดือน (Line Chart)',
      },
    },
  };

  return (
    <div>
        <h1 className='text-center text-[40px] font-bold'>Line Chart</h1>
        <div className='flex justify-center'>
            <Line data={data} options={options} />
        </div>
    </div>
  );
};

export default LineChart;