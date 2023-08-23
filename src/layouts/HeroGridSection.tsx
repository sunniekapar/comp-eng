import { BsCurrencyDollar, BsLaptop } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import {
  OverviewCard,
  BigNumberCard,
  InformationCard,
  TopicCard,
} from "../components/cards";

const HeroGridSection = () => {
  return (
    <section
      className="grid items-start justify-center gap-6 p-8 mx-auto rounded-lg lg:grid-cols-2 xl:grid-cols-3"
      id="HeroGridSection"
    >
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1}>
          <OverviewCard />
        </Fade>
      </div>
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1} delay={50}>
          <BigNumberCard
            number="$129,000"
            title="Average Salary"
            icon={<BsCurrencyDollar />}
            description="As a Computer Engineer in California"
          />
          <InformationCard
            icon={<BsLaptop />}
            title="What is Computer Engineering"
            description="Computer engineering is the field where people make computers do amazing things. They design both the physical parts inside computers and the programs that tell them what to do. It's like building and programming the machines that power our digital world."
          />
        </Fade>
      </div>
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1} delay={100}>
          <TopicCard
            title="Druiven Box"
            description="An interactive web application that develops your knowledge of boolean algebra and logic gates. Designed and made by Sunnie Kapar and Matthew Liu"
            href="http://druivenbox.haltonchess.ca"
            buttonText="View Demo"
            buttonVariant="default"
            target="_blank"
          />
          <TopicCard
            title="Resources"
            description="Check out some helpful resources"
            buttonText="See more"
            buttonVariant="outline"
            href="/resources"
          />
        </Fade>
      </div>
    </section>    
  );
};
export default HeroGridSection;
