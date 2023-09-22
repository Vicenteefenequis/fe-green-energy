import React from 'react';
import { Card, CardContent, LinearProgress, Typography, Box, Grid } from '@mui/material';
import BrazilMap from './BrazilMap';

const IndicatorByItem: React.FC<CardListProps> = ({ cardsData }) => {
  return (
    <div>
      {cardsData.map((card) => (
        
        <Card key={card.title} style={{ margin: '16px' }}>
          <CardContent>
          <Typography variant="h5" color="textSecondary" align="center">
        Uso de energia elétrica residencial per capita(KWh/ano)
              </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle1" color="textSecondary" align="left">
                Estado
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" align="right">
                Resultado
              </Typography>
            </Box>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="textSecondary" align="left">
                  {card.title}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <LinearProgress
                  sx={{ height: 20, width: '100%' }}
                  variant="determinate"
                  value={card.chartData[1].value}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="textSecondary" align="right">
                  {`${card.chartData[1].value}%`}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IndicatorByItem;
