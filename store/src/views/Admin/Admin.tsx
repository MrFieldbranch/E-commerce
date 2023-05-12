import { addDoc, collection } from 'firebase/firestore';
import Button from '../../components/Button/Button';
import './Admin.css';
import { useState } from "react";
import { db, storage } from '../../firestore-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';




function Admin() {

    const [nameInput, setNameInput] = useState("Produktnamn");
    const [selectedFile, setSelectedFile] = useState<File | undefined>();
    const [price, setPrice] = useState(0);
    const [descriptionInput, setDescriptionInput] = useState("Beskriv produkten här");
    const [sexInput, setSexInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("");

    const dbRef = db;
    const clothesCollectionRef = collection(dbRef, "clothes");

    const imageSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files ? event.target.files[0] : undefined;
        setSelectedFile(file || undefined);
    };

    const finishAddingProduct = async (url: string) => {
        await addDoc(clothesCollectionRef, {
            name: nameInput,
            imageUrl: url,
            price: price,
            description: descriptionInput,
            sex: sexInput,
            type: categoryInput,
        });
    };

    const addNewProduct = () => {
        if (selectedFile == undefined) {
            alert("Välj en bild på produkten att ladda upp!");
            return;
        }
        const imageRef = ref(storage, `clothes/${selectedFile.name + v4()}`);
        uploadBytes(imageRef, selectedFile).then(() => {
            alert("Bild uppladdad!");
            getDownloadURL(imageRef).then((url) => {
                finishAddingProduct(url);
            });
        });
    };



    return (
        <section className='add-new-product' >
            <h1>Välkommen administratör!</h1>
            <h3>Lägg till ny produkt:</h3>
            <hr />
            <form>
                <div className='separation'>
                    <label htmlFor="name">Produktnamn</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                    />
                </div>
                <div className='separation'>
                    <label htmlFor="image">Bild</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={imageSelectedHandler}
                        required
                    />
                </div>
                <div className='separation'>
                    <label htmlFor="price">Pris i kr</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        onChange={(e) => setPrice(e.target.valueAsNumber)}
                        required
                    />
                </div>
                <div className='separation'>
                    <label htmlFor="description">Beskrivning</label>
                    <textarea
                        name="description"
                        id="description"
                        maxLength={500}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                        required
                    />
                </div>
                <div className='separation'>
                    <label htmlFor="sex">Välj herr eller dam</label>
                    <select
                        name="sex"
                        id="sex"
                        onChange={(e) => setSexInput(e.target.value)}
                        required
                    >
                        <option value="" disabled selected></option>
                        <option value="Herr">Herr</option>
                        <option value="Dam">Dam</option>
                    </select>
                </div>
                <div className='separation'>
                    <label htmlFor="type">Kategori</label>
                    <select
                        name="type"
                        id="type"
                        onChange={(e) => setCategoryInput(e.target.value)}
                        required
                    >
                        <option value="" disabled selected></option>
                        <option value="Tröja">Tröja</option>
                        <option value="Byxor">Byxor</option>
                        <option value="Skjorta">Skjorta</option>
                        <option value="Skor">Skor</option>
                    </select>
                </div>
            </form>
            <button type='button' onClick={addNewProduct}>Spara</button>

            <Button routeName="/start" buttonName="Tillbaka till startsidan" />
        </section>
    );
}

export default Admin;



