import dynamic from "next/dynamic";
import TextAnimation from "../Utils/TextAnimation";
const ContentScroller = dynamic(() => import("./ContentScroller"), {
  ssr: true,
});

const StoreLinksExtras = () => {
  return (
    <section className="body-padding body-y-padding">
      <div className="mycontainer">
        <TextAnimation
          letters={[
            {
              letter: "Not",
              delay: "0",
            },
            {
              letter: "convinced",
              delay: "0.20",
            },
            {
              letter: "yet?",
              delay: "0.40",
            },
          ]}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
        <TextAnimation
          letters={[
            {
              letter: `There's more!`,
              delay: "0.60",
            },
          ]}
          className={
            "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue"
          }
        />
      </div>
      <div className="mt-20" style={{ "--delay": "0.8s" }}>
        <ContentScroller list={extras} />
      </div>
    </section>
  );
};

const extras = [
  [
    {
      label: "Inspire Innovation",
      emoji: "💡",
    },
    {
      label: "Foster Originality",
      emoji: "🌱",
    },
    {
      label: "Foster Endurance",
      emoji: "🏃🏻‍♂️",
    },
    {
      label: "Expand Self-awareness",
      emoji: "🔍",
    },

    {
      label: "Energy Harnessing",
      emoji: "🦾",
    },
    {
      label: "Boost Vitality",
      emoji: "🚀",
    },
    {
      label: "Enhance Power",
      emoji: "💪🏻",
    },
    {
      label: "Mood Enhancement",
      emoji: "😄",
    },
    {
      label: "Balance Emotionss",
      emoji: "😉",
    },
    {
      label: "Elevate State,",
      emoji: "🌟",
    },
    {
      label: "Focus Optimization",
      emoji: "🧑🏻‍💻",
    },
    {
      label: "Sharpen Concentration",
      emoji: "👁️‍🗨️",
    },
    {
      label: "Achieve Clarity",
      emoji: "🪄",
    },
    {
      label: "Spirit Nurturing",
      emoji: "👩‍👦",
    },
    {
      label: "Cultivate Essence",
      emoji: "🍼",
    },
  ],
  [
    {
      label: "Enrich Soul",
      emoji: "💎",
    },
    {
      label: "Insight Development",
      emoji: "📊",
    },
    {
      label: "Expand Understanding",
      emoji: "🧠",
    },
    {
      label: "Increase Perception",
      emoji: "🧐",
    },
    {
      label: "Decision Making",
      emoji: "🤝",
    },
    {
      label: "Improve Choices",
      emoji: "✅",
    },

    {
      label: "Refine Judgment",
      emoji: "🗳️",
    },
    {
      label: "Execution Strategy",
      emoji: "📈",
    },
    {
      label: "Streamline Implementation",
      emoji: "📖",
    },
    {
      label: "Drive Action",
      emoji: "🗣️",
    },
    {
      label: "Consistency Building",
      emoji: "📏",
    },
    {
      label: "Foster Regularity",
      emoji: "🏃🏻‍♀️",
    },
  ],
  [
    {
      label: "Maintain Stability",
      emoji: "💍",
    },
    {
      label: "Romance Cultivation",
      emoji: "❣️",
    },
    {
      label: "Ignite Love",
      emoji: "❤️‍🔥",
    },
    {
      label: "Spark Passion",
      emoji: "🔥",
    },
    {
      label: "Intimacy Deepening",
      emoji: "🧑‍❤️‍👩",
    },
    {
      label: "Strengthen Closeness",
      emoji: "🙌🏻",
    },
    {
      label: "Enhance Affection",
      emoji: "💌",
    },
    {
      label: "Connection Fostering",
      emoji: "🧵",
    },
    {
      label: "Create Bonds",
      emoji: "👨‍👩‍👧‍👦",
    },
    {
      label: "Establish Links",
      emoji: "🔗",
    },
    {
      label: "Destiny Shaping",
      emoji: "🔮",
    },
    {
      label: "Guide Fate",
      emoji: "🎩",
    },
    {
      label: "Influence Future",
      emoji: "📽️",
    },
  ],
];

export default StoreLinksExtras;
