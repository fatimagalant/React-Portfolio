export default function About() {
    return(
        <section id="about" className="bg-no-repeat bg-cover object-contain" style={{ backgroundImage: "url(" + "https://i.postimg.cc/rF8TF6vQ/bg1-dark-flipped.png" +")"}}>
        <div className="min-h-screen container text-2xl text-white p-5">
            <p className="pre-sub-heading text-5xl text-center">About</p>
            <div className={"container mx-auto"}>
                <div className="columns-2">
<img src="https://i.postimg.cc/DycswKfs/Copy-of-Fatima-1-1-removebg-preview.png" alt="Fatima Galant" />
<h3 className="p-5"> Highly motivated and dedicated web developer with a strong passion for continuous learning and staying up-to-date with the latest industry trends. 
Proficient in a wide range of in-demand skills, including HTML5, CSS3, Bootstrap, JavaScript, Vue.js, MySQL, Node.js, Express.js, and WordPress using Elementor. 
Currently expanding expertise in PHP, React, Tailwind CSS, SASS, LESS, and Next.js. 
Committed to creating responsive and accessible web applications that showcase creativity and innovation. 
Adept at leveraging various technologies to build dynamic and engaging user experiences.
 Seeking opportunities to contribute to challenging projects and build a diverse portfolio of impressive web applications. </h3>
                </div>
<p className={"align-end"}></p>
            </div>
            </div>  
            <div className="social-icons">
                <div className="row">
                    <div className="col"><i class="fa-brands fa-linkedin"></i></div>
                    <div className="col"><i class="fa-brands fa-github"></i></div>
                    <div className="col"><i class="fa-brands fa-codepen"></i></div>
                </div>
                <div className="row">
                    <p>You can reach me via:</p>
                    <div className="col">
                      <p>Email:</p>
                        </div>
                    <div className="col">
                    <a href="mailto:name@email.com"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    <div className="col">
                       <p>Phone: </p>
                        </div>
                    <div className="col">
                    <a href="tel:+44-785-7895"><i class="fa-solid fa-phone"></i></a>
                        </div>
                </div>
            </div>
    </section>
    )
}