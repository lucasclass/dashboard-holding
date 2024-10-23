"use client";

import { useSession } from "next-auth/react";
import { AiOutlineLogin } from "react-icons/ai";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <h1>DASHBOARD</h1>
        </>
      ) : (
        <>
          <h1>NOT LOGGED IN</h1>
          <AiOutlineLogin style={{ color: "blue", fontSize: 90 }} />
        </>
      )}
    </>
  );
};

export default Dashboard;
