import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './SweatersMen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';
import ProductForGrid from '../../components/ProductForGrid/ProductForGrid';

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
        <ProductForGrid key={x.id} name={x.name} imageLink={x.imageUrl} altName={x.altName} price={x.price} />
    ));

    return (
        <section>
            <h1>Tröjor Herr</h1>
            <div className='display-products'>
                {sweatersArrayMen}
            </div>
            <Button routeName="/start" buttonName="Tillbaka" />
        </section>
    );
}

export default SweatersMen;