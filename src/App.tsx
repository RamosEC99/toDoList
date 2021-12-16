import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from './redux/store'
import { getPokemon } from './redux/actions/pokemonActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Pokemon from './components/pokemon'

function App(): JSX.Element {
    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState('')
    const pokemonState = useSelector((state: RootStore) => state.pokemon)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPokemonName(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(pokemonName){
            dispatch(getPokemon(pokemonName))
        }
    }
    return (
        <Fragment >
            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Pokemon Name</Form.Label>
                        <Form.Control type="text" placeholder="pikachu" onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            Put the pokemon names you want to know more about it.
                        </Form.Text>
                        
                    </Form.Group>
                    <Button type="submit" variant='primary'>Search</Button>
                </Form>
                {
                    pokemonState.pokemon&&(
                        <Pokemon PokemonInfo={pokemonState}/>
                    )
                }
                

            </div>
            
        </Fragment>
    );
}

export default App;
