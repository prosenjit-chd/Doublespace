import React from 'react'
import './Project.css'

import { Link } from "react-router-dom";

function Project({ id, imgsrc, title, address }) {
    return (
        <div className="col">
            <div className="card">
                <Link to={`/project/${id}`}>
                    <img src={imgsrc} class="card-img-top" alt="..."></img>
                    <div className="img-caption">
                        <p className="text-light">{title} <br /> <span>Location: {address}</span></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project;