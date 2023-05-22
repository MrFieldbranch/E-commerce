import "./Hero.css";
import Kvinna1 from "../../images/Kvinna1.jpeg";
import Kvinna2 from "../../images/Kvinna2.jpg";
import Kvinna3 from "../../images/Kvinna3.jpg";
import Man1 from "../../images/Man1.webp";
import { IHero } from "../../interfaces";

function Hero({ imageLink }: IHero) {

    return (
        <div style={{
            backgroundImage: `url(${imageLink})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            height: '38rem',
            marginBottom: '2rem'
        }}>

        </div>
    );
}

export default Hero;
