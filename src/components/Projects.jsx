import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Moved Projects array outside the component
const Projects = [
    {id: 0, category: 'j', name: 'React Calculator', projectIcon: <i class="fa-brands fa-react" style={{color: "#66dbfb"}}></i>, description: 'This react calculator was a project in learning react.', link: 'https://fatimas-react-calculator.netlify.app/', github: 'https://github.com/fatimagalant/react-calculator' },
    {id: 1, category: 'j', name: 'Vue Portfolio', projectIcon: <i class="fa-brands fa-vuejs" style={{color: "#47ba87"}}></i>, description: 'This is a Vue portfolio I created to showcase my skills, experience and projects.', link: 'https://vue-portfolio-abd45.firebaseapp.com', github: 'https://github.com/fatimagalant/Vue-Portfolio' },
    {id: 2, category: 'j', name: 'Vuetify To-Do App', projectIcon: <i class="fa-brands fa-vuejs" style={{color: "#47ba87"}}></i>, description: 'This to-do app project was created using Vuetify.', link: 'https://vue-to-doapp.netlify.app/', github: 'https://github.com/fatimagalant/vuetify-todo' },
    {id: 3, category: 'j', name: 'The Aromary', projectIcon: <i class="fa-brands fa-vuejs" style={{color: "#47ba87"}}></i>, description: 'This Capstone Project was to showcase all our honed skills in one project.', link: 'https://thearomary.netlify.app/', github: 'https://github.com/fatimagalant/capstone-frontend' },
    {id: 4, category: 'j', name: 'Ary Gallery', projectIcon: <i class="fa-brands fa-vuejs" style={{color: "#47ba87"}}></i>, description: 'This was a group project that was created by 3 other group members includig myself. ', link: 'https://leschevresdigitalartgallery.netlify.app/', github: 'https://github.com/fatimagalant/art-gallery' },
    {id: 5, category: 'j', name: 'Golden Crown Property Listings', projectIcon: <i class="fa-brands fa-js" style={{color: "#f7e11f"}}></i>, description: 'This project was given to us to challenge our javascript skills and it  was an amazing opportunity to really put the skills that I have learnt to use.', link: 'https://goldencrownproperties.netlify.app/', github: 'https://github.com/fatimagalant/propertylisting' },
    {id: 6, category: 'j', name: 'BMI Calculator', projectIcon: <i class="fa-brands fa-js" style={{color: "#f7e11f"}}></i>, description: 'This BMI Calculator was created using html for structure, css for styling and javascript for functionality.', link: 'https://bmicalculatorfg.netlify.app/', github: 'https://github.com/fatimagalant/bmi-calculator' },
    {id: 7, category: 'j', name: 'Javascipt Flexbox Calculator', projectIcon: <i class="fa-brands fa-js" style={{color: "#f7e11f"}}></i>, description: 'When I had just learnt html and was introduced to css flexbox, I created the structure and styling using html and css. Later I came back and added functionality using javascript.', link: 'https://flexboxcalculator.netlify.app/', github: 'https://github.com/fatimagalant/calculator' },
    {id: 8, category: 'j', name: 'Temperature Converter', projectIcon: <i class="fa-brands fa-js" style={{color: "#f7e11f"}}></i>, description: 'This was one of the mini javascript projects I created to better my skills and continue practicing.', link: 'https://temperatureconverterfg.netlify.app/', github: 'https://github.com/fatimagalant/temperature-converter' },
];

// Renamed function to start with uppercase (convention for React components)
export default function PortfolioProjects() {
    // State for storing projects
    const [projects] = useState(Projects);

    return (
        <section id="projects" className="bg-[#0e0e11]">
            <div className={"min-h-screen container text-2xl text-white p-5 flex-wrap"}>
                <p className="pre-sub-heading text-5xl text-center pt-20 pb-20">Projects</p>  
                {/* Display the list of projects */}
                <List projects={projects} />
            </div>
        </section>
    );
}

// List component to render the projects
function List({ projects }) {
    return (
        <div className="grid grid-cols-3 gap-4 justify-center ml-20 flex-wrap">
            {projects.map(project => (
                <div key={project.id} className="max-w-sm bg-white border-1 border-white border-gray-900 rounded-lg shadow bg-gradient-to-r from-slate-800 from-30% via-indigo-900 to-indigo-700 dark:border-gray-900 flex-wrap">
                    <div className='flex justify-center rounded-full p-9 text-5xl'>{project.projectIcon}</div>
                    <div className="p-5">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">{project.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-center">{project.description}</p>
                        <div className="flex justify-center space-x-4 pt-5 pb-5">
                       <a href={project.link} target='_blank'>
                       <button className="rounded-full border-white bg-transparent hover:bg-black px-2 py-2" text="Project Link" url={project.link}><i class="fa-solid fa-link"></i></button>
                        </a>
                        <a href={project.github} target='_blank'>
                        <button className='rounded-full bg-transparent hover:bg-black px-3 py-2' text="Github" url={project.github}><i class="fa-brands fa-github"></i></button>
                        </a>
                        </div>  
                    </div>
                </div>
            ))}
        </div>
    );
}





