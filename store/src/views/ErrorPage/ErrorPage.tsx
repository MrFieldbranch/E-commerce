import Button from "../../components/Button/Button";
import "./ErrorPage.css";

function ErrorPage() {

    return (
        <div className="error-page">
            <h3>Error 404</h3>
            <p>Oops! Något blev fel. Klicka nedan för att komma tillbaka till startsidan.</p>
            <Button routeName="/start" buttonName="Tillbaka till startsidan" />
        </div>
    );
}

export default ErrorPage;