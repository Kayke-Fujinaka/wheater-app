/* eslint-disable react/prop-types */
import { Container } from './styles'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import { useWheater } from '../../contexts/weather'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// eslint-disable-next-line react/prop-types
export function GraphicChart() {
  const { days } = useWheater()

  const datas = {
    labels: days.map(data => data.day),
    datasets: [
      {
        label: 'Humidity',
        data: days.map(data => data.humidity),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0'
        ],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25
      }
    }
  }

  return (
    <Container>
      <Bar data={datas} height={400} options={options} />
    </Container>
  )
}
