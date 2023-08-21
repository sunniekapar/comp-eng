import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { IconContext } from "react-icons";
interface InformationCardProps {
  icon?: ReactNode;
  description: string;
  title: string;
}

const InformationCard: FC<InformationCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        {icon ? (
          <span className="mb-4">
            <IconContext.Provider value={{ className: "mt-0 " }}>
              {icon}
            </IconContext.Provider>
          </span>
        ) : null}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default InformationCard;
