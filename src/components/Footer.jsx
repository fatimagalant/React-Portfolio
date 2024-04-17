export default function Footer() {
    return(
        <section id="footer" className="bg-[#0e0e11]">
            <div className="text-white border-2">
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