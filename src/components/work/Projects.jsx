import React, {useEffect, useState} from 'react'
import {projectsData} from "./Data.jsx";
import {projectsNav} from "./Data.jsx";
import ProjectsItems from "./ProjectsItems.jsx";

const Projects = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index)

    }

    return (
        <div>
                <div className="work__filter">
                    {projectsNav.map((item, index) => {
                        return <span onClick={(e) => {handleClick(e) } } className={`${active === index ? 'active-work' : ""} work__item`} key={index}>
                                {item.name}
                            </span>

                    })}
                </div>

                <div className="work__container container grid">
                    {projects.map((item) => {
                        return <ProjectsItems item={item} key={item.id}/>
                    })}
                </div>
        </div>
    )
}
export default Projects
