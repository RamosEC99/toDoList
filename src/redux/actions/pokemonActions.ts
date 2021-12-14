import { Dispatch } from "redux"
import { PokemonDispatchTypes,POKEMON_FAIL,POKEMON_LOADING, POKEMON_SUCCESS } from "../types/pokemonTypes"
import axios from '../../mixins/axiosInstance'
export const getPokemon =(pokemon:string)=>async (dispatch:Dispatch<PokemonDispatchTypes>)=>{
    try {
        dispatch({
            type:POKEMON_LOADING
        })

        const res = await axios.instance.get(`/pokemon/${pokemon}`)

        dispatch({
            type:POKEMON_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:POKEMON_FAIL
        })
    }
}