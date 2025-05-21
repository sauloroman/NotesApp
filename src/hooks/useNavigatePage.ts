import { useNavigate } from "react-router-dom"

export const useNavigatePage = () => {  

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goSettings = () => {
        navigate('/settings')
    }

    return {
        goToHome,
        goSettings
    }
}