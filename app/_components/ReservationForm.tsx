"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface ReservationFormProps {
  date: {
    from: Date;
    to: Date | undefined;
  };
  onDateChange: (date: { from: Date; to: Date | undefined }) => void;
}

export default function ReservationForm({ date, onDateChange }: ReservationFormProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-semibold">$850</span>
          <span className="text-neutral-500"> night</span>
        </div>
        <div className="flex items-center gap-1">
          <span>★ 4.98</span>
          <span>·</span>
          <span className="underline cursor-pointer">28 reviews</span>
        </div>
      </div>

      <div className="border rounded-lg p-4 mb-4">
        <button
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="w-full flex items-center justify-between p-2 border rounded-lg hover:border-black transition-colors"
        >
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>
              {date.from ? (
                date.to ? (
                  `${format(date.from, "MMM d")} - ${format(date.to, "MMM d")}`
                ) : (
                  format(date.from, "MMM d")
                )
              ) : (
                "Select dates"
              )}
            </span>
          </div>
        </button>

        {isCalendarOpen && (
          <div className="mt-2 p-2 border rounded-lg">
            <div className="text-center mb-2">
              <h4 className="font-semibold">Select your dates</h4>
              <p className="text-sm text-neutral-500">Add your travel dates for exact pricing</p>
            </div>
            {/* Simple calendar UI - in a real app, you'd want a more sophisticated calendar component */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i}
                  className="p-2 hover:bg-neutral-100 rounded-lg text-sm"
                  onClick={() => {
                    const newDate = new Date(2024, 3, i + 1);
                    onDateChange({
                      from: date.from || newDate,
                      to: date.from ? newDate : undefined,
                    });
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-semibold transition-colors">
        Reserve
      </button>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between">
          <span className="underline">$850 x 5 nights</span>
          <span>$4,250</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>$150</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Service fee</span>
          <span>$200</span>
        </div>
        <div className="pt-3 border-t flex justify-between font-semibold">
          <span>Total</span>
          <span>$4,600</span>
        </div>
      </div>
    </div>
  );
}