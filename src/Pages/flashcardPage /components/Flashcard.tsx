import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useSwiperSlide } from "swiper/react";
import "../css/Flashcard.scss";
import Rating from "@mui/material/Rating";
import { CardContext } from "../../../Context";
import { Button, Divider } from "@mui/material";

type Props = {
  card: {
    id: string;
    type: string;
    attributes: {
      category: string;
      competenceRating: number;
      frontSide: string;
      backSide: string;
      userId: string;
    };
  };
};

function Card({ card }: Props) {
  const [onFront, setOnFront] = useState(true);
  const swiperSlider = useSwiperSlide();
  const { setCurrentCard } = useContext(CardContext);
  const { deck } = useParams();

  useEffect(() => {
    if (swiperSlider.isActive) {
      setCurrentCard(card);
    }
  }, [swiperSlider.isActive, deck]);

  const handleClick = () => {
    setOnFront(onFront ? false : true);
  };

  const renderFront = () => {
    return (
      <div className="flashcard-front">
        <Rating
          name="read-only"
          value={card.attributes.competenceRating}
          readOnly
          className="rating"
        />
        <h2>Question:</h2>
        <p>{card.attributes.frontSide}</p>
        <Button
          onClick={() => handleClick()}
          className="toggle-flashcard-button"
          variant="contained"
        >
          Flip To Back
        </Button>
        <div className="flashcard-footer">
          <span>{card.attributes.category}</span>|<span>{card.id}</span>
        </div>
      </div>
    );
  };

  const renderBack = () => {
    return (
      <div className="flashcard-back">
        <Rating
          name="read-only"
          value={card.attributes.competenceRating}
          readOnly
          className="rating"
        />
        <h2>Notes:</h2>
        <p>{card.attributes.backSide}</p>
        <Button
          variant="contained"
          onClick={() => handleClick()}
          className="toggle-flashcard-button"
        >
          Flip To Front
        </Button>
        <div className="flashcard-footer">
          <span>{card.attributes.category}</span>
          {"  "}|{"  "}
          <span>{card.id}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flashcard-container">
      {onFront ? renderFront() : renderBack()}
    </div>
  );
}

export default Card;
