export interface Characteristics {
  popularity: number;
  training: number;
  size: number;
  brain: number;
  security: number;
  childFriendly: number;
  agility: number;
  problematic: number;
}

export interface Observations {
  country: string;
  lifetime: string;
  height: string;
  wiidth: string;
  price: string;
  carePrice: number;
  careTime: number;
  careComplications: string;
  walkNumber: number;
  mealNumber: number;
  mealWeight: number;
}

export interface OwnerInfo {
  easyTrain: boolean;
  familyFit: boolean;
  apartmentFit: boolean;
  hypoallergenicity: boolean;
}

export interface AdditionalInfo {
  about: string;
  specialities: string[];
  issues: string[];
}

export interface PetProfile {
  _id: string;
  breed: string;
  imgUrl: string[];
  characteristics: Characteristics;
  observations: Observations;
  additionalInfo: AdditionalInfo;
  ownerInfo: OwnerInfo;
}
