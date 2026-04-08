export const loginUser = (email, password) => {

    if (email === 'admin@gmail.com' && password === "admin@123") {
        localStorage.setItem("isAuth", "true");
        return true
    }

    const user = JSON.parse(localStorage.getItem('user'))

    if (user && user.email === email && user.password === password) {
        localStorage.setItem("isAuth", "true");
        return true;
    }

    return false

};
export const isAuthenticated = () => {
    return localStorage.getItem('isAuth') === 'true'
};

export const logoutUser = () => {
    localStorage.removeItem('isAuth')
}

