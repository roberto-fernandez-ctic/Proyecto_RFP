import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/home").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  return (
/*     <div>
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ): backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
        )
      )}
    </div> */
    <h1>Hello world!</h1>
  )
}

export default App
