import { MarkerType } from "../../screens/MainDashboard/types";
import React from "react";
import { itemsData, markers } from "../../data/items";

export type SpotsContextType = {
  recyclingSpots: MarkerType[];
  setRecyclingSpots: React.Dispatch<React.SetStateAction<MarkerType[]>>;
};

export const SpotsContext = React.createContext<SpotsContextType>({
  recyclingSpots: markers,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRecyclingSpots: () => {},
});
