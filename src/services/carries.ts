export type ISpecialRequirements = "Refrigerated" | "Hazardous Materials" | "Eco-Friendly" | "Budget Haulers" | "Oversized Loads"

export type ICarrier = {
    id: string;
    name: string;
    rating: number;
    cost: number;
    availability: boolean;
    onTimeDeliveryPercentage: number
    specialRequirements: [ISpecialRequirements]
    score: number
}

export interface ICarrierResponse {
    carriers: ICarrier[] | undefined
}

export const getCarriers = async (): Promise<ICarrierResponse> => {
  const res = await fetch("https://mocki.io/v1/b174654c-dc79-4ca9-9be3-976a206e145c");
  return res.json();
};
