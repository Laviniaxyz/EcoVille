export type ItemDataType =
  | "paper-cardboard"
  | "plastics"
  | "glass"
  | "batteries"
  | "electronics"
  | "used-oil"
  | "clothing-textiles"
  | "aluminium";

export type coordinateType = {
  latitude: number | undefined;
  longitude: number | undefined;
};

export type MarkerType = {
  id: number;
  name: string;
  description: string;
  type: string | undefined;
  address: string;
  schedule?: string;
  coordinate: coordinateType;
  image?: string;
};
