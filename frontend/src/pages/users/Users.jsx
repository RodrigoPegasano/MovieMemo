// CSS
import './Users.css'

import UserCard from "../../components/userCard/UserCard"
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SessionContext } from '../../contexts/LoginContext';

function Users() {

    const [users, setUsers] = useState([]);
    const { user } = useContext(SessionContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/users?token=${user.token}`)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="all-users">
                {users.map(user => <UserCard user={user}></UserCard>)}
            </div>
        </>
    )
}

export default Users