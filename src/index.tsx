import * as React from "react";
import * as ReactDOM from "react-dom";
import Test from "./test";



const App = () => {
    const env = process.env.NODE_ENV

    return (
        <div>
            <h1>{new Test().getName()} </h1>

        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));