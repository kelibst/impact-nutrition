'use client'

import DashboardCard from "@/components/Dashboard/DashboardContent/DashboardCard";
import Pagination from "@/components/Dashboard/DashboardTable/Pagination";
import TableHeader from "@/components/Dashboard/DashboardTable/TableHeader";
import { UpcomingEventCard } from "@/components/Dashboard/admin/UpcomingEventCard";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import GetAttendeeProvider, { GetAttendeesContext } from "@/components/context/AttendeeContext";
import { GetEventContext } from "@/components/context/EventContext";
import GetPaymentProvider, { GetPaymentContext } from "@/components/context/PaymentContext";
import { useContext, useEffect } from "react";
import { BiCalendarCheck, BiTrashAlt, BiUser } from "react-icons/bi";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const headings = ["#", "Name", "Date Created", "Role", "Status", "actions"];
const summaries = [
    {
        label: "users",
        quantity: "22.54k",
        color: "bg-purple-500",
    },
    {
        label: "events",
        quantity: "305",
        color: "bg-cyan-500",
    },
    {
        label: "revenue",
        quantity: "22.5k",
        color: "bg-sky-500",
    },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { payments, totalPayments, getAllPayments } = useContext(GetPaymentContext);
    const { events, getAllEvents } = useContext(GetEventContext);
    const { attendees, getAllattendees } = useContext(GetAttendeesContext);

    useEffect(() => {
        getAllEvents();
        return () => { };
    }, []);

    return (
        <div className="flex gap-8 justify-center">
            <div className="w-3/4">
                <div className="flex lg:gap-8">
                    <DashboardCard detail={summaries[0]}>
                        <BiUser className="text-white" size={32} />
                    </DashboardCard>
                    <DashboardCard detail={summaries[1]}>
                        <BiCalendarCheck className="text-white" size={32} />
                    </DashboardCard>
                    <DashboardCard detail={summaries[2]}>
                        <GiTakeMyMoney className="text-white" size={32} />
                    </DashboardCard>
                </div>
                <GetPaymentProvider>
                    <GetAttendeeProvider>{children}</GetAttendeeProvider>
                </GetPaymentProvider>
            </div>
            <div className="flex flex-col text-stone-500 gap-4 w-1/4">
                <p className="text-sm">November 2023</p>
                <p className="text-black dark:text-white ">Upcoming Events</p>

                {events.map((event, index) => (
                    <UpcomingEventCard key={index} event={event} />
                ))}
            </div>
        </div>
    );
}
