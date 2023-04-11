import React from 'react'
import '../all.css'
import planet from '../assets/png/ee249d4b71bb74a98de684dd3b2e3b40.png';
type Props = {}

export default function Planet({}: Props) {
  return (
    <div>
        <div className="planet__container">
                <div className="planet__container_2">
                    <div className="planet__container_3">
                        <div className="planet__container_4">
                            <div className="planet__container_5">
                                <div className="planet__container_img">
                                    <img src={planet} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}