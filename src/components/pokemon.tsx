import React from 'react'
import { Card,OverlayTrigger,Button,Popover } from 'react-bootstrap'

function pokemon({ PokemonInfo }: any) {
    // const popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Header as="h3">Pokemon Info</Popover.Header>
    //       <Popover.Body >
    //         <h3>Weigth</h3>
    //         <p>{PokemonInfo.pokemon.weight}</p>
    //         <h3>Types</h3>
    //         {
    //             PokemonInfo.pokemon.types.map((type: any) => {
    //                 return (
    //                     <p>{type.type.name}</p>
    //                 )
    //             })
    //         }
    //       </Popover.Body>
    //     </Popover>
    //   );
    return (
        <div style={{marginTop:'10px'}}>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PokemonInfo.pokemon.sprites.front_default} />
                <Card.ImgOverlay>
                    <Card.Title>{PokemonInfo.pokemon.species.name.toUpperCase()}</Card.Title>
                    {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button variant="success" size='sm'>Info</Button>
                    </OverlayTrigger> */}
                </Card.ImgOverlay>
            </Card>
            
        </div>
    )
}

export default pokemon
