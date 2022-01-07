/*
 
   _   _ _   _  ____ ___  _   _ _____ ____   ___  _     _     _____ ____  
  | | | | \ | |/ ___/ _ \| \ | |_   _|  _ \ / _ \| |   | |   | ____|  _ \ 
  | | | |  \| | |  | | | |  \| | | | | |_) | | | | |   | |   |  _| | | | |
  | |_| | |\  | |__| |_| | |\  | | | |  _ <| |_| | |___| |___| |___| |_| |
   \___/|_|_\_|\____\___/|_|_\_| |_| |_|_\_\\___/|_____|_____|_____|____/ 
   / ___/ _ \|  \/  |  _ \ / _ \| \ | | ____| \ | |_   _|                 
  | |  | | | | |\/| | |_) | | | |  \| |  _| |  \| | | |                   
  | |__| |_| | |  | |  __/| |_| | |\  | |___| |\  | | |                   
   \____\___/|_|  |_|_|    \___/|_| \_|_____|_| \_| |_|                   
                                                                          
 
*/

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
        textTitle.current.value = "";
        hexColor.current.value = "";
    };

    return (
        <form className="form" onSubmit={submit}>
            <input
                id="txtInput"
                ref={textTitle}
                type="text"
                placeholder="Color Title..."
                required
            />
            <input id="hexInput" ref={hexColor} type="color" required />
            <button className="btn">ADD</button>
        </form>
    );
};

export default AddColorForm;

/*
 
    ____ ___  _   _ _____ ____   ___  _     _     _____ ____  
   / ___/ _ \| \ | |_   _|  _ \ / _ \| |   | |   | ____|  _ \ 
  | |  | | | |  \| | | | | |_) | | | | |   | |   |  _| | | | |
  | |__| |_| | |\  | | | |  _ <| |_| | |___| |___| |___| |_| |
   \____\___/|_| \_| |_|_|_|_\_\\___/|_____|_____|_____|____/ 
   / ___/ _ \|  \/  |  _ \ / _ \| \ | | ____| \ | |_   _|     
  | |  | | | | |\/| | |_) | | | |  \| |  _| |  \| | | |       
  | |__| |_| | |  | |  __/| |_| | |\  | |___| |\  | | |       
   \____\___/|_|  |_|_|    \___/|_| \_|_____|_| \_| |_|       
                                                              
 
*/

// import { useState } from "react";

// const AddColorForm = ({ onNewColor = (f) => f }) => {
//     const [title, setTitle] = useState("");
//     const [color, setColor] = useState("#000000");

//     const submit = (e) => {
//         e.preventDefault();
//         onNewColor(title, color);
//         setTitle("");
//         setColor("");
//     };
//     return (
//         <form onSubmit={submit}>
//             <input
//                 value={title}
//                 onChange={(event) => setTitle(event.target.value)}
//                 type="text"
//                 placeholder="color title..."
//                 required
//             />
//             <input
//                 value={color}
//                 onChange={(event) => setColor(event.target.value)}
//                 type="text"
//                 required
//             />
//             <button>ADD</button>
//         </form>
//     );
// };

// export default AddColorForm;

/*
 
    ____ _   _ ____ _____ ___  __  __       _   _  ___   ___  _  __
   / ___| | | / ___|_   _/ _ \|  \/  |     | | | |/ _ \ / _ \| |/ /
  | |   | | | \___ \ | || | | | |\/| |_____| |_| | | | | | | | ' / 
  | |___| |_| |___) || || |_| | |  | |_____|  _  | |_| | |_| | . \ 
   \____|\___/|____/ |_| \___/|_|  |_|     |_| |_|\___/ \___/|_|\_\
                                                                   
 
*/

// import { useInput } from "./custom-hook";

// const AddColorForm = ({ onNewColor = (f) => f }) => {
//     const [titleProps, resetTitle] = useInput("");
//     const [colorProps, resetColor] = useInput("#000000");

//     const submit = (e) => {
//         e.preventDefault();
//         onNewColor(titleProps.value, colorProps.value);
//         resetTitle();
//         resetColor();
//     };

//     return (
//         <form onSubmit={submit}>
//             <input
//                 {...titleProps}
//                 type="text"
//                 placeholder="color title..."
//                 required
//             />
//             <input {...colorProps} type="text" required />
//             <button>ADD</button>
//         </form>
//     );
// };

// export default AddColorForm;
