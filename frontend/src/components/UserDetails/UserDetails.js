import { fetchUserDetails, updateUserDetails } from "../../services/UserService";
import { useState, useEffect } from "react";
import UserDetailsForm from "../UserDetailsForm/UserDetailsForm";

const UserDetails = ({ userId }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const userData = await fetchUserDetails(userId);
                setSelectedUser(userData);
            } catch (error) {
                console.error("Error fetching user details:", error);
                setSelectedUser(null);
            }
        };

        if (userId) {
            getUserDetails();
        }

    }, [userId]);

    const handleSaveUser = async () => {
        if (!selectedUser) return;

        try {
            const updatedUser = await updateUserDetails(selectedUser.id, selectedUser);
            setSelectedUser(updatedUser);
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleUserDataChange = (updatedData) => {
        setSelectedUser(updatedData);
    };

    return (
        <div>
            {selectedUser ? (
                <div>
                    <UserDetailsForm user={selectedUser} isEditing={isEditing} onChange={handleUserDataChange} />
                    {!isEditing ? (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    ) : (
                        <div>
                            <button onClick={handleSaveUser}>Save</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    )}
                </div>
            ) : (
                <p>No user selected</p> // Sporočilo, če ni izbran noben uporabnik
            )}
        </div>
    );
}

export default UserDetails;