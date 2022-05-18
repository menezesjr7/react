import react from "react";
import reactDom from "react-dom";
import "./style.css"

const App = () => {
    return (
        <div className="App">
            Hello World
        </div>
    )
}

const rootElement = document.getElementById("root")

reactDom.render(<App />, rootElement    )