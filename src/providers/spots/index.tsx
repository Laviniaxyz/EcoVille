import React, { useMemo, useState } from "react";
import { markers } from "../../data/items";
import { MarkerType } from "../../screens/MainDashboard/types";
import { itemsData } from "../../data/items";
import { SpotsContext } from "./context";

const SpotsProvider = ({ children }: { children: React.ReactNode }) => {
  const [recyclingSpots, setRecyclingSpots] = useState<MarkerType[]>(markers);

  const value = useMemo(
    () => ({
      recyclingSpots,
      setRecyclingSpots,
    }),
    [recyclingSpots, setRecyclingSpots]
  );

  return (
    <SpotsContext.Provider value={value}>{children}</SpotsContext.Provider>
  );
};

export default SpotsProvider;
