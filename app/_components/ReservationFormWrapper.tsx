"use client";

import { useState } from "react";
import ReservationForm from "@/app/_components/ReservationForm"; 

const ReservationFormWrapper = ({ date }: { date: { from: Date; to: Date | undefined } }) => {
  const [dateRange, setDateRange] = useState(date);

  return <ReservationForm date={dateRange} onDateChange={setDateRange} />;
};

export default ReservationFormWrapper;
