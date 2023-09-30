import React from 'react';
import { Card, CardContent, LinearProgress, Typography, Box, Grid } from '@mui/material';

const IndicatorByItem: React.FC<CardListProps> = ({ cardsData }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {cardsData.titles.map((titleData) => (
          <Grid item xs={6} key={titleData.title}>
            <Card style={{ margin: '10px', height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="black" align="center">
                  <strong>{titleData.title}</strong>
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography 
                  variant="subtitle1" color="textSecondary" align="left">
                    <strong>Estado</strong>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" align="right">
                    <strong>Resultado</strong>
                  </Typography>
                </Box>
                {titleData.states.map((state) => (
                  <div key={state.name}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle1" color="black" align="left">
                        {state.name}
                      </Typography>
                      {state.chartData && state.chartData && (
                        <Typography variant="subtitle1" color="black" align="right">
                          {`${state.chartData.value}`}
                        </Typography>
                      )}
                    </Box>
                    {state.chartData && state.chartData && (
                      <LinearProgress
                        sx={{
                          backgroundColor: state.chartData.value > 100 ? 'primary.main' : 'lightgrey',
                        }}
                        variant="determinate"
                        value={state.chartData?.value || 0}
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default IndicatorByItem;
