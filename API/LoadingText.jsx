import React, { useEffect, useState } from "react"

const LoadingText = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
                <li>{user.name}</li>
            <li> {user.email}</li>
            <li>{user.phone}</li>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LoadingText
