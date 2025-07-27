import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Link from "../../components/Link"
import postRegisterUsers from "../../requests/auth/postRegisterUsers"

const RegisterUsers = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()

    const [password, setPassword] = useState()

    const handleRegister = () => {
        postRegisterUsers({ "email": email, "password": password })
            .then(() => navigate("/", { replace: true }))
    }

    return (
        <>
            <div className="container">
                <div className="mt-3 mb-3">
                    <h1>Cadastre-se</h1>
                </div>

                <div className="mb-3">
                    <span className="text-muted">Lembre-se: sua senha deve conter 8 dígitos, letras maiúsculas, minúsculas, números e caracteres especiais</span>
                </div>

                <div className="mb-3">
                    <Input
                        type={"email"}
                        placeholder={"doe.john@example.com"}
                        setState={setEmail}
                    />
                </div>

                <div className="mb-3">
                    <Input
                        placeholder={"••••••••"}
                        type={"password"}
                        setState={setPassword}
                    />
                </div>

                <div className="mb-3 text-end">
                    <Link
                        path={"/"}
                        label={"Já possuo uma conta"}
                    />
                </div>

                <div>
                    <Button
                        className="btn btn-primary w-100"
                        onClick={handleRegister}
                        label={"Cadastrar"}
                    />
                </div>
            </div>
        </>
    )
}

export default RegisterUsers