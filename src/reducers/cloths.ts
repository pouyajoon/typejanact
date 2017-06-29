// import { ApplicationState } from '../store';

import { ClothState } from '../store';

export const clothsActions = {
    addCloth: (cloth: string) => (dispatch: (action: any) => void) => {
        // debugger;
        dispatch({
            type: 'ADD_CLOTH',
            cloth
        });
    }
};

const defaultClothes: string[] = [];
const initialState: ClothState = { clothes: defaultClothes };

const clothsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_CLOTH':
            const clothes = [...state.clothes, action.cloth];
            return {
                ...state,
                clothes
            };
        default:
            return state;
    }
};

export default clothsReducer;