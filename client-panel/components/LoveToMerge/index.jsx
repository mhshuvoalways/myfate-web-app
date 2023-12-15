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
              letter: "for",
              delay: "0.20",
            },
            {
              letter: "MyFates",
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
      name: "Emma Houghton",
      title: "Student",
      des: "Incredibly detailed report covering career; insightful and practical. Grateful for the clarity and direction it provided. Thank you!",
      pic: Client1,
    },
    {
      name: "Lucas Beckett",
      title: "Elementary Teacher",
      des: "Thankful for the comprehensive life report. It accurately assessed my nature, offering valuable, personalized guidance.",
      pic: Client2,
    },
    {
      name: "Mia Sterling",
      title: "Social Worker",
      des: "Deeply impressed by the thorough report on my life, covering career, love, and finance with remarkable insight and helpful advice",
      pic: Client3,
    },

    {
      name: "Ethan Underwood",
      title: "Nurse",
      des: "The report was a game-changer, providing detailed insights into my ideal partner. Invaluable guidance, truly thankful.",
      pic: Client4,
    },
    {
      name: "Chloe Easton",
      title: "Designer",
      des: "Grateful for the detailed and insightful report. It covered everything from career to relationships, offering practical, tailored advice",
      pic: Client5,
    },
    {
      name: "Jackson Thorne",
      title: "Manager",
      des: "Appreciative of the concise yet comprehensive report; insightful views on career. It's been a valuable tool for life planning",
      pic: Client6,
    },
    {
      name: "Amelia Bardot",
      title: "Student",
      des: "Thankful for the insightful life analysis covering crucial areas like relationships. It's a guiding light for my future decisions",
      pic: Client6,
    },
    {
      name: "Noah Callahan",
      title: "Post Graduate",
      des: "Impressed by the report's depth, offering clarity on love, and financial matters. It's a roadmap to a better, well-informed life.",
      pic: Client6,
    },
    {
      name: "Lily Morrow",
      title: "Marketer",
      des: "The report provided much-needed insight into my career, financial planning, and relationships. Grateful for such a well-rounded, practical life guide.",
      pic: Client6,
    },
    {
      name: "Gabriel Finch",
      title: "Software Engineer",
      des: "Deeply grateful for the detailed life report. It covered key aspects - with accuracy and actionable advice. Truly enlightening",
      pic: Client6,
    },
  ],
];

export default StoreLinksExtras;
