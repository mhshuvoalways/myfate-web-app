import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextAnimation from "../TextAnimation";
import Client1 from "@/public/testimonials/client1.jpeg";
import Client2 from "@/public/testimonials/client2.jpeg";
import Client3 from "@/public/testimonials/client3.jpeg";
import Client4 from "@/public/testimonials/client4.jpeg";
import Client5 from "@/public/testimonials/client5.jpeg";
import Client6 from "@/public/testimonials/client6.jpeg";

const index = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 20000,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-32">
      <div className="mycontainer mb-20">
        <TextAnimation
          letters={"Love for Merge"}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
      </div>
      <Slider {...settings} className="mySlider">
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client1}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client2}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client3}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client4}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client5}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client6}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client1}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client2}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client3}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client4}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client5}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-3xl p-6">
          <p>
            Merge should make you and your end users’ lives easier: less work in
            building multiple integrations, real-time data syncing, and accurate
            data.
          </p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={Client6}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">Harrison Krat</p>
              <p className="opacity-70">Welcome Engineering Manager</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default index;
