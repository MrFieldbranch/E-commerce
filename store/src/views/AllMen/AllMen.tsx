import { useEffect, useState } from 'react';
import './AllMen.css';
import { IClothes } from '../../interfaces';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firestore-config';
import ProductForGrid from '../../components/ProductForGrid/ProductForGrid';
import Button from '../../components/Button/Button';

function AllMen() {
    const [allMen, setAllMen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getAllMen = async () => {
        const q = query(clothesCollectionRef, where("sex", "==", "Herr"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setAllMen(result);
    }

    useEffect(() => {
        getAllMen()
    }, []);
    
    const allArrayMen = allMen.map((x) => (
        <ProductForGrid key={x.id}
            name={x.name}
            imageLink={x.imageUrl}
            altName={x.altName}
            price={x.price}
        />
    ));
    
    return (
        <section className='category-page'>
            <h1>Hela utbudet för herrar</h1>
            <div className='display-products'>
                {allArrayMen}
            </div>
            <Button routeName='/start' buttonName='Tillbaka'/>
        </section>
    );
}

export default AllMen;