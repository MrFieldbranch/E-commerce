import { IButton } from '../../interfaces';
import './Button.css';

function Button({buttonName}: IButton) {

    return (
        <button>{buttonName}</button>
    );
}

export default Button;