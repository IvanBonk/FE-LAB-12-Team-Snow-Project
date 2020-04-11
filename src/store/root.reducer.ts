import { combineReducers } from 'redux';
import { resultReducer } from './result/reducers/result.reducer';
import { petReducer } from './pet/reducers/pet.reducer';
import filterReducer from './filter/reducers/filter.reducer';
import { comparisonReducer } from './comparison/reducers/comparison.reducer';
import { quizReducer } from './quiz/reducers/quiz.reducer';
import { comparisonHandlerReducer } from './comparison/reducers/comparison-handler.reducer';
import { careReducer } from './care/reducers/care.reducers';

export const rootReducer = combineReducers({
  filter: filterReducer,
  pet: petReducer,
  comparison: comparisonReducer,
  result: resultReducer,
  quiz: quizReducer,
  comparisonHandler: comparisonHandlerReducer,
  care: careReducer,
});
