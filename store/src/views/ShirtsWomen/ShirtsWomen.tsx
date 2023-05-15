import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { IClothes } from "../../interfaces";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firestore-config";
import ProductForGrid from "../../components/ProductForGrid/ProductForGrid";
import './ShirtsWomen.css';

function ShirtsWomen() {
    const [shirtsWomen, setShirtsWomen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getShirtsWomen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Skjorta"), where("sex", "==", "Dam"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setShirtsWomen(result);
    }

    useEffect(() => {
        getShirtsWomen()
    }, []);

    const shirtsArrayWomen = shirtsWomen.map((x) => (
        <ProductForGrid key={x.id} 
                        name={x.name} 
                        imageLink={x.imageUrl} 
                        altName={x.altName} 
                        price={x.price} 
        />
    ));

    return (
        <section className="category-page">
            <h1>Skjortor Dam</h1>
            <div className='display-products'>
                {shirtsArrayWomen}
            </div>
            <Button routeName="/start" buttonName="Tillbaka" />

        </section>

    );
}

export default ShirtsWomen;