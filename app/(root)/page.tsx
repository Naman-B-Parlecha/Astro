import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Acess and manage your account transactions with ease."
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
          Recent Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance:50.50}]} />
    </section>
  );
};

export default Home;
