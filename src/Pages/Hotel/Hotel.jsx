import React, { useState } from "react";
import { Navbar } from "../../Components/navbar/Navbar";
import { Header } from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import "./Hotel.scss";
import { MailList } from "../../Components/MailList/MailList";
import { Footer } from "../../Components/Footer/Footer";
export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (i) => {
    let newSlideNumber;
    if (i === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };
  const photos = [
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/18/24/bb/cf/royal.jpg",
    },
    {
      src: "https://content.tui.co.uk/adamtui/2019_6/6_15/d2d2849a-4976-4931-9e79-aa640105f894/ACC_058560_HAK_49WebOriginalCompressed.jpg?i10c=img.resize(width:658);img.crop(width:658%2Cheight:370)",
    },
    { src: "https://www.royalhalkidiki.gr/images/Demo/elements/gallery6.jpg" },
    {
      src: "https://assets.onthebeach.co.uk/m/466f37167b2ec80a/Medium-hotelimages-royal-hotel-3125052-2",
    },
    { src: "https://www.royalhalkidiki.gr/images/Demo/elements/gallery91.jpg" },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/bc/68/2a/enorme-lifestyle-beach.jpg?w=1200&h=-1&s=1",
    },
  ];
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer flex justify-center flex-wrap mt-5">
        {open && (
          <div className="slider sticky top-0 left-0">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close absolute top-5 right-5 text-3xl text-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow m-5 text-4xl text-gray-200 cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper flex w-full h-full justify-center items-center">
              <img src={photos[slideNumber].src} alt="" className="sliderImg w-full h-full object-cover" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow m-5 text-4xl text-gray-200 cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper w-full flex relative">
          <button className="bookNow absolute top-2 right-0 px-4 font-bold rounded-md py-2 bg-themeblue text-white">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle text-2xl font-bold mt-12 lg:mt-0">Grand Hotel</h1>
          <div className="hotelAddress text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this poperty and get a free airport taxi
          </span>
          <div className="hotelImages flex flex-wrap justify-between gap-y-1">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg w-full object-cover h-full"
                  onClick={() => handleOpen(index)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between gap-5 mt-5">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <div className="hotelDesc text-sm mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident iusto illo quod eveniet corporis eligendi laboriosam
                totam sint atque debitis quae ducimus aperiam ex quidem
                excepturi illum nam magnam fuga, eaque voluptatem amet est
                blanditiis numquam! Odio impedit quod debitis perspiciatis
                nobis, eius ipsam quasi illum expedita at ipsum quia nostrum
                nemo eum deserunt. Ratione beatae illum recusandae reiciendis?
                Saepe ut quasi, ad dolorem quas minima doloribus dignissimos
                officia aliquid rem tempora soluta molestias? Dolor quasi,
                possimus quisquam ipsam ipsa sapiente blanditiis sit cumque cum
                voluptatum quas quibusdam, mollitia distinctio.
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span className="text-sm">
                Located in the real heart of krakow, this poperty has an
                Excellent score of 9.8!
              </span>
              <h2>
                <b>$934</b> (9 nights)
              </h2>
              <button className="bg-sky-700 text-white p-2 rounded-md">
                Reserve Or Book Now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  );
};
