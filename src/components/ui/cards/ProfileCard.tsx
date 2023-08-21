import { FC } from "react";
import { Card, CardHeader } from "../card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = () => {
  return (
    <Avatar className="">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>SK</AvatarFallback>
  </Avatar>
  );
};

export default ProfileCard;
