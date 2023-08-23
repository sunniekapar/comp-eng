import { Navbar } from "@/layouts";
import ResourcesHeader from "@/layouts/ResourcesHeader";
import ResourcesSidebar from "@/layouts/ResourcesSidebar";
import { FC } from "react";

interface ResourcesProps {}

const Resources: FC<ResourcesProps> = () => {
  return (
    <main className="container h-screen max-h-screen">
      <Navbar />
      <ResourcesHeader />
      <ResourcesSidebar />
    </main>
  );
};

export default Resources;
