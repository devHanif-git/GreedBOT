"use client";
import Navbar from "@/components/navbar/Navbar";
import { GetPoolProfit, GetChartData, GetTotalPool, GetBatch } from "@/api/api";
import { useEffect, useState } from "react";
import { Profit } from "@/components/profit/Profit";
import { Chart } from "@/components/chart/Chart";
import { CalculateProfit } from "@/components/calculate-profit/CalculateProfit";

export default function Home() {
  const [batchNow, setBatchNow] = useState(null);
  const [poolProfit, setPoolProfit] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [totalPool, setTotalPool] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const batch = await GetBatch();
        setBatchNow(batch);

        const totalPoolData = await GetTotalPool();
        setTotalPool(totalPoolData);

        const poolProfitData = await GetPoolProfit();
        setPoolProfit(poolProfitData);

        const chartDataRes = await GetChartData();
        setChartData(chartDataRes);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle errors as needed, potentially setting an error state to display a message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar batch={batchNow && batchNow.text} />
      <div className="flex flex-col items-center gap-1">
        <Profit
          profitPerc={poolProfit && poolProfit[0].percentage}
          profitUsdt={poolProfit && poolProfit[0].usdt}
        />
        <Chart chartData={chartData?.map((data) => data.data)} />
        <CalculateProfit
          totalPool={totalPool && totalPool.usdt}
          totalProfit={poolProfit && poolProfit[0].percentage}
        />
      </div>
    </div>
  );
}
