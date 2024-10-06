import React from 'react'
import "./Page6.css"
import "../utility/syle.css"
import "../utility/utility.css"

import AchievementCard from "../cards/AchievementCard"

export default function Page6() {
  return (
    <div className="page6">
        <div className="pg-heading pg6-heading">
            Achievements
        </div>

        <div className="ach-container">
        <AchievementCard></AchievementCard>
        <AchievementCard></AchievementCard>
        <AchievementCard></AchievementCard>
        </div>
    </div>
  )
}
