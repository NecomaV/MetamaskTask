import React from 'react'
import '../all.css'
import RoadStat from './RoadStat'
import Planet from './Planet'

type Props = {}

export default function Main({}: Props) {
  return (
    <div>
        <div className="container">
            <div className="content" >
                <p >Explore Your own planet</p>
                <p >In <span>our</span> New metaverse</p>
            </div>
            <div className="roadmap">
                <h3>ROADMAP STATS</h3>
                <RoadStat/>
                <RoadStat/>
                <RoadStat/>

            </div>
        </div>
        <div className="planet" >
            <Planet />
        </div>

        <div className="descr">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

    </div>
  )
}