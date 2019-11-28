
import * as actionTypes from "../actions/feed.actions";


const initialState = {
    imagesArr: []
};

export function feedReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_IMAGE_ARR:

            return {
                ...state,
                imagesArr: action.data
            };


        default:
            return state;
    }
}