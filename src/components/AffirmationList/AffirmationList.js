import Affirmation from '../Affirmation/Affirmation'
import React from 'react'

export default function AffirmationList({
    affirmations,
    addAffirmation,
    completeAffirmation,
    deleteAffirmation,
    editAffirmationText
  }) {
    return (
      <>
        <h1> Affimations </h1>
        <h3>I Am...</h3>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addAffirmation(e)
          }}
        />
        {affirmations.length ? (
          <>
            <h1>Active Affirmations</h1>
            <h3>New Item</h3>
            <ul className="affirmationlist">
              {affirmations
                .filter((i) => !i.completed)
                .map((affirmation) => {
                  return (
                    <Affirmation
                      key={affirmation.id}
                      affirmation={affirmation}
                      completeAffirmation={completeAffirmation}
                      deleteAffirmation={deleteAffirmation}
                      editAffirmationText={editAffirmationText}
                    />
                  )
                })}
            </ul>
            <h1>Completed</h1>
            <ul className="affirmationlist">
              {affirmations
                .filter((i) => i.completed)
                .map((affirmation) => {
                  return (
                    <Affirmation
                      key={affirmation.id}
                      affirmation={affirmation}
                      completeAffirmation={completeAffirmation}
                      deleteAffirmation={deleteAffirmation}
                      editAffirmationText={editAffirmationText}
                    />
                  )
                })}
            </ul>
          </>
        ) : (
          <h1>No Affirmations Added Yet</h1>
        )}
      </>
    )
  }