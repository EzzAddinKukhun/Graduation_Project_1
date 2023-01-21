import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function PieChart() {
  let [eventsCounter, setEventsCounter] = useState(0);
  let [jobsCounter, setJobsCounter] = useState(0);
  let [scholarshipsCounter, setScholarshipsCounter] = useState(0);
  let [orgConter, setOrgCounter] = useState(0);
  let [memCounter, setMemCounter] = useState(0);
  let [uniCounter, setUniCounter] = useState(0);
  let [dataPie, setDataPie] = useState([])
  async function getOrgCount() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getAllOrginizations`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        dataPieChart.datasets[0].data[0] = json.org.length
        setOrgCounter(json.org.length)
      });
  }

  async function getMemCount() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/association/getAllAssociations`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setMemCounter(json.association.length)
      });
  }


  async function getUniCount() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/university/getAllUniversities`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setUniCounter(json.university.length)
      });
  }


  useEffect(() => {
    getOrgCount();
    getMemCount();
    getUniCount();


  }, [])

   const dataPieChart = {
    labels: ['Organizations', 'Memberships', 'Universities'],
    datasets: [
      {
        label: '# of Votes',
        data: [orgConter, memCounter, uniCounter],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  return <Pie data={dataPieChart} />;
}
