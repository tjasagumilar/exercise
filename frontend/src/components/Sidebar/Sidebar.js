import { fetchUsers } from "../../services/UserService";
import React, { useEffect, useState } from 'react';

const Sidebar = ({ onSelectUser }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers();
            setUsers(users);
        };
        getUsers();
    }, []);

    return (
        <div className="sidebar bg-customBlue text-customOrange p-10 h-full top-0 left-0">
            <h2 className="text-white text-2xl font-bold pl-2">Users</h2>
            <div className="users">
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => onSelectUser(user.id)} className="cursor-pointer p-2 text-white hover:text-customOrange"> 
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;