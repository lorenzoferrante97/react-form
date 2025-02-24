


export default function List ({ articles }) {

    return (

        <>
        <ul className="flex flex-col gap-3u w-full">
            {
                articles.map( (article, index) => {
                    return (
                        <li className="font-body-base-regular flex justify-between items-center" key={index}>
                            <p>{article}</p>
                            <button>X</button>
                        </li>
                    )
                } )
            }
        </ul>
        </>

    )

}