"use client";
import Navbar from "@/components/navbar/Navbar";
import { GetPoolProfit, GetTotalPool, GetBatches, GetYear } from "@/api/api";
import { useEffect, useState } from "react";
import { Profit } from "@/components/profit/Profit";
import { Chart } from "@/components/chart/Chart";
import { CalculateProfit } from "@/components/calculate-profit/CalculateProfit";

export default function Home() {
  const [year, setYear] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [poolProfit, setPoolProfit] = useState(null);
  const [totalPool, setTotalPool] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const year = await GetYear();
        setYear(year);

        const allBatches = await GetBatches();
        setBatches(allBatches);

        if (allBatches && allBatches.length > 0) {
          setSelectedBatch(allBatches[allBatches.length - 1]); // Select the latest batch by default
        }

        const totalPoolData = await GetTotalPool();
        setTotalPool(totalPoolData);

        const poolProfitData = await GetPoolProfit();
        setPoolProfit(poolProfitData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar batches={batches} year={year} setBatch={setSelectedBatch} />
      <div className="flex flex-col items-center gap-1">
        <Profit
          // profitPerc={poolProfit && poolProfit[0].percentage}
          // profitUsdt={poolProfit && poolProfit[0].usdt}
          profitData={selectedBatch ? selectedBatch.poolProfit[0] : []}
        />
        <Chart chartData={selectedBatch ? selectedBatch.data : []} />
        <CalculateProfit
          totalPool={totalPool && totalPool.usdt}
          totalProfit={
            selectedBatch ? selectedBatch.poolProfit[0].percentage : []
          }
        />
      </div>
    </div>
  );
}
