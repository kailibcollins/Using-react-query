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
  const  [user, setUser] = useState(['','','','','','','']);
  

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
     
     <div className = 'profile'>
       <h1>{data[0].login}</h1>
       <p><b>id</b>: {data[0].id}</p>
       <p><b>followers</b>: {data[0].followers}</p>
       <p><b>following</b>: {data[0].following}</p>
       <p><b>type:</b> {data[0].type}</p>
       <p><b>public repos:</b> {data[0].public_repos}</p>
       <p><b>location:</b> {data[0].location}</p>
       <p><b>Email:</b> {data[0].email}</p>
       <p><b>Bio:</b> {data[0].bio}</p>
       <p><b>Last active:</b> {data[0].updated_at}</p>
       </div>

       <div className = 'profile'>
       <h1>{data[1].login}</h1>
       <p><b>id</b>: {data[1].id}</p>
       <p><b>followers</b>: {data[1].followers}</p>
       <p><b>following</b>: {data[1].following}</p>
       <p><b>type:</b> {data[1].type}</p>
       <p><b>public repos:</b> {data[2].public_repos}</p>
       <p><b>location:</b> {data[1].location}</p>
       <p><b>Email:</b> {data[1].email}</p>
       <p><b>Bio:</b> {data[1].bio}</p>
       <p><b>Last active:</b> {data[1].updated_at}</p>
       </div>

       <div className = 'profile'>
       <h1>{data[2].login}</h1>
       <p><b>id</b>: {data[2].id}</p>
       <p><b>followers</b>: {data[2].followers}</p>
       <p><b>following</b>: {data[2].following}</p>
       <p><b>type:</b> {data[2].type}</p>
       <p><b>public repos:</b> {data[2].public_repos}</p>
       <p><b>location:</b> {data[2].location}</p>
       <p><b>Email:</b> {data[2].email}</p>
       <p><b>Bio:</b> {data[2].bio}</p>
       <p><b>Last active:</b> {data[2].updated_at}</p>
       </div>

       <div className = 'profile'>
       <h1>{data[3].login}</h1>
       <p><b>id</b>: {data[3].id}</p>
       <p><b>followers</b>: {data[3].followers}</p>
       <p><b>following</b>: {data[3].following}</p>
       <p><b>type:</b> {data[3].type}</p>
       <p><b>public repos:</b> {data[3].public_repos}</p>
       <p><b>location:</b> {data[3].location}</p>
       <p><b>Email:</b> {data[3].email}</p>
       <p><b>Bio:</b> {data[3].bio}</p>
       <p><b>Last active:</b> {data[3].updated_at}</p>
       </div>

       <div className = 'profile'>
       <h1>{data[4].login}</h1>
       <p><b>id</b>: {data[4].id}</p>
       <p><b>followers</b>: {data[4].followers}</p>
       <p><b>following</b>: {data[4].following}</p>
       <p><b>type:</b> {data[4].type}</p>
       <p><b>public repos:</b> {data[4].public_repos}</p>
       <p><b>location:</b> {data[4].location}</p>
       <p><b>Email:</b> {data[4].email}</p>
       <p><b>Bio:</b> {data[4].bio}</p>
       <p><b>Last active:</b> {data[4].updated_at}</p>
       </div>
       
       
       
       
    </div>
    )
   }





   