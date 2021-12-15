import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Pokemon from "../components/pokemon";

test("renders content", () => {
  const PokemonInfo = {
    pokemon: {
      weight: 40,
      types: [
        {
          type: {
            name: "normal",
          },
        },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      },
      species: {
        name: "ditto",
      },
    },
  };
  const component = render(<Pokemon PokemonInfo={PokemonInfo}></Pokemon>);

  component.getByText("DITTO");
  expect(component.container).toHaveTextContent(PokemonInfo.pokemon.species.name.toUpperCase())
});


