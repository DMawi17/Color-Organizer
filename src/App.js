import { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./Component/Colors/ColorList";
import AddColorForm from "./Component/AddColorForm";
import "./App.css";
import { v4 } from "uuid";

export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <div className="App">
            <AddColorForm
                onNewColor={(title, color) => {
                    const newColors = [
                        ...colors,
                        { id: v4(), rating: 0, title, color },
                    ];
                    setColors(newColors);
                }}
            />

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
