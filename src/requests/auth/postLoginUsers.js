import api from "../../services/api"

const postLoginUsers = (body) => {
    return (
        api
            .post("/auth/login-users", body)
            .then((response) => response)
            .catch((error) => console.error(error))
    )
}

export default postLoginUsers