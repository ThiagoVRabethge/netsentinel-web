import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import useUserSessionStore from "../../stores/userSessionStore"

const Dashboard = () => {
    const userSession = useUserSessionStore(state => state.userSession)

    return (
        <>
            <Navbar />

            {userSession?.email}

            <div className="container mt-5">
                <Button
                    className={"btn btn-primary"}
                    label={"Novo serviço"}
                />
            </div>
        </>
    )
}

export default Dashboard