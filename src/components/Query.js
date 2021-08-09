import {useQuery } from 'react-query'
import React, { useState } from 'react'
import Profile from './Profile'


function Query() {
    const  [user, setUser] = useState([]);
    
  
    const { isLoading, error, data} = useQuery('repoData', () =>
       Promise.all(user.map((name) => { return fetch('https://api.github.com/users/'+ name).then(res =>
         res.json())})))
     
  
    if (isLoading) return 'Loading...'
   
    if (error) return 'An error has occurred: ' + error.message
   
     return (
       <div>
       
       <div id='enter'>
       <input id="username" type="text" placeholder="type..."/>
       <button type="button" id='submit' onClick={() => {
         var inputVal = document.getElementById('username').value
         setUser([inputVal, ...user])}}> search </button> </div>
       
        {data.map((profile) => <Profile value={profile}/>)}
  
        
      </div>
      )
     }

     export default Query