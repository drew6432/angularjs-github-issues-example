import { get } from 'lodash';

export const getPagination = state => {
    return get(state, 'uiState.pagination', {});
};