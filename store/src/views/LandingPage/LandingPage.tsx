import { collection, getDocs, query, where } from "firebase/firestore";
import "./LandingPage.css";
import { db } from "../../firestore-config";
import { IClothes } from "../../interfaces";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";
import Kvinna3 from "../../images/Kvinna3.jpg";
import Man1 from "../../images/Man1.webp";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const [sweaters, setSweaters] = useState<IClothes[]>([]);
    const [trousers, setTrousers] = useState<IClothes[]>([]);

    const clothesCollectionRef = collection(db, "clothes");

    let navigate = useNavigate();

    const navigateToMen = () => {
        navigate("/allmen");
    }
    
    const navigateToWomen = () => {
        navigate("/allwomen");
    }

    const getSweaters = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Tröja"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setSweaters(result);
    }

    const getTrousers = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Byxor"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setTrousers(result);
    }

    useEffect(() => {
        getSweaters()
        getTrousers()
    }, []);

    const sweatersArray = sweaters.map((x) => (
        <div key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.price}</p>
            <p>{x.description}</p>
        </div>
    ));

    const trousersArray = trousers.map((x) => (
        <div key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.price}</p>
            <p>{x.description}</p>
        </div>
    ));

    return (
        <section>
            <div className="rubrik">
                <h2>Se hela vårt utbud för damer</h2>
            </div>
            <div onClick={navigateToWomen} className="hero">
                <Hero imageLink={Kvinna3} />
            </div>
            <Button routeName="/sweatersmen" buttonName="Tröjor Herr" />
            <Button routeName="/sweaterswomen" buttonName="Tröjor Dam" />
            <Button routeName="/trousersmen" buttonName="Byxor Herr" />
            <Button routeName="/trouserswomen" buttonName="Byxor Dam" />
            <Button routeName="/shirtsmen" buttonName="Skjortor Herr" />
            <Button routeName="/shirtswomen" buttonName="Skjortor Dam" />
            <Button routeName="/shoesmen" buttonName="Skor Herr" />
            <Button routeName="/shoeswomen" buttonName="Skor Dam" />
            <div className="rubrik">
                <h2>Se hela vårt utbud för herrar</h2>
            </div>
            <div onClick={navigateToMen} className="hero">
                <Hero imageLink={Man1} />
            </div>
        </section>
    );
}

export default LandingPage;