export default function Home() {
    return(
        <section id="home" className="min-h-screen place-content-center flex justify-center p-5 pt-20 bg-no-repeat bg-cover object-contain bg-fixed" style={{ backgroundImage: "url(" + "https://i.postimg.cc/JnJHwfds/bg1-dark.png" +")"}}>
   <div className="container text-white content-center p-20">
<h1 className="heading text-7xl text-bold flex justify-center object-center pt-20">Hi, I'm Fatima Galant</h1>
<h2 className="heading text-5xl flex  text-semibold justify-center">Software Developer</h2>
<div className="grid-rows-1 justify-center">
                <div className="grid grid-cols-1 p-2 justify-center"> 
                    <div className="socials text-5xl text-center">
                   <a href="https://github.com/fatimagalant" target="_blank" rel="noreferrer"><i class="fa-brands fa-github mr-5"></i></a>
                    <a href="https://www.linkedin.com/in/fatimagalant/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
        </div>
        </section>
    )
}