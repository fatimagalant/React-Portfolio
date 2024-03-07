import React, { useState } from 'react';

// Moved Projects array outside the component
const Projects = [
    {id: 0, category: 'j', name: 'React Calculator', imgURL: '', description: 'This react calculator was a project in learning react.', link: 'https://fatimas-react-calculator.netlify.app/', github: 'https://github.com/fatimagalant/react-calculator' },
    {id: 1, category: 'j', name: 'Vue Portfolio', imgURL: '', description: 'This is a Vue portfolio I created to showcase my skills, experience and projects.', link: 'https://vue-portfolio-abd45.firebaseapp.com/projects', github: 'https://github.com/fatimagalant/Vue-Portfolio' },
    {id: 2, category: 'j', name: 'Vuetify To-Do App', imgURL: '', description: 'This to-do app project was created using Vuetify.', link: 'https://vue-to-doapp.netlify.app/', github: 'https://github.com/fatimagalant/vuetify-todo' },
    {id: 3, category: 'j', name: 'The Aromary', imgURL: '', description: 'This Capstone Project was to showcase all our honed skills in one project.', link: 'https://thearomary.netlify.app/', github: 'https://github.com/fatimagalant/capstone-frontend' },
    {id: 4, category: 'j', name: 'Ary Gallery', imgURL: '', description: 'This was a group project that was created by 3 other group members includig myself. I contributed the contact page, artists page and created the idea, as well as the extensive research and extra information needed to make this project complete', link: 'https://leschevresdigitalartgallery.netlify.app/', github: 'https://github.com/fatimagalant/art-gallery' },
    {id: 5, category: 'j', name: 'Golden Crown Property Listings', imgURL: '', description: 'This project was given to us to challenge our javascript skills and it  was an amazing opportunity to really put the skills that I have learnt to use.', link: 'https://goldencrownproperties.netlify.app/', github: 'https://github.com/fatimagalant/propertylisting' },
    {id: 6, category: 'j', name: 'BMI Calculator', imgURL: '', description: 'This BMI Calculator was created using html for structure, css for styling and javascript for functionality.', link: 'https://bmicalculatorfg.netlify.app/', github: 'https://github.com/fatimagalant/bmi-calculator' },
    {id: 7, category: 'j', name: 'Javascipt Flexbox Calculator', imgURL: '', description: 'When I had just learnt html and was introduced to css flexbox, I created the structure and styling using html and css. Later I came back and added functionality using javascript.', link: 'https://flexboxcalculator.netlify.app/', github: 'https://github.com/fatimagalant/calculator' },
    {id: 8, category: 'j', name: 'JavaScript To-Do List', imgURL: '', description: 'After just learning javascript, I was tasked (lol) to create a to do list.', link: 'https://todolistfg.netlify.app/', github: 'https://github.com/fatimagalant/to-do-list' },
    {id: 9, category: 'j', name: 'Temperature Converter', imgURL: '', description: 'This was one of the mini javascript projects I created to better my skills and continue practicing.', link: 'https://temperatureconverterfg.netlify.app/', github: 'https://github.com/fatimagalant/temperature-converter' },
];

// Renamed function to start with uppercase (convention for React components)
export default function PortfolioProjects() {
    // State for storing projects
    const [projects, setProjects] = useState(Projects);

    return (
        <section id="projects">
            <div className={"min-h-screen container text-2xl text-white p-5"}>
                <p className="pre-sub-heading text-5xl text-center">Projects</p>  
                {/* Display the list of projects */}
                <List projects={projects} />
            </div>
        </section>
    );
}

// List component to render the projects
function List({ projects }) {
    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <div class="-mx-4 flex flex-wrap p-8">
    
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div class="mx-auto mb-7 inline-block"><svg width="53" height="61" viewBox="0 0 53 61" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="20.8433" y="19.3018" width="10.1675" height="12.201" fill="#ABA8F7"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M42.1119 5.91343C40.9499 4.62242 39.4875 3.95192 38.2383 4.04801C36.1465 4.20891 33.9414 5.92602 31.8695 8.63549C30.0459 11.0202 28.5417 13.8917 27.5307 16.2458C33.6951 16.5488 37.7115 15.7786 40.1926 14.5916C42.7088 13.3878 43.5948 11.7969 43.7449 10.3715C43.9049 8.85254 43.2637 7.19309 42.1119 5.91343ZM8.75274 16.6855C6.24093 15.1295 4.93328 12.9984 4.69026 10.691C4.42078 8.13252 5.49249 5.64717 7.08955 3.87282C8.6764 2.10982 10.9989 0.817106 13.4643 1.00675C16.9349 1.27372 19.8489 3.94064 22.0221 6.78264C23.4868 8.69803 24.7428 10.8606 25.7343 12.8643C26.7259 10.8606 27.9818 8.69803 29.4465 6.78264C31.6197 3.94064 34.5337 1.27372 38.0043 1.00675C40.4697 0.817106 42.7922 2.10982 44.3791 3.87282C45.9761 5.64717 47.0478 8.13252 46.7784 10.691C46.5353 12.9984 45.2277 15.1295 42.7159 16.6855H49.8822C51.286 16.6855 52.4241 17.8236 52.4241 19.2274V31.1348C52.4241 32.5386 51.286 33.6766 49.8822 33.6766H49.3122V58.6608C49.3122 59.9464 48.1845 60.9886 46.7933 60.9886H31.5363L31.5191 60.9887L31.502 60.9886H20.3521L20.3349 60.9887L20.3178 60.9886H5.0608C3.66963 60.9886 2.54187 59.9464 2.54187 58.6608L2.54187 33.6766C1.13804 33.6766 0 32.5386 0 31.1348V19.2274C0 17.8236 1.13803 16.6855 2.54187 16.6855H8.75274ZM33.0443 58.1952H46.2895V33.6766H33.0443V58.1952ZM33.0443 30.6264H49.3738V19.7358H33.0443V30.6264ZM29.994 19.7358V30.6264H21.8601V19.7358H29.994ZM29.994 33.6766V58.1952H21.8601V33.6766H29.994ZM18.8098 58.1952V33.6766H5.56459V58.1952H18.8098ZM18.8098 30.6264V19.7358H3.05024V30.6264H18.8098ZM13.2303 4.04801C11.9811 3.95192 10.5187 4.62242 9.35668 5.91343C8.20488 7.19309 7.56373 8.85254 7.72372 10.3715C7.87385 11.7969 8.7598 13.3878 11.276 14.5916C13.7571 15.7786 17.7735 16.5488 23.9379 16.2458C22.9269 13.8917 21.4227 11.0202 19.5991 8.63549C17.5272 5.92602 15.3221 4.20891 13.2303 4.04801Z"
                        fill="#6A64F1"></path>
                </svg></div>
            <div></div>
            <h3 class="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">{project.name}</h3>
           <p class="text-base font-medium text-body-color">{project.description}</p>
           <a href={project.link} class="text-base font-medium text-body-color" target='_blank'><i class="fa-solid fa-link"></i></a>
           <a href={project.github} class="text-base font-medium text-body-color" target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>
    </div>
    </div>
    </div>
            ))}
        </div>
    );
}
