import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import CustomChart from "../../../ProjectMain/Charts";
import { Chart } from "../../../../models/indicator";

type Indicator = {
  title: string;
  content: string;
  chart: Chart[];
};

type Props = {
  indicators: Indicator[];
};

const List: React.FC<Props> = ({ indicators }) => {
  return (
    <div>
      {indicators.map((indicator, key) => (
        <Card
          key={key}
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
              {indicator.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {indicator.content}
            </Typography>
          </CardContent>
          <CustomChart data={indicator.chart} chartType={"BarChart"} />
        </Card>
      ))}
    </div>
  );
};

export default List;
