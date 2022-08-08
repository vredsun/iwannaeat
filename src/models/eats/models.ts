import { NewEatData } from "../add-eat/models";

export type EatData = NewEatData & {
  id: string;
  // imgUrl: string | null;
  // rating: number;
  // hashTagsSet: Set<string>;
};

export type EatsStateT = {
  list: Array<string>;
  byId: Record<string, EatData>;
}
