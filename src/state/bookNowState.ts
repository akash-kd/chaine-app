import { atom } from "recoil";
import { ICarrier } from "../services/carries";

export const BookNowModelState = atom<boolean>({
  key: "BookNowModelState",
  default: false,
});

export const BookNowCurrentCarrier = atom<ICarrier>({
  key: "BookNowCurrentCarrier",
  default: {
    id: "0",
    name: "",
    rating: 0,
    cost: 0,
    availability: true,
    onTimeDeliveryPercentage: 0.4,
    specialRequirements: [""],
    score:0
  }
});
