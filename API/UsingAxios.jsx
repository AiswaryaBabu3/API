import axios from "axios"
import React, { useEffect, useState } from "react"

const UsingAxios = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setUsers(response.data)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
        <h1>User Details</h1>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
               <li> {user.email}</li>
               </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default UsingAxios
