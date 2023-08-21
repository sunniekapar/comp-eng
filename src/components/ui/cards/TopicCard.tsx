import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Button } from "../button";

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  buttonVariant: "outline" | "default"
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  href, buttonVariant
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
          <a href={href} target="_blank">
            {buttonText}  
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
