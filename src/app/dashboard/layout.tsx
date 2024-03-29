'use client'
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import DashboardNav from "./DashboardNav";
import { useSession } from "next-auth/react";
import GetUserProvider from "@/components/context/UserContent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, data: session } = useSession({ required: true });


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    const currentPath = window.location.href
    const newPath =
    //@ts-ignore
      session.user.role === "SUBSCRIBER" && 
      currentPath.includes('admin') ? 
      currentPath.replace("/admin", "/subscriber") : 
      //@ts-ignore
        session.user.role === "ADMIN" &&
        currentPath.includes('subscriber') ? currentPath.replace("/subscriber", "/admin") : currentPath

    if (currentPath !== newPath) {
      window.location.href = (newPath);
    }
  }

  return (
    <div>
      <GetUserProvider>
      <div className="mt-10 pt-10 max-w-screen-2xl md:mx-auto border-b border-gray-300 ">
        <div className="bg-[#EDF6EF] dark:bg-black rounded-xl p-4 m-4">
          <DashboardNav />
          {children}
        </div>
      </div> 
      </GetUserProvider>
    </div>
  );
}