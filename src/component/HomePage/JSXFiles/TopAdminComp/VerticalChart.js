import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    
    },
  
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



export default function VerticalChart({ verticalYearToken }) {
  let [scholarships, setScholarships] = useState([]);
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

  async function getScholarshipsCounts() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getAllScholarships`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setScholarships(json.scholarships)
      });
  }


  useEffect(() => {
    getScholarshipsCounts(); 

  },[])

  function setYearValue(verticalYearToken) {
    console.log(verticalYearToken)
    scholarships.map((scholarship) => {
      if (new Date(scholarship.postDate).toLocaleDateString().split("/")[2] === verticalYearToken) {

        if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 1) {
          arr[0]  +=1; 

        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 2) {
          arr[1]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 3) {
          arr[2]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 4) {
          arr[3]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 5) {
          arr[4]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 6) {
          arr[5]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 7) {
          arr[6]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 8) {
          arr[7]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 9) {
          arr[8]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 10) {
          arr[9]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 11) {
          arr[10]  +=1; 
        }
        else if (new Date(scholarship.postDate).toLocaleDateString().split("/")[0] == 12) {
          arr[11]  +=1; 
        }




      }
    })

  }


  const dataVerticalChart = {
    labels,
    datasets: [
      {
        label: 'Scholarships',
        data: arr,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },


    ],
    
  };
  return (
    <>
      {setYearValue(verticalYearToken)}
      <Bar options={options} data={dataVerticalChart} />;
    </>

  );


}
