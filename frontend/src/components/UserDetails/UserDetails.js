import { fetchUserDetails, updateUserDetails } from "../../services/UserService";
import { useState, useEffect } from "react";
import UserDetailsForm from "../UserDetailsForm/UserDetailsForm";
import { validateUserData } from "../../services/Validation";

const UserDetails = ({ userId }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [originalUser, setOriginalUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const userData = await fetchUserDetails(userId);
                setSelectedUser(userData);
                setOriginalUser(userData);
            } catch (error) {
                console.error("Error fetching user details:", error);
                setSelectedUser(null);
            }
        };

        if (userId) {
            getUserDetails();
        }
        setIsEditing(false);

    }, [userId]);

    const handleSaveUser = async () => {
        if (!selectedUser) return;

        const validationErrors = validateUserData(selectedUser);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            setErrors({}); 
        }

        try {
            const updatedUser = await updateUserDetails(selectedUser.id, selectedUser);
            setSelectedUser(updatedUser);
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    const handleCancelEdit = () => {
        setSelectedUser(originalUser);
        setErrors({});
        setIsEditing(false);
    };

    const handleUserDataChange = (updatedData) => {
        setSelectedUser(updatedData);
    };

    return (
        <div className="flex-1 flex items-center justify-center">
            {selectedUser ? (
                <div className="p-4 border border-black rounded-lg w-1/3">
                    <h2 className="text-black text-center text-3xl font-bold p-2">User Details</h2>
                    <UserDetailsForm user={selectedUser} isEditing={isEditing} onChange={handleUserDataChange} errors={errors}/>
                    <div className="flex justify-end mt-4">
                        {!isEditing ? (
                            <button onClick={() => setIsEditing(true)} className="bg-customBlue text-white py-2 px-4 rounded-lg hover:bg-customLightBlue transition">Edit</button>
                        ) : (
                            <div className="flex space-x-2">
                                <button onClick={handleSaveUser} className="bg-customBlue text-white py-2 px-4 rounded-lg hover:bg-customLightBlue transition">Save</button>
                                <button onClick={handleCancelEdit} className="bg-customOrange text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition">Cancel</button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>No user selected.</p>
            )}
        </div>
    );
}

export default UserDetails;