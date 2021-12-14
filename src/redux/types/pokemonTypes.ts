export const POKEMON_LOADING = "POKEMON_LOADING"
export interface PokemonLoading {
    type: typeof POKEMON_LOADING
}

export const POKEMON_FAIL = 'POKEMON_FAIL'
export interface PokemonFail {
    type: typeof POKEMON_FAIL
}

export const POKEMON_SUCCESS = 'PKEMON_SUCCESS'
export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: {
        abilities: PokemonAbility[],
        sprites: PokemonSprites,
        stats: PokemonStat[]
    }
}


export type PokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type PokemonSprites = {
    front_default: string
}

export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

export type PokemonType = {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[]
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess