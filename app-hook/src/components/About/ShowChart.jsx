import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DoughnutChart from './DoughnutChart'
import RadarChart from './RadarChart'
import MapChart from './MapChart'

const ShowChart = () => {
  return (
    <div>
      <h1>Example ChartJS</h1>
      <BarChart/>
      <LineChart/>
      <PieChart/>
      <DoughnutChart/>
      <RadarChart/>
      <MapChart/>
      <div style={{ width: '80%', margin: '50px auto' }}>
      <h2>แผนที่จาก Google Maps</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65682.91974411932!2d100.58502575359883!3d13.792356480639379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d13aa4570e3%3A0x871428c840cac76f!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5geC4hOC4quC5geC4oeC4lyDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1744695795665!5m2!1sth!2sth"
        width="600"
        height="450"
      ></iframe>
    </div>
    </div>
  )
}

export default ShowChart