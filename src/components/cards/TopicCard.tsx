import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  buttonVariant: "outline" | "default"
  target?: "_blank" | "_top" | "_parent" 
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  href, buttonVariant, target = "_self"
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant={buttonVariant}>
          <Link to={href} target={target}> {buttonText} </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
