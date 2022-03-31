import Head from "next/head";

const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export async function getServerSideProps({ query }) {
  const { name } = query;
  const res = await fetch(`${endpoint}${name}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function Cocktail({ data }) {  
  const { strDrink, strDrinkThumb, strInstructions } = data.drinks[0];
  return (
    <div className="drink">
      <Head>
        <title>{strDrink} - Cocktail Recipe</title>
      </Head>
      <h1>{strDrink}</h1>
      <img src={strDrinkThumb} alt={strDrink} />
      <p>{strInstructions}</p>
    </div>
  );
}
