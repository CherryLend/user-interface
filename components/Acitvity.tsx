import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";
import dayjs from "dayjs";
import numeral from "numeral";
import { useState } from "react";

import { useDarkMode } from "@/contexts/DarkModeContext";
import { CryptoDataType, TokenType } from "@/types";

import Dropdown, { Option } from "./Dropdown";

interface ActivityProps {
  token: TokenType;
  date: string;
  data: CryptoDataType[];
}

const Activity: React.FC<ActivityProps> = ({ token, date, data }) => {
  const { isDarkMode } = useDarkMode();

  const gradient = {
    light: ["#FF82BF", "#FFADDC"],
    dark: ["#2031C8CC", "#70C0FFCC"],
    lightBg: ["#BDE2FF", "#4CA6F8"],
    darkBg: ["#FFACDC", "#D6238A"],
  };
  const formattedTokenAmount = numeral(token.amount)
    .format("0.00a")
    .toUpperCase();
  const formattedDate = dayjs(date).format("MMM D, YYYY");

  const options: Option[] = [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "Year", value: "year" },
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  return (
    <div className="min-h-fit flex flex-col justify-between border-4 border-[#E88CB5]/75 dark:border-[#9776C0] rounded-2xl bg-widget-light dark:bg-widget-dark overflow-hidden ">
      <div className="relative py-3 mb-3 flex items-center space-x-6 border-b border-black dark:border-white mx-5 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-black after:dark:bg-white after:bottom-[-3px] after:rotate-45">
        <h3 className="text-2xl font-bold tracking-tight">Activity</h3>
        <div className="flex items-center space-x-2">
          <div className="w-5 md:w-12 h-5 bg-[#DE8ACA] dark:border dark:border-white/70 dark:bg-[#3C39C0]" />
          <p className="font-semibold max-sm:text-sm text-md">Value (ADA)</p>
        </div>
        <div className="flex-grow flex justify-end">
          <Dropdown
            options={options}
            onOptionSelect={setSelectedOption}
            listClassName="max-w-[120px] overflow-auto"
          />
        </div>
      </div>
      <div className="relative">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            className="text-sm"
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              stroke={isDarkMode ? "white" : "black"}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke={isDarkMode ? "white" : "black"}
              axisLine={false}
              tickLine={false}
            />
            {/* <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <Bar
              radius={10}
              barSize={14}
              strokeWidth={1}
              background={{
                width: 14,
                radius: 10,
                fill: "url(#bg)",
                stroke: isDarkMode ? "#09095180" : "black",
                strokeWidth: 2,
              }}
              yAxisId="left"
              dataKey="apr"
              fill="url(#bar)"
            />
            <defs>
              <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
                <stop
                  offset="0%"
                  stopColor={isDarkMode ? gradient.dark[0] : gradient.light[0]}
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor={isDarkMode ? gradient.dark[1] : gradient.light[1]}
                  stopOpacity={1}
                />
              </linearGradient>
              <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={
                    isDarkMode ? gradient.darkBg[0] : gradient.lightBg[0]
                  }
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor={
                    isDarkMode ? gradient.darkBg[1] : gradient.lightBg[1]
                  }
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activity;
