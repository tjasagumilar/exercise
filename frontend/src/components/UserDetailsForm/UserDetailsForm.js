import { useState, useEffect } from "react";

const UserDetailsForm = ({ user, isEditing, onSave, onCancel}) => {
    const [userData, setUserData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        phone: ""
    })

    useEffect(() => {
        if (user) {
            setUserData({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                gender: user.gender,
                email: user.email,
                phone: user.phone
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <form>
                <label>
                    Id:
                    <input
                        type="text"
                        name="id"
                        value={userData.id}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Gender:
                    <input
                        type="text"
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>
            </form>
        </div>
    );
}

export default UserDetailsForm;