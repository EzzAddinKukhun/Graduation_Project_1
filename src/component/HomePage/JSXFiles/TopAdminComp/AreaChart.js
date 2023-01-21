import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { years } from './Statistics';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


export default function AreaChart({ year }) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let [jan, setJan] = useState(0);
  let [feb, setFeb] = useState(0);
  let [mar, setMar] = useState(0);
  let [apr, setApr] = useState(0);
  let [may, setMay] = useState(0);
  let [jun, setJun] = useState(0);
  let [jul, setJul] = useState(0);
  let [aug, setAug] = useState(0);
  let [sep, setSep] = useState(0);
  let [oct, setOct] = useState(0);
  let [nov, setNov] = useState(0);
  let [dec, setDec] = useState(0);
  let [events, setEvents] = useState([]);
  const dataAreaChart = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: arr,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  async function getEventsCounts() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/getEvents/`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {

        setEvents(json.events)
        console.log(json.events)

        // console.log("THERE IS RESPONSE")
        // json.events.map((event, key) => {
        //   if (new Date(event.startDate).toLocaleDateString().split("/")[2] == years) {

        //     console.log("yes")

        //   }
        // })


      });
  }

  function setYearValue(year) {
    console.log(year)
    events.map((event) => {
      if (new Date(event.startDate).toLocaleDateString().split("/")[2] === year) {

        if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 1) {
          arr[0]  +=1; 

        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 2) {
          arr[1]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 3) {
          arr[2]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 4) {
          arr[3]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 5) {
          arr[4]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 6) {
          arr[5]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 7) {
          arr[6]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 8) {
          arr[7]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 9) {
          arr[8]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 10) {
          arr[9]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 11) {
          arr[10]  +=1; 
        }
        else if (new Date(event.startDate).toLocaleDateString().split("/")[0] == 12) {
          arr[11]  +=1; 
        }




      }
    })

  }

  useEffect(() => {
    getEventsCounts();
  }, [])

  return (
    <>
      {
        setYearValue(year)
      }
      <Line options={options} data={dataAreaChart} />

    </>
  )


}
