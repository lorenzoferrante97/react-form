// import { useState } from 'react'
// import './App.css'

import { useState } from "react";
import List from "./components/List";

const articles = ["Titolo Art 1", "Titolo Art 2", "Titolo Art 3"];

// function addNewArticle
const addNewArticle = (e) => {
  e.preventDefault();

  return 1;
}

// set new article to value
const setArticleToValue = (e) => setNewArticle(e.target.value);


function App() {

  // dynamic articles list var
  const [ articlesList, setarticlesList ] = useState(articles);
  // dynamic new article var
  const [ newArticle, setNewArticle ] = useState("");

  return (

    <>
      <div className="min-h-screen w-full flex flex-col gap-4u justify-center items-center font-custom">
        <h1 className="font-h1">Lista di articoli</h1>
        {/* form */}
        <form onSubmit={ addNewArticle } className="w-[92%] max-w-[480px] flex flex-col justify-center items-center my-10u gap-2u">

          <label>Inserisci un nuovo articolo</label>

          <input className="border-2 border-smoke-200 rounded-full px-4u py-2u" type="text" placeholder="Tit nuovo articolo" onChange={ setArticleToValue } />

          <button type="submit">Inserisci</button>

        </form>
        {/* list */}
        <List articles={articlesList} />
      </div>
    </>

  )
}

export default App;

// start code
