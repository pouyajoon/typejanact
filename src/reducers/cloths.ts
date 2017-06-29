import { ClothState } from '../store';

enum actions { 'ADD_CLOTH', 'ADD_JANNOU_CLOTH' }

export const clothsActions = {
    addCloth: (cloth: string) => (dispatch: (action: any) => void) => {
        dispatch({
            type: actions.ADD_CLOTH,
            cloth
        });
    },
    addJannouCloth: (cloth: string) => (dispatch: (action: any) => void) => {
        dispatch({
            type: actions.ADD_JANNOU_CLOTH,
            cloth
        });
    }
};

const initialState: ClothState = {
    jannouClothes: [],
    clothes: []
};

const clothsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.ADD_CLOTH:
            return {
                ...state,
                clothes: [...state.clothes, action.cloth]
            };
        case actions.ADD_JANNOU_CLOTH:
            return {
                ...state,
                jannouClothes: [...state.jannouClothes, action.cloth]
            };
        default:
            return state;
    }
};

export default clothsReducer;