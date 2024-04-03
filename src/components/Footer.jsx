export default function Footer() {
    return(
        <section id="footer" className="bg-[#0e0e11]">
            <div className="text-white border-2">
                <div className="grid-rows-1">
                    <div className="grid grid-cols-3 justify-center p-5">
                        <div>
                            <a className="heading font-semibold title-font font-medium text-white mb-2 md:mb-0">
                                <a href="#home" className="ml-3 text-center text-white">FG</a>
                            </a>     
                        </div>
                        <div>
                            <h6 className="heading text-xl text-center">Quick Links</h6>
                            <ul className="text-center">
                                <li><a href="#about" className="mr-5 font-medium text-white hover:text-gray">About</a></li>
                                <li><a href="#skills" className="mr-5 font-medium text-white hover:text-gray">Skills</a></li>
                                <li><a href="#projects" className="mr-5 font-medium text-white hover:text-gray">Projects</a></li>
                                <li><a href="#resume" className="mr-5 font-medium text-white hover:text-gray">Resume</a></li>
                                <li><a href="#testimonials" className="mr-5 font-medium text-white hover:text-gray">Testimonials</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="heading text-xl text-center"><a href="#contact">Contact</a></h6>
                            <ul className="text-center">
                                <li><a href="tel:0662091181">Give me a call</a></li>
                                <li><a href="mailto:fatimagalant03@gmail.com">Email Me</a></li>
                            </ul>
                            </div>
                    </div>
                </div>
                <hr/>
                <div className="grid-rows-1 justify-center">
                <div className="grid grid-cols-2 p-2">
                    <p className="text-center">Copyright © 2024 All Rights Reserved</p>
                    <div className="socials text-3xl text-center">
                   <a href="https://github.com/fatimagalant" target="_blank"><i class="fa-brands fa-github mr-5"></i></a>
                    <a href="https://www.linkedin.com/in/fatimagalant/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}