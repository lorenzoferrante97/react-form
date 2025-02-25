import { useState } from "react"



export default function List ({ articles }) {

    // console.log("articles: ", articles)
    
    // const newArticles = articles;

    // const [ updatedArticles, setUpdatedArticles ] = useState([]);

    // console.log("updatedArticles: ", updatedArticles)

    // const deleteFromList = (i) => {
    //     setUpdatedArticles( articles.filter( (article, index) => index !== i ) );
    // }

    return (

        <>
        <ul className="flex flex-col gap-3u w-full">
            {

                articles.map( (article, index) => {
                    return (
                        <li className="font-body-base-regular flex justify-between items-center border-b-2 border-smoke-50 py-3u" key={index}>
                            <p>{article}</p>
                            {/* <button className="bg-red-400 text-white rounded-sm py-u px-2u hover:px-5u transition-all" onClick={ () => deleteFromList(index) }>X</button> */}
                        </li>
                    )
                } )
            }
        </ul>
        </>

    )

}