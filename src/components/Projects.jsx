import React, { useState } from 'react';

// Moved Projects array outside the component
const Projects = [
    {id: 0, category: 'j', name: 'React Calculator', imgURL: 'https://i.postimg.cc/Rh0wrYBN/kelly-sikkema-3-Tc-5-LROr-M-unsplash.jpg', description: 'This react calculator was a project in learning react.', link: 'https://fatimas-react-calculator.netlify.app/', github: 'https://github.com/fatimagalant/react-calculator' },
    {id: 1, category: 'j', name: 'Vue Portfolio', imgURL: 'https://i.postimg.cc/3JcFh3W7/thought-catalog-505eect-W54k-unsplash.jpg', description: 'This is a Vue portfolio I created to showcase my skills, experience and projects.', link: 'https://vue-portfolio-abd45.firebaseapp.com', github: 'https://github.com/fatimagalant/Vue-Portfolio' },
    {id: 2, category: 'j', name: 'Vuetify To-Do App', imgURL: 'https://i.postimg.cc/g0f72vJz/thomas-bormans-pcps-Vsy-Fp-s-unsplash.jpg', description: 'This to-do app project was created using Vuetify.', link: 'https://vue-to-doapp.netlify.app/', github: 'https://github.com/fatimagalant/vuetify-todo' },
    {id: 3, category: 'j', name: 'The Aromary', imgURL: 'https://i.postimg.cc/sDcb4Qnm/carlos-muza-hpj-Sk-U2-UYSU-unsplash.jpg', description: 'This Capstone Project was to showcase all our honed skills in one project.', link: 'https://thearomary.netlify.app/', github: 'https://github.com/fatimagalant/capstone-frontend' },
    {id: 4, category: 'j', name: 'Ary Gallery', imgURL: 'https://i.postimg.cc/VkZT3yPb/artur-matosyan-4-YWUMaftmag-unsplash.jpg', description: 'This was a group project that was created by 3 other group members includig myself. ', link: 'https://leschevresdigitalartgallery.netlify.app/', github: 'https://github.com/fatimagalant/art-gallery' },
    {id: 5, category: 'j', name: 'Golden Crown Property Listings', imgURL: 'https://i.postimg.cc/RZZysSyB/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg', description: 'This project was given to us to challenge our javascript skills and it  was an amazing opportunity to really put the skills that I have learnt to use.', link: 'https://goldencrownproperties.netlify.app/', github: 'https://github.com/fatimagalant/propertylisting' },
    {id: 6, category: 'j', name: 'BMI Calculator', imgURL: 'https://i.postimg.cc/zBFkYWHP/kenny-eliason-5dd-H9-Y2acc-I-unsplash.jpg', description: 'This BMI Calculator was created using html for structure, css for styling and javascript for functionality.', link: 'https://bmicalculatorfg.netlify.app/', github: 'https://github.com/fatimagalant/bmi-calculator' },
    {id: 7, category: 'j', name: 'Javascipt Flexbox Calculator', imgURL: 'https://i.postimg.cc/B60CzNbK/charlesdeluvio-Glavt-G-umz-E-unsplash.jpg', description: 'When I had just learnt html and was introduced to css flexbox, I created the structure and styling using html and css. Later I came back and added functionality using javascript.', link: 'https://flexboxcalculator.netlify.app/', github: 'https://github.com/fatimagalant/calculator' },
    {id: 8, category: 'j', name: 'JavaScript To-Do List', imgURL: 'https://i.postimg.cc/YS16QgRq/annie-spratt-v-YWdj-UQesms-unsplash.jpg', description: 'After just learning javascript, I was tasked to create a to do list.', link: 'https://todolistfg.netlify.app/', github: 'https://github.com/fatimagalant/to-do-list' },
    {id: 9, category: 'j', name: 'Temperature Converter', imgURL: 'https://i.postimg.cc/902NGCZs/anton-SZ1-DDw-CPqk-E-unsplash.jpg', description: 'This was one of the mini javascript projects I created to better my skills and continue practicing.', link: 'https://temperatureconverterfg.netlify.app/', github: 'https://github.com/fatimagalant/temperature-converter' },
];

// Renamed function to start with uppercase (convention for React components)
export default function PortfolioProjects() {
    // State for storing projects
    const [projects] = useState(Projects);

    return (
        <section id="projects">
            <div className={"min-h-screen container text-2xl text-white p-5"}>
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
        <div>
            {projects.map(project => (
                <div key={project.id}>
              <div className="grid-row"> 
                <div className="grid gap-4 justify-center p-10">    
<a href={project.link} class="flex flex-col items-center bg-white border  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-700" target="_blank" rel='noreferrer'>
    <img src={project.imgURL} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" alt={project.name} />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
        <div className='social-icons justify-center'>
            <a href={project.link} target="_blank" rel="noreferrer"><i class="fa-solid fa-link text=3xl"></i></a>
            <a href={project.gtihub} target="_blank" rel="noreferrer"><i class="fa-brands fa-github text-3xl"></i></a>
        </div>
    </div>
</a>
</div>
</div>
    </div>
            ))}
        </div>
    );
}
