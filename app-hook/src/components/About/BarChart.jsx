import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// ลงทะเบียนส่วนประกอบที่จำเป็นสำหรับ Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // ข้อมูลสำหรับกราฟ
  const data = {
    labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม'],
    datasets: [
      {
        label: 'ยอดขาย (หน่วย)',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'ยอดขาย (หน่วย)',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(255, 251, 0, 0.278)',
        borderColor: 'rgba(255, 251, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'ยอดขาย (หน่วย)',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(206, 0, 255, 0.278)',
        borderColor: 'rgba(206, 0, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // การตั้งค่า Options สำหรับกราฟ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'ยอดขายรายเดือน',
      },
    },
  };

  return (
    <div>
        <h1 className='text-center font-bold text-[40px]'>Bar Chart</h1>
        <div className='flex items-center justify-center w-full'>
            <Bar data={data} options={options} />
        </div>
    </div>
  );
};

export default BarChart;