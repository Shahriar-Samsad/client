import Carousel from "react-multi-carousel";

const Slider = () => {
  return (
    <div className="container mx-auto">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="relative">
          <img src="/am.jpg" className="w-full h-96" alt="loading..." />
          <div className="absolute text-black bottom-12 left-14">
            <div className="text-white ">
              <h1 className="text-5xl">this isdf</h1>
              <p className="text-2xl">thisidfsdf</p>
            </div>
            <button className="bg-black text-white p-5 font-bold rounded-lg">
              confirm item
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
