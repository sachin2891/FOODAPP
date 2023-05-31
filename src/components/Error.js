import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (<div className="error">
        <h1>OOPS!!</h1>
        {console.log(err)}
        <h2>something went wrong</h2>
        <h3>{err.status}</h3>
        <h3>{err.data
        }</h3>
    </div>)
}
export default Error;