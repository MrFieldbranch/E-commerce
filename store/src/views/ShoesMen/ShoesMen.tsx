import { useEffect, useState } from "react";
import { IClothes } from "../../interfaces";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firestore-config";
import ProductForGrid from "../../components/ProductForGrid/ProductForGrid";
import Button from "../../components/Button/Button";
import './ShoesMen.css';

function ShoesMen() {
    const [shoesMen, setShoesMen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getShoesMen = async () => {
        const q = query(clothesCollectionRef, where("type", "==", "Skor"), where("sex", "==", "Herr"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setShoesMen(result);
    }

    useEffect(() => {
        getShoesMen()
    }, []);

    const shoesArrayMen = shoesMen.map((x) => (
        <ProductForGrid key={x.id} 
                        name={x.name} 
                        imageLink={x.imageUrl} 
                        altName={x.altName} 
                        price={x.price} 
        />
    ));

    return (
        <section className="category-page">
            <h1>Skor Herr</h1>
            <div className="display-products">
                {shoesArrayMen}
            </div>
            <Button routeName="/start" buttonName="Tillbaka" />
        </section>
    );
}

export default ShoesMen;