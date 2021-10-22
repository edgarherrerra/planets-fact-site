import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { actionTypes } from "./actions";

export interface State {
  lastUpdate: number;
}

const initialState: State = { lastUpdate: 0 };

function rootReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts },
      };
    default:
      return state;
  }
}

export default rootReducer;
