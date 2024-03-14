import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navigation() {
    return(
        <header className="bg-black md:sticky top-0 z-10 scroll-smooth">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="heading font-semibold title-font font-medium text-white mb-4 md:mb-0">
            <a href="#home" className="ml-3 text-base text-white">
             FG
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	active:violet-700 flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 font-medium text-white hover:text-gray hover:underline active:text-yellow-300">
              About
            </a>
            <a href="#skills" className="mr-5 font-medium text-white hover:text-gray hover:underline">
              Skills
            </a>
            <a href="#projects" className="mr-5 font-medium text-white hover:text-gray hover:underline">
             Projects
            </a>
            <a href="#resume" className="mr-5 font-medium text-white hover:text-gray hover:underline">
             Resume
            </a>
            {/* <a href="#testimonials" className="mr-5 font-medium text-white hover:text-gray">
              Testimonials
            </a> */}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-50 text-black border-0 py-2 px-4 focus:outline-none hover:bg-indigo-900 hover:text-white rounded-xl text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
    )
}