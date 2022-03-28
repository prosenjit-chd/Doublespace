import React, { useState } from 'react'
import './Projects.css'
import { useEffect } from 'react';
import Project from '../Project/Project';


function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./projectspartha.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div className="container-fluid projects">
            <div className="cover">
                <div className="cover-note">
                    <h1>Welcome to Doublespace</h1>
                    <h4>Lets see our some fafous projects</h4>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-2 g-4 ps-2">
                        {
                            projects.map((project, ind) => {
                                return <Project key={ind} id={project.id} imgsrc={project.coverphoto} title={project.title} address={project.address} />
                            })
                        }
                    </div>
                </div>
                <div className="project-sidebar col-lg-3">
                    <input class="form-control mb-5" type="search" placeholder="Search" aria-label="Search" />
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">An active item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
