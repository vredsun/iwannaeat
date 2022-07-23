export type EatData = {
  id: string;
  title: string;
  imgUrl: string | null;
  rating: number;
  hashTagsSet: Set<string>;
};

export type EatsStateT = {
  list: Array<EatData>;
}
