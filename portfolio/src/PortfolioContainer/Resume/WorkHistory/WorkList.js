import React from 'react'
import "./WorkHistory.css"

export default function WorkList(props) {
  return (
    <>
    {props.Work.map((work, index)=>
    <div className="work-container">
      <ul>
        
        <div className="work-div1">
          <div>
            <li>
              <h1>{work.company} </h1>
            </li>
          </div>
          <div>
            <button className="btn highlighted-btn">{work.year}</button>
          </div>
        </div>
        <p className="work-desc">{work.position}</p>

      </ul>
    </div>
    )}
    </>
  )
}

