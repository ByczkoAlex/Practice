import React from "react";

const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST'
const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'

export const searchMoviesSuccess = (payload:any): searchMoviesSuccessActionType => ({type: SEARCH_MOVIES_SUCCESS, payload})
export type searchMoviesSuccessActionType = {
    type: typeof SEARCH_MOVIES_SUCCESS,
    payload: any
}

export const searchMoviesFailure = (error: string): searchMoviesFailureActionType => ({type:SEARCH_MOVIES_FAILURE, error})
export type searchMoviesFailureActionType = {
    type: typeof SEARCH_MOVIES_FAILURE,
    error: string
}


export const searchMoviesRequest = () : searchMoviesRequestActionType => ({type: SEARCH_MOVIES_REQUEST})
export type searchMoviesRequestActionType = {
    type: typeof SEARCH_MOVIES_REQUEST,
}

export const initialState = {
    loading: true,
    movies:[],
    errorMessage: null as null | string
};

export type ActionsTypes = searchMoviesRequestActionType | searchMoviesSuccessActionType | searchMoviesFailureActionType




export type initialStateType = typeof initialState

export const AppReducer = (state:initialStateType = initialState, action:ActionsTypes): initialStateType => {
    switch (action.type) {
        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
