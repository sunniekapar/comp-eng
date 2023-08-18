import DruivenBoxCard from "../ui/DruivenBoxCard";
import Overview from "../ui/Overview";
import { Fade } from "react-awesome-reveal";
export default function Resources() {
  return (
    <section className="grid items-start justify-center gap-6 p-8 mx-auto rounded-lg lg:w-3/6 lg:grid-cols-2 xl:grid-cols-3">
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1}>
          <DruivenBoxCard />
          <Overview />
          <DruivenBoxCard />
        </Fade>
      </div>
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1} delay={50}>
          <DruivenBoxCard />
          <DruivenBoxCard />
          <DruivenBoxCard />
        </Fade>
      </div>
      <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
        <Fade cascade damping={0.1} delay={100}>
          <DruivenBoxCard />
          <DruivenBoxCard />
          <DruivenBoxCard />
        </Fade>
      </div>
    </section>
  );
}
