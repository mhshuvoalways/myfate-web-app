import dynamic from "next/dynamic";
import TextAnimation from "../Utils/TextAnimation";
const ContentScroller = dynamic(() => import("./ContentScroller"), { ssr: true })

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
      label: "Custom store links",
      emoji: "🔗",
    },
    {
      label: "Automatic SEO",
      emoji: "🔎",
    },
    {
      label: "Manage multiple product options",
      emoji: "👠",
    },
    {
      label: "Upload multiple products at once",
      emoji: "📦",
    },

    {
      label: "Add multiple whatsapp numbers",
      emoji: "💬",
    },
    {
      label: "Create discounts",
      emoji: "🎁",
    },
    {
      label: "Create coupons",
      emoji: "🎟️",
    },
    {
      label: "Configure how customers see your products",
      emoji: "⚙️",
    },
  ],
  [
    {
      label: "Link your social media profiles",
      emoji: "🎈",
    },
    {
      label: "Set prices for locations you deliver to",
      emoji: "🚚",
    },
    {
      label: "Set opening & closing hours",
      emoji: "⏰",
    },
    {
      label: "Links to single products",
      emoji: "👖",
    },
    {
      label: "Manage multiple stores from one account",
      emoji: "🛒",
    },
    {
      label: "Organize your products into categories",
      emoji: "🗂",
    },
    {
      label: "Add multiple store managers",
      emoji: "🤵🏽",
    },
  ],
  [
    {
      label: "Multiple currencies - coming soon",
      emoji: "💸",
    },
    {
      label: "Facebook Pixel - Coming soon",
      emoji: "📈",
    },
    {
      label: "Import products from Instagram - Coming soon",
      emoji: "🎩",
    },
    {
      label: "Advanced store customizations - coming soon",
      emoji: "🏗",
    },
    {
      label: "Gifs & Videos for products - coming soon",
      emoji: "📹",
    },
    {
      label: "Verification Badges - coming soon",
      emoji: "❇️",
    },
    {
      label: "Checkout to twitter & Instagram - coming soon",
      emoji: "📥",
    },
  ],
];

export default StoreLinksExtras;
