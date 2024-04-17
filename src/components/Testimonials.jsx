import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function Testimonials() {
    return(
        <section id="testimonials">
        <div className={"min-h-screen container text-2xl text-white p-5"}>
            <p className="pre-sub-heading text-5xl text-center">Testimonials</p>
            <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={10}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={3}>I am the fourth Slide.</Slide>
          <Slide index={4}>I am the fifth Slide.</Slide>
          <Slide index={5}>I am the sixth Slide.</Slide>
          <Slide index={6}>I am the seventh Slide.</Slide>
          <Slide index={7}>I am the eighth Slide.</Slide>
          <Slide index={8}>I am the nineth Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
</div>
    </section>
    )
}