import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_RECIPES = gql`
  query Recipes {
    recipes {
      description
      id
      title
    }
  }
`;

const ADD_RECIPE = gql`
  mutation AddRecipe($title: String!, $description: String!) {
    addRecipe(title: $title, description: $description) {
      description
      id
      title
    }
  }
`;

function DataFetchFromDB() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { data, loading, error, refetch } = useQuery(GET_RECIPES);
  const [addRecipe] = useMutation(ADD_RECIPE);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={() => {
            addRecipe({
              variables: {
                input: {
                  title,
                  description,
                },
              },
            });

            refetch();
          }}
        >
          Add Recipe
        </button>
      </div>

      {data &&
        data.recipes.map((recipe: any) => {
          return (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>

              
            </div>
          );
        })}
    </div>
  );
}

export default DataFetchFromDB;
