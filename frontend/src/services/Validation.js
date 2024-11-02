export const validateUserData = (data) => {
    const errors = {};

    if (!data.id) {
        errors.id = "User ID is required";
    }

    if (!data.firstName) {
        errors.firstName = "First name is required";
    }
    
    if (!data.lastName) {
        errors.lastName = "Last name is required";
    }
    
    if (data.age <= 0) {
        errors.age = "Age must be greater than zero";
    }
    
    if (!data.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid";
    }
    
    if (!data.phone) {
        errors.phone = "Phone number is required";
    }
   
    return errors;
};