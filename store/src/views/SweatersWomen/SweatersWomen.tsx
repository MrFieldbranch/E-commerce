import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './SweatersWomen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';
import ProductForGrid from '../../components/ProductForGrid/ProductForGrid';

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
        <ProductForGrid key={x.id} 
                        name={x.name} 
                        imageLink={x.imageUrl} 
                        altName={x.altName} 
                        price={x.price} 
        />        
    ));

    return (
        <section className='category-page'>
            <h1>Tröjor Dam</h1>
            <div className='display-products'>
                {sweatersArrayWomen}
            </div>
            <Button routeName="/start" buttonName="Tillbaka" />
        </section>
    );
}

export default SweatersWomen;