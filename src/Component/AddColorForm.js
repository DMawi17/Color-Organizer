/* Uncontrolled Component

import { useRef } from "react";

const AddColorForm = ({ onNewColor = (f) => f }) => {
    const textTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = textTitle.current.value;
        const color = hexColor.current.value;
      onNewColor(title, color);
      // Mutating the value attr of DOM nodes. This is imperative code.
        textTitle.current.value = ""; // it makes the this component to be -
        hexColor.current.value = ""; 
    };

    return (
        <form onSubmit={submit}>
            <input
                ref={textTitle}
                type="text"
                placeholder="color title..."
                required
            />
            <input ref={hexColor} type="color" required />
            <button>Add</button>
        </form>
    );
};

export default AddColorForm; */

/* Controlled Component

import { useState } from "react";

const AddColorForm = ({ onNewColor = (f) => f }) => {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
    };
    return (
        <form onSubmit={submit}>
            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                value={color}
                onChange={(event) => setColor(event.target.value)}
                type="text"
                required
            />
            <button>ADD</button>
        </form>
    );
};

export default AddColorForm; */

//.. Custom-Hook

import { useInput } from "./custom-hook";

const AddColorForm = ({ onNewColor = (f) => f }) => {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="text" required />
            <button>ADD</button>
        </form>
    );
};

export default AddColorForm;
