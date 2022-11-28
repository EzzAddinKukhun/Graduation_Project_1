import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

export default function ScholarOverview() {
  return (
    <div className="outlet w-100 " >
      <Fade delay={200}>
      <div className="container">
        <div className="skills container mb-4 ">
          <h2 className='mb-2 p-3'><b><span className='span-style '>Overview</span></b></h2>
          <p id="aboutPara">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores blanditiis vero cum aperiam ea, totam similique quis distinctio! Repudiandae commodi modi ullam voluptatibus aut quia asperiores eveniet, dicta eum repellat doloribus officia! Non atque pariatur alias error illo eaque, doloribus voluptate provident placeat natus eligendi. Ut enim soluta quos earum voluptatum, debitis doloremque. Dolores ducimus cumque quisquam odio quod veritatis, odit vero cupiditate enim, error quas quasi ipsa dolorum veniam consequatur beatae expedita ullam quos velit? Beatae molestiae totam itaque excepturi tenetur accusantium vero repellendus, sunt, nihil aliquam quibusdam voluptas earum omnis! Enim, ratione. Aspernatur iusto alias laboriosam nostrum perspiciatis.
          </p>
        </div>
        <div className='next-btn-overview d-flex justify-content-end'>
          <Link to="ScholarReq">Next</Link>

        </div>

      </div>
      </Fade>
    </div>
  )
}
