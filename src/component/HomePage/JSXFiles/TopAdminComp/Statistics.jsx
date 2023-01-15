import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import '../../CSSFiles/topAdmin.css'
import VerticalChart from './VerticalChart';
import AreaChart from './AreaChart';
import { DonughtChart } from './DonughtChart';
import { dataDonoughtChart } from './DonughtChart';
import { dataVerticalChart } from './VerticalChart';
import { dataAreaChart } from './AreaChart';
import { Fade } from 'react-reveal';
import Combobox from "react-widgets/Combobox";


export default function Statistics() {
    let dd = [1000, 500, 345, 899, 939, 456, 120, 345, 125, 100, 200, 300];
    dataAreaChart.datasets[0].data = dd;
    let [eventsCounter, setEventsCounter] = useState(0);
    let [jobsCounter, setJobsCounter] = useState(0);
    let [scholarshipsCounter, setScholarshipsCounter] = useState(0);
    let [orgConter, setOrgCounter] = useState(0);
    let [memCounter, setMemCounter] = useState(0);
    let [uniCounter, setUniCounter] = useState(0);

    async function getJobsOfOrg(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/getAllJobs/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                // let jobsJson = json.jobs;
                // jobs = jobsJson;
                // setJobs(jobs);
            });
    }


    useEffect(() => {

    }, [])

    return (
        <>
            <div className='outlet ms-auto'>
                <div className='chartsContainer'>
                    <div className="pieChart">
                        <PieChart arrayAreaChart={dataAreaChart} />
                    </div>
                    <div className='chartExp'>
                        <h3><span className='span-style'><b>Alumni</b></span> Participants</h3>
                        <p className='mt-4 paraa'>
                            The website contains three categories of participants from different countries which they are
                            organizations, universities, and memberships. And this chart will show you the count of these categories.
                            Each one of them introduce different services, and  you can show the statistics of these activites in the next
                            chart.
                        </p>
                    </div>
                </div>


                <div className='chartsContainer'>
                    <div className='chartExp2'>
                        <h3><span className='span-style'><b>Alumni</b></span> Activities</h3>
                        <p className='mt-4 paraa'>
                            This chart will show you the statistics of all activites which they are represents events, jobs,
                            scholarships which they done by our universities, organization, and memberships. You have to know that
                            universites offer scholarships and events, and the organizations make events and offer jobs, and the memberships
                            make events and offer jobs.
                        </p>
                    </div>
                    <div className="pieChart2">
                        <DonughtChart />

                    </div>

                </div>

                <div className='chartsContainer'>
                    <div className="pieChart">
                        <VerticalChart />

                    </div>
                    <div className='chartExp'>
                        <h3><span className='span-style'><b>Alumni</b></span> Jobs</h3>
                        <p className='mt-4 paraa'>
                            This chart will show you the count of the job according to selected year, so select a year, and you will
                            show the counts of the jobs in selected year at all months.
                        </p>
                        <div className='pt-4'>
                            <Combobox onChange={(e) => {
                                // setJobType(e);
                            }} defaultValue="2023" data={["2017", "2018", "2019", "2020", "2021", "2022", "2023"]} />
                        </div>

                    </div>
                </div>

                <div className='chartsContainer'>
                    <div className='chartExp2'>
                        <h3><span className='span-style'><b>Alumni</b></span> Events</h3>
                        <p className='mt-4 paraa'>
                            This chart will show you the count of the events according to selected year, so select a year, and you will
                            show the counts of the events in selected year at all months.
                        </p>
                        <div className='pt-4'>
                            <Combobox onChange={(e) => {
                                // setJobType(e);
                            }} defaultValue="2023" data={["2017", "2018", "2019", "2020", "2021", "2022", "2023"]} />
                        </div>
                    </div>
                    <div className="pieChart2">
                        <AreaChart />

                    </div>

                </div>

                {/* <Fade delay={700}>
                        <div className="pieChart">
                            <VerticalChart />
                        </div>
                    </Fade>
                    <Fade delay={1400}>
                        <div className="areaChart">
                            <AreaChart />
                        </div>
                    </Fade>
                    <Fade delay={2100}>
                        <div className="donoughtChart">
                            <DonughtChart />
                        </div>
                    </Fade> */}

            </div>
        </>
    )
}
