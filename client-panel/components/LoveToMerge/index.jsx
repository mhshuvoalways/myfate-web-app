import TextAnimation from "../Utils/TextAnimation";
import ContentScroller from "./ContentScroller";
import Profile from "@/public/testimonials/profile.png";

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
      pic: Profile,
    },
    {
      name: "Lucas Beckett",
      title: "Elementary Teacher",
      des: "Thankful for the comprehensive life report. It accurately assessed my nature, offering valuable, personalized guidance.",
      pic: Profile,
    },
    {
      name: "Mia Sterling",
      title: "Social Worker",
      des: "Deeply impressed by the thorough report on my life, covering career, love, and finance with remarkable insight and helpful advice",
      pic: Profile,
    },

    {
      name: "Ethan Underwood",
      title: "Nurse",
      des: "The report was a game-changer, providing detailed insights into my ideal partner. Invaluable guidance, truly thankful.",
      pic: Profile,
    },
    {
      name: "Chloe Easton",
      title: "Designer",
      des: "Grateful for the detailed and insightful report. It covered everything from career to relationships, offering practical, tailored advice",
      pic: Profile,
    },
    {
      name: "Jackson Thorne",
      title: "Manager",
      des: "Appreciative of the concise yet comprehensive report; insightful views on career. It's been a valuable tool for life planning",
      pic: Profile,
    },
    {
      name: "Amelia Bardot",
      title: "Student",
      des: "Thankful for the insightful life analysis covering crucial areas like relationships. It's a guiding light for my future decisions",
      pic: Profile,
    },
    {
      name: "Noah Callahan",
      title: "Post Graduate",
      des: "Impressed by the report's depth, offering clarity on love, and financial matters. It's a roadmap to a better, well-informed life.",
      pic: Profile,
    },
    {
      name: "Lily Morrow",
      title: "Marketer",
      des: "The report provided much-needed insight into my career, financial planning, and relationships. Grateful for such a well-rounded, practical life guide.",
      pic: Profile,
    },
    {
      name: "Gabriel Finch",
      title: "Software Engineer",
      des: "Deeply grateful for the detailed life report. It covered key aspects - with accuracy and actionable advice. Truly enlightening",
      pic: Profile,
    },
  ],
];

export default StoreLinksExtras;
