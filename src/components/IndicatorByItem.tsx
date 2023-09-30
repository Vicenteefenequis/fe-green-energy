import React from 'react';
import { Card, CardContent, LinearProgress, Typography, Box, Grid } from '@mui/material';

const IndicatorByItem: React.FC<CardListProps> = ({ cardsData }) => {
  return (
    <div>
      <Card style={{ margin: '16px' }}>
        <CardContent>
          <Typography variant="h5" color="textSecondary" align="center">
            <strong>Uso de energia elétrica residencial per capita(KWh/ano)</strong>
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1" color="textSecondary" align="left">
              <strong>Estado</strong>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" align="right">
              <strong>Resultado</strong>
            </Typography>
          </Box>
          {cardsData.state.map((state) => (
            <Grid container alignItems="center" key={state.title}>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="textSecondary" align="left">
                  {state.title}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <LinearProgress
                  sx={{ color: 'secondary', backgroundColor: 'lightgrey' }}
                  variant="determinate"
                  value={state.chartData[1].value}
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
