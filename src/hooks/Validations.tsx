import { useState } from 'react';

const useEmailValidation = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(validateEmail(newEmail));
    };

    return {
        email,
        isValid,
        handleEmailChange,
    };
};

export default useEmailValidation;