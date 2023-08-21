import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FC } from "react";

interface OverviewCardProps {}

const OverviewCard:FC<OverviewCardProps> = () => {
  const data = [
    {
      name: "Computer",
      total: 1500,
    },
    {
      name: "Software",
      total: 300,
    },
  ];
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-center">
                Engineering Students Overview
            </CardTitle>
        </CardHeader>
      <CardContent>
        <ResponsiveContainer width="99%" height={300} debounce={1}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              type="number"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="total" className="dark:fill-white" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
export default OverviewCard;
