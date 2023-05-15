import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { IClothes } from "../../interfaces";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firestore-config";
import ProductForGrid from "../../components/ProductForGrid/ProductForGrid";
import './ShoesWomen.css';

function ShoesWomen() {
    const [shoesWomen, setShoesWomen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getShoesWomen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Skor"), where("sex", "==", "Dam"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setShoesWomen(result);
    }

    useEffect(() => {
        getShoesWomen()
    }, []);

    const shoesArrayWomen = shoesWomen.map((x) => (
        <ProductForGrid key={x.id} 
                        name={x.name} 
                        imageLink={x.imageUrl} 
                        altName={x.altName} 
                        price={x.price} 
        />
    ));

    return (
        <section className="category-page">
            <h1>Skor Dam</h1>
            <div className='display-products'>
                {shoesArrayWomen}
            </div>
            <Button routeName="/start" buttonName="Tillbaka"/>
        </section>
    );
}

export default ShoesWomen;