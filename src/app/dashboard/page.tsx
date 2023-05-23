import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import TabMenu from "@/components/Dashboard/DashboardTab";
<<<<<<< HEAD



const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const { user } = session;
  //@ts-ignore
  const role = user.role;
  return (
    <div className="mx-2 rounded bg-gray-200 dark:bg-black/30">
      <TabMenu role={role} />
    </div>
  );
};
=======
import DashboardTable from "@/components/Dashboard/DashboardTable";
import Header from "@/components/Dashboard/DashboardTable/Header";


const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
    return;
  }
  const { user } = session;
  //@ts-ignore
  const role = user.role;
  return (
    <div className="mx-2 rounded bg-gray-200 dark:bg-black/30">
      <TabMenu role={role} />

      <div className="flex flex-col gap-4 bg-white dark:bg-black/80">
        <Header />
        <DashboardTable />
      </div>
    </div>
  );
};

>>>>>>> 43bbbb2 (add dashboard table and custom 404 page (#9))

export default Profile;
