import { useQuery } from "@tanstack/react-query";
import {useState} from 'react'
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import Loader from "./Loader";


const LineGraph = () => {
  const [chartData, setChartData] = useState<any>([]);
    const { data } = useQuery(['graphData'], async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const data = await response.json();
        const newChartData = {
            labels: Object.keys(data.cases),
            datasets: [
              {
                label: "Cases",
                data: Object.values(data.cases),
                fill: false,
                borderColor: "#72A0C1",
                tension: 0.2,
              },
            ],
          };
    
          setChartData(newChartData);

          ChartJS.register(
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend
          );
          return data
      });
     
      

  return (
    <>
        {
          chartData?.datasets ?
            <Line data={chartData} /> : <Loader/>
        }


    </>
  )
}

export default LineGraph