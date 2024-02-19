import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Not Found!</h1>
            <p>
                <i>{error.statusText}</i>
            </p>
        </div>
    );
}

export default NotFoundPage
