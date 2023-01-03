import React, { useState } from "react";
import Header from "../../components/common/header/Header.js";
import TabOption from "../../components/common/tabOptions/TabOption.js";
import Footer from "../../components/common/footer/Footer";
import Delivery from "../../components/delivery/Delivery.js";
import DiningOut from "../../components/diningOut/DiningOut.js";
import NightLife from "../../components/nightLife/NightLife.js";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Night Life":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
