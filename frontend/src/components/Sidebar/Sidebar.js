import { fetchUsers } from "../../services/UserService";
import React, { useEffect, useState } from 'react';

const Sidebar = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers();
            setUsers(users);
        };
        getUsers();
    }, []);

    return (
        <div className="sidebar">
            <h2>Users</h2>
            <div className="users">
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;