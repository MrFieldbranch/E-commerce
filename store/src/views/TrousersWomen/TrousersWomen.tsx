import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './TrousersWomen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';

function TrousersWomen() {
    const [trousersWomen, setTrousersWomen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getTrousersWomen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Byxor"), where("sex", "==", "Dam"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setTrousersWomen(result);
    }

    useEffect(() => {
        getTrousersWomen()        
    }, []);

    const trousersArrayWomen = trousersWomen.map((x) => (
        <div key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.price}</p>            
            <p>{x.description}</p>
        </div>
    ));

    return (
        <section>
            <h1>Byxor Dam</h1>
            {trousersArrayWomen}
            <Button routeName="/start" buttonName="Tillbaka" />
        </section>
    );
}

export default TrousersWomen;