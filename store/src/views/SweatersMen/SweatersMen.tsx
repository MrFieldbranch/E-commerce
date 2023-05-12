import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './SweatersMen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';

function SweatersMen() {
    const [sweatersMen, setSweatersMen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getSweatersMen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Tröja"), where("sex", "==", "Herr"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setSweatersMen(result);
    }

    useEffect(() => {
        getSweatersMen()        
    }, []);

    const sweatersArrayMen = sweatersMen.map((x) => (
        <div key={x.id}>
            <h3>{x.name}</h3>
            <p>{x.price}</p>            
            <p>{x.description}</p>
        </div>
    ));



    return (
        <section>
            <h1>Tröjor Herr</h1>
            {sweatersArrayMen}
            <Button routeName="/start" buttonName="Tillbaka" />
        </section>
    );
}

export default SweatersMen;