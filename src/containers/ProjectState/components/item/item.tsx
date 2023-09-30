import React from "react";
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import {
  Chart,
  Indicator,
  MAPPED_INDICATORS,
} from "../../../../models/indicator";

type Props = {
  charts: Chart[];
  isCity?: boolean;
  indicatorLabel: keyof Indicator.Model;
};

const IndicatorByItem: React.FC<Props> = ({
  charts,
  isCity = false,
  indicatorLabel,
}) => {
  return (
    <div>
      <Card style={{ margin: "16px" }}>
        <CardContent>
          <Typography variant="h5" color="textSecondary" align="center">
            <strong>{MAPPED_INDICATORS[indicatorLabel]}</strong>
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1" color="textSecondary" align="left">
              <strong>{isCity ? "Cidade" : "Estado"}</strong>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" align="right">
              <strong>Resultado</strong>
            </Typography>
          </Box>
          {charts.map((chart) => (
            <Grid container alignItems="center" key={chart.label}>
              <Grid item xs={3}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  align="left"
                >
                  {chart.label}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <LinearProgress
                  sx={{ color: "secondary", backgroundColor: "lightgrey" }}
                  variant="determinate"
                  value={50}
                />
              </Grid>
            </Grid>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default IndicatorByItem;
