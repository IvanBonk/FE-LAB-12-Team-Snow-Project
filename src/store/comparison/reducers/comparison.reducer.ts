import { createReducer } from 'typesafe-actions';
import { actionType } from '../actions/comparison.action';
import { ComparisonState } from 'pages/comparison/comparison.interface';

export const initialState: ComparisonState = {
  petsToCompare: [],
  error: '',
  loading: false,
};

export const comparisonReducer = createReducer<any, actionType>(initialState, {
  '@comparison/PETS_BYID_SUCCESS': (state, action) => {
    return { ...state, loading: false, petsToCompare: action.payload };
  },
  '@comparison/PETS_BYID_FAILURE': (state, action) => {
    return { ...state, loading: false, petsToCompare: [], error: action.payload };
  },
  '@comparison/PETS_BYID_REQUEST': (state, action) => {
    return { ...state, loading: true };
  },
  '@comparison/REMOVE_COMPARISON_LIST': (state, action) => {
    return { ...state, petsToCompare: [] };
  },
});
