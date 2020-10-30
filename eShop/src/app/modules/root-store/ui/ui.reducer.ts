import { UIactions, uiActionTypes } from './ui.actions';
export interface UIstate {
  isLoading: boolean;
}

const UiInitialState: UIstate = {
  isLoading: false,
};

export function UIreducer(state = UiInitialState, action: UIactions) {
  switch (action.type) {
    case uiActionTypes.startLoading:
      return {
        ...state,
        isLoading: true,
      };
    case uiActionTypes.stopLoading:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const getIsLoading = (state: UIstate) => state.isLoading;
