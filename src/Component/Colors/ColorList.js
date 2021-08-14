import Color from "./Color";

const ColorList = ({ colors = [] }) => {
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <>
            {colors.map((color) => (
                <Color key={color.id} {...color} />
            ))}
        </>
    );
};

export default ColorList;
