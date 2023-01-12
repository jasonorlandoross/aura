import { useState, useEffect } from "react"
import AffirmationList from "../components/AffirmationList/AffirmationList"

export default function Affirmation() {
    const [affirmations, setAffirmations] = useState([])

    const addAffirmation = (e) => {
        const newAffirmation = { text: e.target.value, id: Date.now(), completed: false }
        setAffirmations([newAffirmation, ...affirmations])
        e.target.value = ''
    }

    // const wheresAntony = students.findIndex(student => student.name === 'Antony')
    // students[wheresAntony].grade = 'A+++'
    const completeAffirmation = (id, e) => {
        const affirmationsCopy = [...affirmations]
        const indexOfAffirmation = affirmationsCopy.findIndex((i) => i.id === id )
        affirmationsCopy[indexOfAffirmation].completed = !affirmationsCopy[indexOfAffirmation].completed
        setAffirmations(affirmationsCopy)
    }

    const editAffirmationText = (id, e) => {
        const affirmationsCopy = [...affirmations]
        const indexOfAffirmation = affirmationsCopy.findIndex((i) => i.id === id)
        affirmationsCopy[indexOfAffirmation].text = e.target.value
        setAffirmations([...affirmationsCopy])
        e.target.value = ""
      }
    
      const deleteAffirmation = (id) => {
        const affirmationsCopy = [...affirmations]
        const indexOfAffirmation = affirmationsCopy.findIndex((i) => i.id === id)
        affirmationsCopy.splice(indexOfAffirmation, 1)
        setAffirmations([...affirmationsCopy])
      };

  return (
    <div className="Affirmation">
      <AffirmationList
        addAffirmation={addAffirmation}
        completeAffirmation={completeAffirmation}
        editAffirmationText={editAffirmationText}
        deleteAffirmation={deleteAffirmation}
        affirmations={affirmations}
      />
    </div>
  )
}