export default function Skills() {
    return(
        <section id="skills">
        <div className={"min-h-screen container text-2xl text-white p-5"}>
            <p className="pre-sub-heading text-5xl text-center">Skills</p>
            <div className="container mx-auto">
            <div className="skills-icons">
                <div className="row">
                <div className="md:columns-6 text-6xl">
                    <i class="fa-brands fa-html5" style={{color: '#dd4b25'}}></i>
                <i class="fa-brands fa-css3" style={{color: '#3594cf'}}></i>
                <i class="fa-brands fa-bootstrap" style={{color: '#7910f2'}}></i>
                <i class="fa-brands fa-square-js" style={{color: '#f9dc43'}}></i>
                <i class="fa-brands fa-vuejs" style={{color: '#3fb27f'}}></i></div>
                </div>
            </div>
            <div className="skills-icons">
                <div className="row">
                <div className="md:columns-6 text-6xl">
                <i class="fa-brands fa-react" style={{color: '#5ed3f3' }}></i>
                <i class="fa-brands fa-node-js" style={{color: '#72b158'}}></i>
                <i class="fa-brands fa-wordpress" style={{backgroundColor: '#32373c'}}></i>
                <i class="fa-brands fa-elementor" style={{color: '#fee3f9'}}></i>
                <i class="fa-brands fa-php" style={{color: '#7377ad'}}></i>
                <i class="fa-brands fa-git" style={{color: '#e84e31'}}></i></div>
                </div>
            </div>
            </div>
            </div>
    </section>
    )
}