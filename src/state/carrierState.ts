import { atom } from "recoil";
import { ICarrier } from "../services/carries";

export const CarrierState = atom<ICarrier[] | undefined>({
  key: "CarrierState",
  default: [],
});

export default CarrierState;
