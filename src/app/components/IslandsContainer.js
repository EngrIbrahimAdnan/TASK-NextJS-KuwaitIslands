"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");

  const [currentIsland, setCurrentIsland] = useState(islands[0]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleIslandCardClicked(island) {
    setCurrentIsland(island);
  }
  const fitleredIslands = islands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  const [decision, setDecision] = useState("button");

  function handleClick() {
    const userResponse = confirm("Do you want to proceed with submitting?");
    if (userResponse) {
      setDecision("submit"); // Update type if true
    } else {
      setDecision("button"); // Fallback type
    }
  }

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList
          islands={fitleredIslands}
          handleIslandCardClicked={handleIslandCardClicked}
        />
      </div>
      <IslandForm
        island={currentIsland}
        handleClick={handleClick}
        decision={decision}
      />
    </div>
  );
}

export default IslandsContainer;
