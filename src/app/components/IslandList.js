"use client";

import Island from "./Island";

function IslandList({ islands, handleIslandCardClicked }) {
  const islandCards = islands.map((island) => (
    <Island
      key={island.id}
      island={island}
      handleIslandCardClicked={handleIslandCardClicked}
    />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
