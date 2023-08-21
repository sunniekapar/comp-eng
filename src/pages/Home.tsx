import { Footer, Header, HeroGridSection } from "@/layouts";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="container">
      <Header />
      <HeroGridSection />
      <Footer />
    </main>
  );
};

export default Home;
