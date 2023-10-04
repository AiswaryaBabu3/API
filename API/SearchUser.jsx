import React, { useState } from "react"

const SearchUser = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div>
      <input onChange={fetchData} label="Search User" /><br/><br/><br/>
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
              <tr key={user.id}>
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

export default SearchUser
