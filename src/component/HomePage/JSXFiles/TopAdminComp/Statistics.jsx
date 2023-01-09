import React from 'react';
import PieChart from './PieChart';
import '../../CSSFiles/topAdmin.css'
import VerticalChart from './VerticalChart';
import AreaChart from './AreaChart';
import { DonughtChart } from './DonughtChart';
import { dataDonoughtChart } from './DonughtChart';
import { dataVerticalChart } from './VerticalChart';
import { dataAreaChart } from './AreaChart';
import { Fade } from 'react-reveal';

export default function Statistics() {
    let dd = [1000, 500, 345, 899, 939, 456, 120, 345, 125, 100, 200, 300];
    dataAreaChart.datasets[0].data = dd;
    return (
        <>
            <div className='outlet ms-auto'>
                <div className='chartsContainer'>
                    <Fade>
                        <div className="pieChart">
                            <PieChart arrayAreaChart={dataAreaChart} />
                        </div>
                    </Fade>
                    <Fade delay={700}>
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
                    </Fade>
                </div>

            </div>
        </>
    )
}
