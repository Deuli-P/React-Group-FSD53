
const GuestTable = ({guest}) => {
    // Arg: elemet selectionné 

    const { name, age, hobbies, major} = guest

    const RenderHobbies =({hobbie})=> (
        <div className="hobbie">
            <span className="hobbie-element">{hobbie}</span>
        </div>
    )
  return (
    <article className="card-container">
        <div className="card-name-age-container">
            <p className="card-name-age-element">
                Nom:
                <span>{name}</span>
            </p>
            <p className="card-name-age-element">
                Age:
                <span>{age}</span> ans
            </p>
        </div>
            <p>L&apos;invité est majeur : <span>{major? "Oui": "Non"}</span></p>
        <div className="card-hobbies-container">
            {hobbies?.map((hobby,idx)=> (<RenderHobbies hobbie={hobby} key={idx}/>))}
        </div>
    </article>
  )
}


export default GuestTable;