import Button from "../../components/Button/Button";
import "./ErrorPage.css";

function ErrorPage() {

    return (
        <div>
            <h1>Error 404</h1>
            <h1>Oops! Något blev fel. Klicka nedan för att komma tillbaka till startsidan.</h1>
            <Button buttonName="Tillbaka till startsidan" />
        </div>
    );
}

export default ErrorPage;