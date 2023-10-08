import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import WhyCatelog from "@/components/WhyCatelog";
import PromiseYou from "@/components/PromiseYou";
import Reviews from "@/components/Reviews";
import FormFound from "@/components/FormFound";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div>
      <Headers />
      <Categories />
      <Intro />
      <Testimonials />
      <WhyCatelog />
      <PromiseYou />
      <Reviews />
      <FormFound />
      <Pricing />
    </div>
  );
};

export default Index;
