import { useEffect, useState } from "react";
import { IClothes } from "../../interfaces";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firestore-config";
import ProductForGrid from "../../components/ProductForGrid/ProductForGrid";
import Button from "../../components/Button/Button";
import './AllWomen.css';

function AllWomen() {
    const [allWomen, setAllWomen] = useState<IClothes[]>([]);
    const clothesCollectionRef = collection(db, "clothes");

    const getAllWomen = async () => {
        const q = query(clothesCollectionRef, where("sex", "==", "Dam"))
        const data = await getDocs(q);
        const result = data.docs.map((doc) => ({
            ...(doc.data() as IClothes), id: doc.id,
        }))
        setAllWomen(result);
    }

    useEffect(() => {
        getAllWomen()
    }, []);

    const allArrayWomen = allWomen.map((x) => (
        <ProductForGrid key={x.id}
            name={x.name}
            imageLink={x.imageUrl}
            altName={x.altName}
            price={x.price}
        />
    ));

    return (
        <section className="category-page">
            <h1>Hela utbudet för damer</h1>
            <div className='display-products'>
                {allArrayWomen}
            </div>
            <Button routeName='/start' buttonName='Tillbaka'/>
        </section>
    );
}

export default AllWomen;