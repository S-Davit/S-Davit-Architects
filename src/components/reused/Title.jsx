/*TODO new syntax*/
// export const TitleItem = ({}) => (
//     <>
//         <h1 className="section-title">Projects</h1>
//         <hr/>
//     </>
// )


export const TitleItem = ({title}) => {
    return (
        <>
            <h1 className="section-title">{title}</h1>
            <hr/>
        </>
    )
}