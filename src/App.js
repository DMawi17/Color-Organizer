import { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./Component/Colors/ColorList";
import "./App.css";

export default function App() {
    const [colors] = useState(colorData);
    return (
        <div className="App">
            <ColorList colors={colors} />
        </div>
    );
}
