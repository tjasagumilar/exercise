import { fetchUserDetails } from "../../services/UserService";
import { useState, useEffect } from "react";
import UserDetailsForm from "../UserDetailsForm/UserDetailsForm";

const UserDetails = ({ userId }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getUserDetails = async () => {
            const userData = await fetchUserDetails(userId);
            setSelectedUser(userData);
        };
        getUserDetails();
        console.log(selectedUser);

    }, [userId]);

    const handleSaveUser = () => {
        // to-do
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    return (
        <div>
            <UserDetailsForm user={selectedUser} isEditing={isEditing} onSave={handleSaveUser} onCancel={handleCancelEdit} />
            {!isEditing && (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
}

export default UserDetails;