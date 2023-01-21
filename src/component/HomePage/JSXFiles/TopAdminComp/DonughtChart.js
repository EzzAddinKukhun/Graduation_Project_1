import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);


export function DonughtChart() {
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
        // let counter = 0; 
        // for (let i=0 ; i<json.org.length ; i++){
        //    console.log(json.org.jobs.length) ; 
        // }
        // console.log(counter)
        let counter = 0;
        json.org.map((org) => {
          counter += org.jobs.length
        })
        console.log(counter)
        setJobsCounter(counter)

        // let ecounter = 0;
        // json.org.map((org) => {
        //   ecounter += org.events.length
        // })
        // //77
        // setEventsCounter(ecounter);

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

        let ecounter = 0;
        // json.association.map((ass) => {
        //   ecounter += ass.events.length
        // })
        // //77
        // setEventsCounter(eventsCounter + ecounter);

      });
  }
  async function getEventCount() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/getEvents/`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setEventsCounter(json.events.length)
        console.log(json.events.length)

        let ecounter = 0;
        // json.association.map((ass) => {
        //   ecounter += ass.events.length
        // })
        // //77
        // setEventsCounter(eventsCounter + ecounter);

      });
  }


  async function getScholarCount() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getAllScholarships`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setScholarshipsCounter(json.scholarships.length)
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
        // let ecounter = 0;
        // json.university.map((uni) => {
        //   ecounter += uni.events.length
        // })
        // //77
        // setEventsCounter(eventsCounter + ecounter);
        // console.log(ecounter)
      });
  }



  useEffect(() => {
    getOrgCount();
    getMemCount();
    getScholarCount();
    getUniCount();
    getEventCount();


  }, [])
  const dataDonoughtChart = {
    labels: ['Jobs', 'Scholarships', 'Events'],
    datasets: [
      {
        label: '# of Votes',
        data: [jobsCounter, scholarshipsCounter, eventsCounter],
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

  return <Doughnut data={dataDonoughtChart} />;
}
