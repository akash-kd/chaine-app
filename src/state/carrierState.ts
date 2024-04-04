import { atom } from "recoil";
import { ICarrier } from "../services/carries";

const Weights = {
  rating: 0.3,
  availability: 2,
  onTimeDeliveryPercentage: 0.2,
  specialRequirements: 0.2,
};

const calculateScore = (carrier: ICarrier): number => {
  let score = 0;

  if (100 <= carrier.cost && carrier.cost <= 1000) {
    score += 2;
  } else if (1000 < carrier.cost && carrier.cost <= 2000) {
    score += 1;
  }

  score += carrier.rating * Weights.rating;
  score += carrier.availability ? Weights.availability : 0;
  score += carrier.onTimeDeliveryPercentage * Weights.onTimeDeliveryPercentage;
  score +=
    carrier.specialRequirements.length > 0
      ? carrier.specialRequirements.length * Weights.specialRequirements
      : 0;

  return score;
};

export const CarrierState = atom<ICarrier[] | undefined>({
  key: "CarrierState",
  default: [],

  effects: [
    ({ onSet, setSelf }) => {
      onSet((carriers) => {
        let newCarr: ICarrier[] = [];
        if (carriers)
          for (let i = 0; i < carriers?.length; i++) {
            if (carriers[i].score) break;
            let carr = { ...carriers[i] };
            carr.score = calculateScore(carr);
            newCarr.push(carr);
          }
        newCarr.sort((a, b) => b.score - a.score);
        setSelf(newCarr);
      });
    },
  ],
});

export default CarrierState;
