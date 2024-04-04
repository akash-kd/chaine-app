import { atom, selector } from "recoil";
import CarrierState from "./carrierState";
import { ICarrier } from "../services/carries";

export type IFilterState = {
  minCost: number;
  maxCost: number;
  rating: number,
  availability?: boolean,
  onTimeDeliveryPercentage: number,
  specialRequirements: string,
}

const defaultState = {
  minCost: 0,
  maxCost: 2000,
  rating: 0,
  availability: undefined,
  onTimeDeliveryPercentage: 20,
  specialRequirements: "",
}

export const FilterState = atom<IFilterState>({
  key: "FilterState",
  default: defaultState,
  effects: [
    ({ onSet }) => {
      onSet((value) => {
        console.log(value);
      });
    },
  ],
});

export const FilterStateSelector = selector<ICarrier[] | undefined>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const currentFilterState = get(FilterState);
    const carrierState = get<ICarrier[] | undefined>(CarrierState);

    if(currentFilterState === defaultState){
      return carrierState;
    }

    // Exact Match
    const filteredCarriers = carrierState?.filter((carrier) => {
      return (
        carrier.cost >= currentFilterState.minCost &&
        carrier.cost <= currentFilterState.maxCost &&
        carrier.rating >= currentFilterState.rating &&
        (carrier.availability === currentFilterState.availability || currentFilterState.availability === undefined) &&
        carrier.onTimeDeliveryPercentage * 100 >= currentFilterState.onTimeDeliveryPercentage &&
        (currentFilterState.specialRequirements === "" ||
          carrier.specialRequirements.includes(
            currentFilterState.specialRequirements as any
          ))
      );
    });

    filteredCarriers?.sort((a,b) => b.score - a.score);
    return filteredCarriers;
  },
});

export default FilterState;
