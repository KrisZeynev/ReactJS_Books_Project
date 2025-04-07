import { useEffect } from "react";
import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice"; 

const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {
    const register = (email, password) =>
        request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
};


export const useLogin = () => {
    const login = async (email, password) =>
        request.post(
            `${baseUrl}/login`,
            { email, password },
        );

    return {
        login,
    }
};

export const useLogout = () => {
    // const { accessToken, userLogoutHandler } = useContext(UserContext);
    const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .then(dispatch(logout()));

    }, [accessToken, dispatch]);

    return {
        isLoggedOut: !!accessToken,
    };
};