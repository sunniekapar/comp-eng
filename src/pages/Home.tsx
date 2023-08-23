import { Footer, Header, HeroGridSection, Navbar } from "@/layouts";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className="container">
      <Navbar />
      <Header />
      <HeroGridSection />
      <Footer />
    </main>
  );
};

export default Home;
