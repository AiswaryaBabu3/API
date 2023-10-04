import React, { useState } from "react"

const ButtonClick = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div>
        <h1>User Details</h1>
      <button onClick={fetchData}>Fetch details</button><br/><br/><br/>
      {users.length > 0 && (
        <table border={1}>
        <tr>
            <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
        </tr>
        {users.map(user => (
          <tr key={user.id[0]}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </table>
      )}
    </div>
  )
}

export default ButtonClick
