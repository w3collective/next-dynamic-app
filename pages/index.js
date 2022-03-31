import Head from "next/head";
import Link from "next/link";

const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum";
export async function getServerSideProps() {
  const res = await fetch(endpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { drinks = [] } = data;
  return (
    <div className="drinks">
      <Head>
        <title>Rum Cocktails</title>
      </Head>
      {drinks.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        return (
          <span key={idDrink}>
            <Link href="/drink/[name]" as={`/drink/${strDrink}`}>
              <a>
                <img src={strDrinkThumb} width="100" />
                <p>{strDrink}</p>
              </a>
            </Link>
          </span>
        );
      })}
    </div>
  );
}
