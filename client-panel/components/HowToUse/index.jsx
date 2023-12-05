const steps = [
  {
    description:
      "Full report: A complete overview of your life, offering insights into everything",
    image:
      "https://res.cloudinary.com/catlog/image/upload/v1670791956/front-pages/mockups/store-link-setup-complete.webp",
  },
  {
    description:
      "Daily Report: Daily updates providing guidance to align daily actions with your long-term destiny",
    image:
      "https://res.cloudinary.com/catlog/image/upload/v1670792011/front-pages/mockups/customer-initiates-conversation.webp",
  },
  {
    description:
      "Love: Detailed analysis of your romantic relationships, focusing on compatibility and deeper connections.",
    image:
      "https://res.cloudinary.com/catlog/image/upload/v1670791986/front-pages/mockups/selection-made-on-store.webp",
  },
  {
    description:
      "Finance: Strategic financial advice for wealth management, and long-term financial security",
    image:
      "https://res.cloudinary.com/catlog/image/upload/v1670792029/front-pages/mockups/customer-sends-order.webp",
  },
];

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cx from "classnames";
import useScreenSize from "@/hooks/useScreenSize";
import LazyImage from "../Utils/LazyImage";
import CircularProgress from "./CircularProgress";
import TextAnimation from "@/components/Utils/TextAnimation";

const HowItWorks = () => {
  const { screen } = useScreenSize();
  const [animProgress, setAnimProgress] = useState(0);
  const stepsCount = steps.length;

  useEffect(() => {
    const stepsWrapper = document.querySelector(".steps-wrapper");
    const steps = document.querySelectorAll(".steps li");

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stepsWrapper,
        pin: true,
        start: "top top",
        pinSpacing: true,
        scrub: true,
        end: "185% top",
        snap: 1 / stepsCount,
        anticipatePin: 0.1,
      },
      onUpdate: () => {
        const progress = tl.progress();
        setAnimProgress(progress);
      },
    });

    steps.forEach((step) => {
      tl.to(step, {
        duration: 3,
      });
    });

    return () => {
      tl.kill();
    };
  }, [stepsCount]);

  const activeIndex = Math.max(
    Math.floor((animProgress - 0.01) * stepsCount),
    0
  );
  const isActive = (index) =>
    animProgress > 0 &&
    Math.floor((animProgress - 0.01) * stepsCount) === index;
  const isPast = (index) =>
    index < Math.floor((animProgress - 0.01) * stepsCount);

  const getSizedImage = (image, sizes, screen) => {
    const size = sizes[screen] ?? sizes?.default;
    const sizedUrl = image.replace("/upload/", `/upload/c_scale,${size}/`);
    return sizedUrl;
  };

  return (
    <>
      <div>
        <div className="pin-spacer h-[2000px] sm:h-[2485px] md:h-[2085px] lg:h-[2285px] pt-[100px]">
          <section className="body-padding section-spacing steps-wrapper">
            <div className="mycontainer">
              <TextAnimation
                letters={[
                  {
                    letter: `What`,
                    delay: "0",
                  },
                  {
                    letter: `you`,
                    delay: "0.20",
                  },
                  {
                    letter: `get`,
                    delay: "0.40",
                  },
                  {
                    letter: `with`,
                    delay: "0.50",
                  },
                ]}
                className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
              />
              <TextAnimation
                letters={[
                  {
                    letter: `Myfates`,
                    delay: "0.60",
                  },
                  {
                    letter: `.com`,
                    delay: "0.70",
                  },
                ]}
                className={
                  "text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue mt-0 md:mt-4"
                }
              />
              <div className="w-full grid md:grid-cols-[47%,53%] lg:grid-cols-[51%,49%] xl:grid-cols-[53%,47%] mt-20">
                <div className="col-span-1 w-full md:pr-3 mb-8 md:mb-0 relative">
                  <div
                    className="progress w-1 bg-[#EF940F] absolute left-0 top-0 z-10 steps-progress"
                    style={{ height: `${animProgress * 100}%` }}
                  ></div>
                  <ul className="flex flex-col items-start md:max-w-[380px] lg:max-w-[410px] xl:max-w-[480px] relative overflow-hidden steps">
                    {steps.map((step, index) => (
                      <li
                        className={cx(
                          `px-2.5 py-3.75 sm:px-3.75 sm:py-4 xl:px-5 lg:py-4.5 border-l-4 border-grey-fields-100 md:!top-0 md:!relative hiw-step`,
                          {
                            past: isPast(index),
                            active: isActive(index),
                            next: !isPast(index) && !isActive(index),
                          }
                        )}
                        key={index}
                      >
                        <figure
                          className={cx(
                            "w-8 h-8 sm:h-10 sm:w-10 rounded-full bg-grey-fields-200 font-display text-sm sm:text-base font-black flex items-center justify-center transition-all ease-out duration-300",
                            {
                              "text-grey-muted": !isActive(index),
                              "text-page1": isActive(index),
                            }
                          )}
                        >
                          0{index + 1}
                        </figure>
                        <p
                          className={cx(
                            "mt-3.75 text-1sm sm:text-base md:text-1sm lg:text-base xl:text-lg font-medium !leading-tight transition-all ease-out duration-300",
                            {
                              "text-dark": !isActive(index),
                              "text-primary-900": isActive(index),
                            }
                          )}
                        >
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1 w-full bg-page-pastel min-w-0 rounded-3xl relative overflow-hidden pt-[115%] sm:pt-[85%] md:pt-0">
                  <div className="flex items-center absolute top-5 right-5">
                    <div className="text-page">
                      <CircularProgress
                        progress={animProgress}
                        baseColor="#FFFFFF"
                        width={24}
                        outline={4}
                      />
                    </div>
                    <span className="text-black font-bold text-sm inline-block ml-1.25 w-6">
                      {Math.floor((animProgress - 0.01) * stepsCount) + 1}/
                      {stepsCount}
                    </span>
                  </div>
                  {steps.map((step, index) => (
                    <div key={index}>
                      {activeIndex === index && (
                        <figure
                          className="w-[65%] sm:w-[50%] md:w-[68%] lg:w-[65%] xl:w-[57%] absolute left-1/2 transform -translate-x-1/2 top-[12.5%] story-image-appear mt-5 sm:mt-0"
                          style={{
                            "--from": step?.mockupConf?.from ?? "10%",
                            "--to": step?.mockupConf?.to ?? "0",
                          }}
                        >
                          <LazyImage
                            src={getSizedImage(
                              step.image,
                              { xs: "w_600", default: "w_700" },
                              screen
                            )}
                            alt={step.description}
                            showLoader={false}
                            className="w-full"
                          />
                        </figure>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
