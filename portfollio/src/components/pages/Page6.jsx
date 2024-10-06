import React from 'react'
import "./Page6.css"
import "../utility/syle.css"
import "../utility/utility.css"

import { achievement } from '../../data'
import AchievementCard from "../cards/AchievementCard"

export default function Page6() {
  return (
    <div className="page6">
        <div className="pg-heading pg6-heading">
            Achievements
        </div>

        <div className="ach-container">
          {achievement.map((item)=>{
            return(
              <AchievementCard achievement={item}></AchievementCard>
            )
          }
          )}
        </div>
    </div>
  )
}
