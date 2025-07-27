import { Link as RouterLink } from "react-router-dom"

const Link = (props) => {
    const { path, label } = props

    return (
        <RouterLink to={path}>
            {label}
        </RouterLink>
    )
}

export default Link