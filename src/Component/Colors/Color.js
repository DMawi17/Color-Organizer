import StarRating from "../Ratings/StarRating";
import { FaTrashAlt } from "react-icons/fa";

const Color = ({
    id,
    title,
    color,
    rating,
    onRemove = (f) => f,
    onRate = (f) => f,
}) => {
    return (
        <section style={{ width: 300, margin: "20px" }}>
            <h1 style={{ textAlign: "center", marginTop: "1em" }}>
                {title}{" "}
                <button
                    style={{
                        background: "none",
                        border: "none",
                    }}
                    onClick={() => onRemove(id)}
                >
                    <FaTrashAlt style={{ fontSize: 30 }} />
                </button>
            </h1>

            <div
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color,
                    margin: "auto",
                }}
            />
            <StarRating
                selectedStars={rating}
                onRate={(rating) => onRate(id, rating)}
            />
        </section>
    );
};

export default Color;
