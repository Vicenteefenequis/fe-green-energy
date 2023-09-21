import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomChart from "../ProjectMain/Charts";

const CardList: React.FC<CardListProps> = ({ cardsData, onCardClick }) => {
  return (
    <div>
      {cardsData.map((card, nomeEstado) => (
        <Card
          key={nomeEstado}
          onClick={() => onCardClick(card.title)}
          style={{
            marginBottom: "16px",
            marginTop: "8px",
            marginLeft: "20px",
            marginRight: "20px",
            background: "#32CD32",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" color={"#F8F8FF"}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" color={"#F8F8FF"}>
              {card.content}
            </Typography>
          </CardContent>
          <CustomChart data={card.chartData} chartType={"BarChart"} />
        </Card>
      ))}
    </div>
  );
};

export default CardList;
