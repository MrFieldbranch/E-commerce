import { useEffect, useState } from 'react';
import './ShirtsMen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';
import Button from '../../components/Button/Button';
import ProductForGrid from '../../components/ProductForGrid/ProductForGrid';

function ShirtsMen() {
    const [shirtsMen, setShirtsMen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getShirtsMen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Skjorta"), where("sex", "==", "Herr"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setShirtsMen(result);
    }

    useEffect(() => {
        getShirtsMen()
    }, []);

    const shirtsArrayMen = shirtsMen.map((x) => (
        <ProductForGrid key={x.id} 
                        name={x.name} 
                        imageLink={x.imageUrl} 
                        altName={x.altName} 
                        price={x.price} 
        />
    ));

    return (
        <section className='category-page'>
            <h1>Skjortor Herr</h1>
            <div className='display-products'>
                {shirtsArrayMen}
            </div>
            <Button routeName='/start' buttonName='Tillbaka'/>
        </section>
    );
}

export default ShirtsMen;