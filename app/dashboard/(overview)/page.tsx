// TODO: Chp#7 Fetching data from database
// import { Card } from "@/app/ui/dashboard/cards";
import CardWrapper from "@/app/ui/dashboard/cards"

import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { poppins } from "@/app/ui/fonts";
//TODO: Chp#7 import fetchRevenue Function
// import { fetchLatestInvoices, fetchRevenue, fetchCardData } from '@/app/lib/data'
// import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data'
import { fetchCardData } from "@/app/lib/data";
import { Suspense } from "react";

import { CardsSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  //TODO: Chp#7 Call fetchRevenue Function
  // const revenue = await fetchRevenue();

  // const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      {/* Adding suspense component */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div> */}

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* TODO: Chp#7 To show revenue chart, import RevenueChart component & add prop */}
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* Using suspense component for revenueChart */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
