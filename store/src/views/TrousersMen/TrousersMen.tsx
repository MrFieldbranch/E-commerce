import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './TrousersMen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';

function TrousersMen() {
    const [trousersMen, setTrousersMen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getTrousersMen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Byxor"), where("sex", "==", "Herr"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setTrousersMen(result);
    }

    useEffect(() => {
        getTrousersMen()        
    }, []);

    const trousersArrayMen = trousersMen.map((x) => (
        <div key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.price}</p>            
            <p>{x.description}</p>
        </div>
    ));

    return (
        <section>
            <h1>Byxor Herr</h1>
            {trousersArrayMen}
            <Button routeName="/start" buttonName="Tillbaka" />
        </section>
    );
}

export default TrousersMen;