import { Area, AreaChart, ResponsiveContainer } from "recharts";
import React from "react";
import dayjs from "dayjs";
import numeral from "numeral";

import { TVLDataType, TokenType } from "@/types";
import { useDarkMode } from "@/contexts/DarkModeContext";

interface TVLOverviewProps {
  token: TokenType;
  date: string;
  data: TVLDataType[];
}

const TVLOverview: React.FC<TVLOverviewProps> = ({ token, date, data }) => {
  const { isDarkMode } = useDarkMode();

  const gradientLight = ["#62CBED", "#E13483"];
  const gradientDark = ["#4c3bea", "#E13483"];
  const formattedTokenAmount = numeral(token.amount)
    .format("0.00a")
    .toUpperCase();
  const formattedDate = dayjs(date).format("MMM D, YYYY");

  return (
    <div className="min-h-fit border-4 border-[#E88CB5]/75 dark:border-[#9776C0] rounded-2xl bg-widget-light dark:bg-widget-dark overflow-hidden">
      <div className="p-6">
        <h3 className="text-3xl font-medium tracking-tight mb-3">
          TVL Overview
        </h3>
        <p className="text-xl uppercase">
          {formattedTokenAmount} {token.name}
        </p>
        <p className="text-xl uppercase">{formattedDate}</p>
      </div>
      <div className="-mt-4">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="tvl"
              stroke="url(#tvl)"
              fill={"#ffffff18"}
              strokeWidth={3.5}
              dot={false}
            />
            <defs>
              <linearGradient id="tvl" x1="0" y1="0" x2="1" y2="0">
                <stop
                  offset="0%"
                  stopColor={isDarkMode ? gradientDark[0] : gradientLight[0]}
                  stopOpacity={1}
                />
                <stop
                  offset="75%"
                  stopColor={isDarkMode ? gradientDark[1] : gradientLight[1]}
                  stopOpacity={0.8}
                />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
        <div className="w-full h-6 bg-[#ffffff0f]" />
      </div>
    </div>
  );
};

export default TVLOverview;
