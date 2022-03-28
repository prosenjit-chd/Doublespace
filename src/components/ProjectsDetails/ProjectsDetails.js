import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BinocularsFill, GeoAltFill, HouseDoorFill, PersonFill } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import './ProjectsDetails.css'


function ProjectDetails() {
    // Use UseParam here 
    const { id } = useParams();
    const [project, setProject] = useState({});
    // let coverImg = '';
    // const [coverImg, setCoverImg] = useState([])
    // console.log(project);

    useEffect(() => {
        fetch("/projectspartha.json")
            .then(res => res.json())
            .then(data => handleProjectDetails(data))
    }, []);

    const handleProjectDetails = (data) => {
        // console.log(data);
        const findProject = data.find(p => p.id == id)
        // console.log(findProject);
        setProject(findProject);
        // console.log(project);
        // setCoverImg(findProject?.imgsrc)
        // console.log(coverImg)
    }

    return (
        <div className="container-fluid project-details">
            <div style={{ height: 500, backgroundImage: `url(${project.coverphoto})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', width: '100%' }}>

            </div>
            <div className="row mt-3">
                <div className="detail-bar col-lg-4 p-5 sticky-top">
                    <h2 style={{ color: "#42A5F5 " }} className="mb-4"> {project.title} </h2>
                    <h6 className="mb-3"><PersonFill /> <b>Client:</b> <span style={{ color: "#00095E" }}>{project.client}</span> </h6>
                    <h5 className="mb-3"><b>Total Area:</b> {project.flatSize} </h5>
                    <h6 className="mb-3"><GeoAltFill /> <span className="text-dark">{project.address}</span> </h6>
                    <div style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint accusantium, iusto omnis velit animi dignissimos quisquam fugiat corrupti, necessitatibus totam quia similique alias consectetur modi quo ratione cupiditate explicabo doloremque dicta officiis, doloribus sequi labore consequatur? Voluptas adipisci doloribus totam laudantium! Veritatis reiciendis dolorum illum provident minus dolorem debitis.</div>
                </div>
                <div className="detail-body col-lg-8 mt-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4 border border-2">
                        {
                            project?.imgsrc?.map((p, i) => <div class="col">
                                <div class="card">
                                    <img src={p} class="card-img-top" alt="..." />
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectDetails
