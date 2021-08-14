import StarRating from "../Ratings/StarRating";

const Color = ({ title, color, rating }) => {
    return (
        <section style={{ width: 250, margin: "20px auto" }}>
            <h1 style={{ textAlign: "center", marginTop: "1em" }}>{title}</h1>
            <div
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color,
                    margin: "auto",
                }}
            />
            <StarRating selectedStars={rating} />
        </section>
    );
};

export default Color;
