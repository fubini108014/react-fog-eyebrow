import React, { createContext, useContext, useState } from "react";

const initContext = { user: null, signin: () => {}, signout: () => {} };

let AuthContext = createContext(initContext);
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export function AuthProvider({ children }) {
    let getUser = localStorage.getItem("user") || null;
    let [user, setUser] = useState(getUser);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            localStorage.setItem("user", newUser);
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            localStorage.removeItem("user");
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
