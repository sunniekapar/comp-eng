import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { IconContext } from "react-icons";
interface BigNumberCardProps {
  title: string;
  icon?: ReactNode;
  description?: string;
  number: string;
}

const BigNumberCard: FC<BigNumberCardProps> = ({
  title,
  icon,
  description,
  number,
}) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <p className="font-semibold">{title}</p>
        {icon ? (
          <IconContext.Provider value={{ className: "mt-0" }}>
            {icon}
          </IconContext.Provider>
        ) : null}
      </CardHeader>
      <CardContent className="">
        <p className="text-4xl font-bold"> {number} </p>
      </CardContent>
      <CardFooter>
        {description ? (
          <CardDescription> {description} </CardDescription>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default BigNumberCard;
