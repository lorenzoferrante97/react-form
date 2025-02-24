// import { useState } from 'react'
// import './App.css'

import List from "./components/List";

const articles = ["Titolo Art 1", "Titolo Art 2", "Titolo Art 3"];



function App() {

  return (

    <>
      <div className="min-h-screen w-full flex flex-col gap-4u justify-center items-center font-custom">
        <List articles={articles} />
      </div>
    </>

  )
}

export default App;

// start code
