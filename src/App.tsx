import React, { Fragment, useState } from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from './redux/store'
import { getPokemon } from './redux/actions/pokemonActions'

function App(): JSX.Element {
    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState('')
    const pokemonState = useSelector((state: RootStore) => state.pokemon)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)
    }
    const handleSubmit = () => dispatch(getPokemon(pokemonName))
    console.log(pokemonState);
    return (
        <Fragment >
            <input type="text" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Search</button>
            
        </Fragment>
    );
}

export default App;
