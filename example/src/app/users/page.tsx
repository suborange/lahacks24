/// this page can be the example user page.
// usersPage
import React from 'react';

interface User {
    id: number;
    name: string;
}

const usersPage = async () => {
    const respone = await fetch('https://jsonplaceholder.typicode.com/users', 
    {
        cache: 'no-store', // no caching of data, keeps data fresh
        //next: {revalidate: 10 } // run backend job, gets fresh data from backend every 10 seconds
    });
    const users: User[] = await respone.json();

    return (
        
        <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString() }</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        </>
    );
}

export default usersPage;