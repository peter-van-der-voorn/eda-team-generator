import React, { useState } from 'react'
import AddStudent from './AddStudent'
import StudentList from './StudentList'

function App () {
  const [students, setStudents] = useState(['harry', 'sally'])

  return (
    <>
      <main>
        <h1>Let's Generate</h1>
        <AddStudent students={students} setStudents={setStudents} />
        <StudentList students={students} />
      </main>
    </>
  )
}

export default App
