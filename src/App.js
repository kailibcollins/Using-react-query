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
  const  [user, setUser] = useState([]);
  

  const { isLoading, error, data} = useQuery('repoData', () =>
     Promise.all(user.map((name) => { return fetch('https://api.github.com/users/'+ name).then(res =>
       res.json())}))

     
   )
   console.log(data)

  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message
 
   return (
     <div>
     
     <div id='enter'>
     <input id="username" type="text" placeholder="type..."/>
     <button type="button" id='submit' onClick={() => {
       var inputVal = document.getElementById('username').value
       setUser([inputVal, ...user])
       
      
     }}> search </button> </div>
     
     {data.map((profile) => <div className = 'profile'>
       <h1>{profile.login}</h1>
       <p><b>id</b>: {profile.id}</p>
       <p><b>followers</b>: {profile.followers}</p>
       <p><b>following</b>: {profile.following}</p>
       <p><b>type:</b> {profile.type}</p>
       <p><b>public repos:</b> {profile.public_repos}</p>
       <p><b>location:</b> {profile.location}</p>
       <p><b>Email:</b> {profile.email}</p>
       <p><b>Bio:</b> {profile.bio}</p>
       <p><b>Last active:</b> {profile.updated_at}</p>
       </div>)}


     
       
       
       
       
    </div>
    )
   }





   