import { useEffect } from "react";
import { useContext } from "react";
import request from "../utils/request";


const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {
    const register = (email, password) =>
        request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
};
