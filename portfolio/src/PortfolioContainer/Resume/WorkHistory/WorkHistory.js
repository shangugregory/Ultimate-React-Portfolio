import React, { useState } from 'react'
import WorkList from './WorkList.js'
import './WorkHistory.css'

export default function WorkHistory() {
  const [work, setWork] = useState([
    {
      company: "ICT AUTHORITY",
      position: "SYSTEM ADMINISTRATOR",
      year: "2022 - 2023",
    },
    {
      company: "ONLINE SELF EMPLOYED (FREELANCING)",
      position: "DEVELOPER AND A CONSULTANT",
      year: "2020 - 2023",
    }
    ])
  return (
    
    <div>
      <WorkList Work={work}/>
    </div>
  )
}
