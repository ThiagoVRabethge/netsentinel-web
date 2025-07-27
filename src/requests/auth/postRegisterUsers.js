import api from "../../services/api"

const postRegisterUsers = (body) => {
    return (
        api
            .post("/auth/register-users", body)
            .then((response) => response)
            .catch((error) => console.error(error))
    )
}

export default postRegisterUsers