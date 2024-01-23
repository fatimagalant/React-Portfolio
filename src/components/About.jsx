export default function About() {
    return(
        <section id="about" className="bg-[url'https://i.postimg.cc/Pq0vRXKG/bg2-dark.png']">
        <div className={"min-h-screen container text-2xl text-white p-5"}>
            <p className="pre-sub-heading text-5xl text-center">About</p>
            <div className={"container mx-auto"}>
                <div className="columns-2">
<img src="#" alt="efusbfuhseuifhse"></img>
<h2>test</h2>
                </div>
<p className={"align-end"}>another test</p>
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