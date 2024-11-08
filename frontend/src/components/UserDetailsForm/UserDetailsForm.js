import { useState, useEffect } from "react";

const UserDetailsForm = ({ user, isEditing, onChange, errors }) => {
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
        const updatedUserData = { ...userData, [name]: value };
        setUserData(updatedUserData);
        onChange(updatedUserData);

    };

    return (
        <div className="mb-5">
            <form className="flex flex-col space-y-4">
                <label>
                    User ID
                    <input
                        type="number"
                        name="id" min="0"
                        value={userData.id}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-2 border border-black rounded-lg" />
                </label>
                {errors.id && <p className="text-red-500">{errors.id}</p>}
                <label>
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-2 border border-black rounded-lg" />
                </label>
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                <label>
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-2 border border-black rounded-lg" />
                </label>
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                <label>
                    Age
                    <input
                        type="number"
                        name="age"
                        min="0"
                        value={userData.age}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-2 border border-black rounded-lg" />
                </label>
                {errors.age && <p className="text-red-500">{errors.age}</p>}
                <label>
                    Gender
                    <select name="gender" value={userData.gender} onChange={handleChange} disabled={!isEditing} className="bg-white w-full mt-2 p-2 border border-black rounded-lg" >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-2 border border-black rounded-lg"
                    />
                </label>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <label>
                    Phone
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-2 p-2 border border-black rounded-lg" />
                </label>
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </form>
        </div>
    );
}

export default UserDetailsForm;