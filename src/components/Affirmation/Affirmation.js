import { useState } from "react"

export default function Affirmation({ affirmation, completeAffirmation, editAffirmationText, deleteAffirmation }) {
  const [showInput, setShowInput] = useState(false)
  return (
    <li>
      <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {affirmation.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editAffirmationText(affirmation.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        <button
          checked={affirmation.completed}
          onClick={(e) => {
            completeAffirmation(affirmation.id, e)
          }}
        >Completed</button>
      </label>
      <button
        checked={affirmation.completed}
        onClick={(e) => {
          deleteAffirmation(affirmation.id)
        }}
      >
        Delete Affirmation
      </button>
    </li>
  )
}