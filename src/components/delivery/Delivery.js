import React from "react";
import Filters from "../common/filters/Filters";
import { restaurants } from "../../data/Restaurant";
import TopBrands from "./topBrands/TopBrands";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiArrowUpDownFill } from "react-icons/ri";
import DeliveryCollections from "./deliveryCollection/DeliveryCollections";
import ExploreSection from "../common/exploreSection/ExploreSection";

const deliveryFilters = [
  {
    id: 1,
    icon: <GiSettingsKnobs className="absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <RiArrowUpDownFill className="absolute-center" />,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection
          list={restaurantList}
          collectionName="Delivery Restaurants in Gwalior "
        />
      </div>
    </div>
  );
};

export default Delivery;
