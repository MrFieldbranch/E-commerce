import { IButton } from '../../interfaces';
import './Button.css';
import { useNavigate } from "react-router-dom";

function Button({ routeName, buttonName }: IButton) {

    let navigate = useNavigate();
    const navigateTo = () => {
        navigate(routeName);
    }

    return (
        <button onClick={navigateTo}>{buttonName}</button>
    );
}

export default Button;