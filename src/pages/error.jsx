import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Error!</h1>
            <p>
                <i>{error.statusText}</i>
            </p>
        </div>
    );
}

export default ErrorPage
