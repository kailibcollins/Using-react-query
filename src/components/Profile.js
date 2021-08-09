import React from 'react'


const Profile = (profile) => {
    


    

    return (
        
        

       <div className = 'profile'>
       <h1>{profile.value.login}</h1>
       <p><b>id</b>: {profile.value.id}</p>
       <p><b>followers</b>: {profile.value.followers}</p>
       <p><b>following</b>: {profile.value.following}</p>
       <p><b>type:</b> {profile.value.type}</p>
       <p><b>public repos:</b> {profile.value.public_repos}</p>
       <p><b>location:</b> {profile.value.location}</p>
       <p><b>Email:</b> {profile.value.email}</p>
       <p><b>Bio:</b> {profile.value.bio}</p>
       <p><b>Last active:</b> {profile.value.updated_at}</p>
       </div>
       
    )
}

export default Profile
