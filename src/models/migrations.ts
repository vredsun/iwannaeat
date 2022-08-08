export const migrations = {
    1: (state: unknown) => {
      // migration to keep only device state
      return {
        // @ts-expect-error TODO
        ...state,
      }
    },
  }