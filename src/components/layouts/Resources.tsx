import BigNumberCard from "../ui/BigNumberCard";
import DruivenBoxCard from "../ui/DruivenBoxCard";
import Overview from "../ui/Overview";
import { BsCurrencyDollar } from 'react-icons/bs';

import { Fade } from "react-awesome-reveal";
const Resources = () => {
  return (
    <section className="grid items-start justify-center gap-6 p-8 mx-auto rounded-lg lg:w-3/6 lg:grid-cols-2 xl:grid-cols-3">
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1}>
          <DruivenBoxCard />
          <Overview />
        </Fade>
      </div>
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1} delay={50}>
          <BigNumberCard
            number="$129,000"
            title="Average Salary"
            icon={<BsCurrencyDollar/>}
            description="As a Computer Engineer in California"
          />
          <DruivenBoxCard />
          <DruivenBoxCard />
        </Fade>
      </div>
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1} delay={100}>
          <DruivenBoxCard />
          <DruivenBoxCard />
        </Fade>
      </div>
    </section>
  );
};
export default Resources;
