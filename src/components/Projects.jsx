import React, {useState} from 'react';

const Projects = [
    {id: 0, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 1, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 2, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 3, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 4, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 5, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 6, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 7, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 8, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    {id: 9, category: '', name: '', imgURL: '', description: '', link: '', github: '' },
    
]
export default function portfolioProjects() {
    return(
        <section id="projects">
        <div className={"min-h-screen container text-2xl text-white p-5"}>
            <p className="pre-sub-heading text-5xl text-center">Projects</p>
            <div>
  <h2>Project Filter</h2>
  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>JavaScipt</li>
    <li>Vue</li>
    <li>React</li>
    <li>Python</li>
    <li>Java</li>
  </ul>
</div>
            </div>
    </section>
    )
}
 function List() { 
    const [Projects, setProjects] = useState(
    Projects
);
    }