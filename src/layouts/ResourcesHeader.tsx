import { FC } from "react";

interface ResourcesHeaderProps {}

const ResourcesHeader: FC<ResourcesHeaderProps> = () => {
  return <>
  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">Resources</h1>
  <hr className="my-2" />
  </> ;
};

export default ResourcesHeader;
