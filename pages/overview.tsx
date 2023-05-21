import { cryptoData, token, tvlData } from "@/data";
import Activity from "@/components/Acitvity";
import Layout from "@/layouts";
import LoansSection from "@/components/LoansSection";
import TVLOverview from "@/components/TVLOverview";

export default function Overview() {
  return (
    <Layout pageTitle="Overview">
      <div className="px-4 md:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <TVLOverview
          data={tvlData}
          token={token}
          date={new Date().toISOString()}
        />
        <Activity
          data={cryptoData}
          token={token}
          date={new Date().toISOString()}
        />
        <LoansSection />
      </div>
    </Layout>
  );
}
