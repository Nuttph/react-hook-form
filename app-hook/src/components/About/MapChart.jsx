import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import {
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
} from 'chartjs-chart-geo';
import { Chart as ReactChart } from 'react-chartjs-2';

// ลงทะเบียนส่วนประกอบ
Chart.register(ChoroplethController, GeoFeature, ColorScale, ProjectionScale);

const ThailandMapChart = () => {
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ใช้ GeoJSON ของประเทศไทย
    fetch('https://raw.githubusercontent.com/codesanook/thailand-geojson/master/thailand.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((geojson) => {
        // ตรวจสอบว่า GeoJSON มี features
        if (!geojson || !geojson.features || geojson.features.length === 0) {
          throw new Error('Invalid GeoJSON: No features found');
        }

        // สร้างข้อมูลสำหรับ Choropleth
        const data = {
          labels: geojson.features.map((feature) =>
            feature.properties.name_th || 'Unknown'
          ),
          datasets: [
            {
              label: 'ข้อมูล (สมมติ)',
              data: geojson.features.map((feature) => ({
                feature, // ส่ง GeoJSON Feature
                value: Math.random() * 1000000, // ค่าสุ่ม (เช่น ประชากร)
              })),
            },
          ],
        };

        setMapData(data);
      })
      .catch((error) => {
        console.error('Error loading GeoJSON:', error);
        setError(error.message);
      });
  }, []);

  const options = {
    responsive: true,
    scales: {
      projection: {
        axis: 'x',
        projection: 'mercator', // เหมาะกับประเทศไทย
      },
      color: {
        display: true,
        quantize: 5, // แบ่งสีเป็น 5 ระดับ
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'แผนที่ประเทศไทย (Choropleth Map)',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const data = context.raw;
            return `${data.feature.properties.name_th}: ${Math.round(data.value)}`;
          },
        },
      },
    },
  };

  if (error) {
    return <div>เกิดข้อผิดพลาด: {error}</div>;
  }

  if (!mapData) {
    return <div>กำลังโหลดแผนที่...</div>;
  }

  return (
    <div style={{ width: '80%', margin: '50px auto', maxWidth: '800px' }}>
      <ReactChart type="choropleth" data={mapData} options={options} />
    </div>
  );
};

export default ThailandMapChart;