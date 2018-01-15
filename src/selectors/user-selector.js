import { get } from 'lodash';

export const getUserMap = state => get(state, 'users.byId', {});