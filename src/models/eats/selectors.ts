import { createSelector } from 'reselect';
import { RootState } from '..';

export const selectEatsList = (state: RootState) => state.eats.list;
export const selectEatsById = (state: RootState) => state.eats.byId;

export const selectEatsListData = createSelector(
    selectEatsList,
    selectEatsById,
    (list, byId) => {
        return list.map(id => byId[id]);
    }
)
