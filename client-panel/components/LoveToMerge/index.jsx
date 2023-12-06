import TextAnimation from "../Utils/TextAnimation";
import ContentScroller from "./ContentScroller";
import Client1 from "@/public/testimonials/client1.jpeg";
import Client2 from "@/public/testimonials/client2.jpeg";
import Client3 from "@/public/testimonials/client3.jpeg";
import Client4 from "@/public/testimonials/client4.jpeg";
import Client5 from "@/public/testimonials/client5.jpeg";
import Client6 from "@/public/testimonials/client6.jpeg";

const StoreLinksExtras = () => {
  return (
    <section className="body-padding body-y-padding">
      <div className="mycontainer">
        <TextAnimation
          letters={[
            {
              letter: "Love",
              delay: "0",
            },
            {
              letter: "to",
              delay: "0.20",
            },
            {
              letter: "Merge?",
              delay: "0.40",
            },
          ]}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
      </div>
      <div className="anim-fade-up mt-20" style={{ "--delay": "0.8s" }}>
        <ContentScroller list={extras} />
      </div>
    </section>
  );
};

const extras = [
  [
    {
      name: "Emmey lian",
      title: "Software Engineer",
      des: "I had three different appointments at Conceptions, and each time the staff was well informed, friendly, and kind. You could see they really care about their customers. There are no words to thank them enough",
      pic: Client1,
    },
    {
      name: "John doe",
      title: "Software Engineer",
      des: "Merge should make you and your end users’ lives easier: less work in building multiple integrations, real-time data syncing, and accurate data.",
      pic: Client2,
    },
    {
      name: "Nay nam",
      title: "Software Engineer",
      des: "We cannot praise him enough for the exceptional care we received throughout our fertility journey. Dr. Diarn and the entire team were attentive, and always available to address our concerns.",
      pic: Client3,
    },

    {
      name: "Rohan tyson",
      title: "Software Engineer",
      des: "Thank you so much for your kind words and for sharing your experience with MyFates. We are thrilled to hear that our team provided excellent service during your recent visit, leaving a strong impression. ",
      pic: Client4,
    },
    {
      name: "Gian jeson",
      title: "Designeer",
      des: "Merge should make you and your end users’ lives easier: less work in building multiple integrations, real-time data syncing, and accurate data.",
      pic: Client5,
    },
    {
      name: "Paul walker",
      title: "Product manager",
      des: "Merge should make you and your end users’ lives easier: less work in building multiple integrations, real-time data syncing, and accurate data.",
      pic: Client6,
    },
  ],
];

export default StoreLinksExtras;
