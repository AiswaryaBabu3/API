import { useEffect, useState } from "react"

function TableApi() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div>
      {loading ? (
        <div>Loading......</div>
      ) : (
        <>
          <h1>Users</h1>
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
        </>
      )}
    </div>
  )
}

export default TableApi
