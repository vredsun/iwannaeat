export type NewEatData = {
  name: string;
}

export type AddEatStateT = {
  data: NewEatData;
  requestStatus: {
    ok: boolean;
    loading: boolean;
    error: boolean;
  }
}
