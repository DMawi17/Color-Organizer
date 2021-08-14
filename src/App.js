import { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./Component/Colors/ColorList";
import "./App.css";

export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <div className="App">
            <ColorList
                colors={colors}
                onRemoveColor={(id) => {
                    const newColors = colors.filter((color) => color.id !== id);
                    setColors(newColors);
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map((color) =>
                        color.id === id ? { ...color, rating } : color
                    );
                    setColors(newColors);
                }}
            />
        </div>
    );
}
