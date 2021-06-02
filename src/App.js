import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import React, { useState } from 'react'

const queryClient = new QueryClient()

export default function App() {
   return (
   <QueryClientProvider client={queryClient}>
     <Example/>
    
    </QueryClientProvider>
   )
 }

 function Example() {
  const  [user, setUser] = useState('');



  const { isLoading, error, data , fetchMore} = useQuery('repoData', () =>
     fetch(`https://api.github.com/users/${user}`).then(res =>
       res.json()
     )
  )


  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message
 
   return (
     <div>
     <input id="username" type="text" placeholder="type..."/>
     <button type="button" id='submit' onClick={() => {
       var inputVal = document.getElementById('username').value
       setUser(inputVal)
       
       
      
       
     }}> search </button>
     <div className = 'profile'>
       <h1>{data.login}</h1>
       <p><b>id</b>: {data.id}</p>
       <p><b>followers</b>: {data.followers}</p>
       <p><b>following</b>: {data.following}</p>
       <p><b>type:</b> {data.type}</p>
       <p><b>public repos:</b> {data.public_repos}</p>
       <p><b>location:</b> {data.location}</p>
       <p><b>Email:</b> {data.email}</p>
       <p><b>Bio:</b> {data.bio}</p>
       <p><b>Last active:</b> {data.updated_at}</p>
       </div>
       
       
       
       
    </div>
    )
   }
