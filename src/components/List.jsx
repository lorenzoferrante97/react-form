


export default function List ({ articles }) {

    return (

        <>
        <ul className="flex flex-col gap-3u">
            {
                articles.map( (article, index) => {
                    return (
                        <li key={index}>{article}</li>
                    )
                } )
            }
        </ul>
        </>

    )

}