import { PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from '../types/pokemonTypes';
export interface Default {
    loading: boolean,
    pokemon?: PokemonType
}

const initialState: Default = {
    loading: false
}


export const pokemonReducer = (state: Default = initialState, action: PokemonDispatchTypes) => {
    switch (action.type) {
        case POKEMON_SUCCESS: {
            return {
                ...state,
                loading:false,
                pokemon: action.payload
            };
        }
        case POKEMON_FAIL:
            return {
                ...state,
                loading: false
            };
        case POKEMON_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }

}

