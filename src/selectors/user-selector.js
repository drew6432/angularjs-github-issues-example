import { createSelector } from 'reselect';
import { get } from 'lodash';
import moment from 'moment';

export const getUserMap = state => get(state, 'users.byId', {});