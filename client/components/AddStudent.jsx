import React from 'react'

function AddStudent () {
  return (
    <>
      <form>
        <label htmlFor="name">Enter Student Name:</label><br/>
        <input type="text" id="names" name="name"/><br/>
        <input type="submit" value="Add Student" />

      </form>
    </>
  )
}

export default AddStudent
