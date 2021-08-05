import React from 'react'

function StudentList ({ students, setStudents }) {
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <li key={index}>{student}</li>
        })}
      </ul>

    </>
  )
}

export default StudentList
