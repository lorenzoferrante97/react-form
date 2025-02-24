// import { useState } from 'react'
// import './App.css'

import { useState } from "react";
import List from "./components/List";

const articles = ["Titolo Art 1", "Titolo Art 2", "Titolo Art 3"];

// function addNewArticle
const addNewArticle = () => {
  return 1;
}

// dynamic articles list var
const [ articlesList, setarticlesList ] = useState(articles);
// dynamic new article var
const [ newArticle, setNewArticle ] = useState("");

function App() {

  return (

    <>
      <div className="min-h-screen w-full flex flex-col gap-4u justify-center items-center font-custom">
        <h1 className="font-h1">Lista di articoli</h1>
        {/* form */}
        <form onSubmit={addNewArticle}>
          <input type="text" placeholder="Tit nuovo articolo" />
        </form>
        {/* list */}
        <List articles={articles} />
      </div>
    </>

  )
}

export default App;

// start code
