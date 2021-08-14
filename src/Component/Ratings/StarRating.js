import Star from "./Star";
import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
    const createArray = (length) => [...Array(length)];
    const [selectedStars, setSelectedStars] = useState();

    return (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
};

export default StarRating;
