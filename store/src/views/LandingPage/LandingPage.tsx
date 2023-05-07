import { collection, getDocs, query, where } from "firebase/firestore";
import "./LandingPage.css";
import { db } from "../../firestore-config";
import { IClothes } from "../../interfaces";
import { useEffect, useState } from "react";

function LandingPage() {

    const [sweaters, setSweaters] = useState<IClothes[]>([]);
    const [trousers, setTrousers] = useState<IClothes[]>([]);


    const clothesCollectionRef = collection(db, "clothes");

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
        <div className="landingPage">
            {sweatersArray}
            {trousersArray}
        </div>
    );
}

export default LandingPage;