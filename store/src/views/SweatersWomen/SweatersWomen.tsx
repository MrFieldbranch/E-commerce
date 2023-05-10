import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './SweatersWomen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';

function SweatersWomen() {
    const [sweatersWomen, setSweatersWomen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getSweatersWomen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Tröja"), where("sex", "==", "Dam"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setSweatersWomen(result);
    }

    useEffect(() => {
        getSweatersWomen()        
    }, []);

    const sweatersArrayWomen = sweatersWomen.map((x) => (
        <div key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.price}</p>            
            <p>{x.description}</p>
        </div>
    ));

    return (
        <section>
            {sweatersArrayWomen}
            <Button routeName="/start" buttonName="Tillbaka till startsidan" />
        </section>
    );
}

export default SweatersWomen;