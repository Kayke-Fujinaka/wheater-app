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
import { formatDate } from '../../utils/formatDate'
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

export const GraphicChart = () => {
  const { days } = useWheater()

  const datas = {
    labels: days.map(data => formatDate(data.day)),
    datasets: [
      {
        label: 'Temperature',
        data: days.map(data => data.temp),
        backgroundColor: ['#f3ba2f'],
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label: 'Humidity',
        data: days.map(data => data.humidity),
        backgroundColor: ['#2a71d0'],
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label: 'Wind speed',
        data: days.map(data => data.wind * 3.6),
        backgroundColor: [' #73F054'],
        borderColor: 'black',
        borderWidth: 1
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
