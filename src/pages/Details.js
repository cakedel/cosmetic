import React from "react";
import { useParams } from "react-router-dom";

const liStyle = {
  display: "inline-block",
  width: "20px",
  height: "20px",
  background: "#ddd",
};

const Details = ({ list }) => {
  const { num } = useParams();
  const match = list.find((it) => String(it.id) === num);
  return (
    <>
      <img
        src={match.image_link}
        onError={(e) =>
          (e.target.src = process.env.PUBLIC_URL + "/assets/img/recommand01.jpg")
        }
        alt=""
      />
      <div>{match.name}</div>
      <div>{match.price} 원</div>
      <div>{match.description.substring(0, 30)} ...</div>
      <ul>
        {match.product_colors.map((color) => (
          <li key={color.id} style={{ ...liStyle, background: color.hex_value }}>color</li>
        ))}
      </ul>
    </>
  );
};

export default Details;
