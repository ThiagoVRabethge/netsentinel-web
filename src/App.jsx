import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import Link from "./components/Link"
import postLoginUsers from "./requests/auth/postLoginUsers"

const App = () => {
  const [email, setEmail] = useState()

  const [password, setPassword] = useState()

  const handleLogin = () => {
    postLoginUsers({ "email": email, "password": password })
      .then((response) => console.log(response))
  }

  return (
    <>
      <div className="container">
        <div className="mt-3 mb-3">
          <h1>NetSentinel</h1>
        </div>

        <div className="mb-3">
          <span className="text-muted">Monitore suas aplicações de forma prática e eficiente</span>
        </div>

        <div>
          <h2>Entre</h2>
        </div>

        <div className="mt-3 mb-3">
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
            path={"/register-users"}
            label={"Ou cadastre-se"}
          />
        </div>

        <div>
          <Button
            className="btn btn-primary w-100"
            onClick={handleLogin}
            label={"Entrar"}
          />
        </div>
      </div>
    </>
  )
}

export default App
