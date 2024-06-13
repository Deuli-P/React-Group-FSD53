
const GuestSelect = ({ list, onSelected }) => {

    //Arg: list de guest et event setSelected

    const handleChange =(e)=> {
        const newList = [...list]

        const guestSelect = newList.find((guest) => guest.id === e.target.value )

        onSelected(guestSelect)

        console.log(guestSelect);
    }


  return (
    <>
        {list.length > 0 ?
            <select onChange={handleChange}>
                {/* Vide pour la selection initial */}
              <option></option> 
                {list.map((guest)=>{
                    const { name, id } = guest
                
                    return(
                        <option key={id} value={id}>{name}</option>
                    )
                })}
            </select>
        :
        <div> Vide</div>
        }
    </>
  )
}


export default GuestSelect;