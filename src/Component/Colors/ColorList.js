import Color from "./Color";

const ColorList = ({
    colors = [],
    onRemoveColor = (f) => f,
    onRateColor = (f) => f,
}) => {
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <>
            {colors.map((color) => (
                <Color
                    key={color.id}
                    {...color}
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                />
            ))}
        </>
    );
};

export default ColorList;
