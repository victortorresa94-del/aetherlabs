"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// Mock data to replicate the screenshot
const timeSlots = [
  "7:00 pm", "7:30 pm",
  "8:00 pm", "8:30 pm",
  "9:00 pm", "9:30 pm",
  "10:00 pm", "10:30 pm",
  "11:00 pm", "11:30 pm",
];

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(18);
  const [selectedTime, setSelectedTime] = useState<string | null>("7:00 pm");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // November 2025 starts on a Saturday, so 6 empty slots at the beginning of the grid
  const emptyDays = 6; 
  const daysInMonth = 30;
  const calendarDays = Array.from({ length: emptyDays + daysInMonth }, (_, i) => {
    return i < emptyDays ? null : i - emptyDays + 1;
  });

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-24 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-[2rem] leading-tight font-medium text-center">
          Schedule your service
        </h2>
        <p className="text-base text-gray-600 text-center mt-3 max-w-lg mx-auto">
          Check out our availability and book the date and time that works for you
        </p>

        <div className="mt-10 bg-white rounded-lg border border-gray-200 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Calendar */}
            <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <p className="font-semibold text-sm">Select a Date and Time</p>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-700 cursor-pointer">
                <span>Time Zone: Eastern Standard Time (GMT-5)</span>
                <ChevronDown size={18} className="text-gray-500" />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <p className="font-semibold text-sm">November 2025</p>
                  <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-7 gap-y-2 text-center text-xs text-gray-500 font-medium">
                  {daysOfWeek.map((day) => <div key={day}>{day}</div>)}
                </div>

                <div className="mt-2 grid grid-cols-7">
                  {calendarDays.map((day, index) => (
                    <div key={index} className="flex justify-center items-center py-1 h-10">
                      {day ? (
                        <button
                          onClick={() => day >= 18 && setSelectedDate(day)}
                          disabled={day < 18}
                          className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors
                            ${selectedDate === day ? 'bg-gray-800 text-white' : ''}
                            ${day < 18 ? 'text-gray-300 cursor-not-allowed' : ''}
                            ${day >= 18 && day !== selectedDate ? 'hover:bg-gray-100' : ''}
                          `}
                        >
                          {day}
                        </button>
                      ) : <div />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Time Slots & Details */}
            <div className="p-6 md:p-8">
              <p className="font-semibold text-sm">Availability for Tuesday 18 November</p>
              
              <div className="mt-4 grid grid-cols-2 gap-2.5 max-h-[240px] overflow-y-auto pr-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-2.5 rounded-md border text-sm font-medium transition-colors
                      ${selectedTime === time ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-black border-gray-300 hover:border-black'}
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-semibold text-sm">Service Details</p>
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-sm">15-Minute Catch Up Call</p>
                    <div className="flex items-center text-xs text-gray-500 cursor-pointer hover:underline w-fit shrink-0 ml-2">
                        <span>More details</span>
                        <ChevronDown size={14} className="ml-0.5"/>
                    </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="bg-gray-800 text-white font-medium text-sm py-2.5 px-5 rounded-md hover:bg-black transition-colors">
                  Next
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;