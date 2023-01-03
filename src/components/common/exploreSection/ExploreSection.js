import React from "react";
// import { restaurants } from "../../../data/Restaurant";
import ExploreCard from "./exploreCard/ExploreCard";
import "./ExploreSection.css";

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
