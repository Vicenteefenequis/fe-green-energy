import React from 'react';
import { Card, CardContent, LinearProgress, Typography, Box, Grid } from '@mui/material';

const IndicatorByItem: React.FC = () => {
  const cardsData: CardData = {
    titles: [
      {
        title: "Uso de energia elétrica residencial per capita(KWh/ano)",
        states: [
          {
            name: "Goiás",
            content: "GO",
            chartData: 
              {value: 14 },
            
          },
          {
            name: "Amazonas",
            content: "AM",
            chartData: 
              {value: 95 },
        
          },
        ],
      },
      {
        title: "Número de habitantes com ligação regular à rede de distribuição",
        states: [
          {
            name: "Paraná",
            content: "PR",
            chartData: 
              {value: 22 },
            
          },
          {
            name: "Santa Catarina",
            content: "SC",
            chartData: 
              {value: 64 },
            
          },
          {
            name: "Goiás",
            content: "GO",
            chartData: 
              {value: 25 },
            
          },
          
        ],
      },
      {
        title: "Uso total de energia elétrica (kWh)",
        states: [
          {
            name: "São Paulo",
            content: "SP",
            chartData: 
              {value: 25 },
            
          },
          {
            name: "Rio de Janeiro",
            content: "RJ",
            chartData: 
              {value: 54 },
            
          },
          {
            name: "Minas Gerais",
            content: "MG",
            chartData: 
              {value: 69 },
            
          },
          
        ],
      },
  
      {
        title: "Consumo total de energia elétrica em edifícios públicos(kWh)",
        states: [
          {
            name: "Maranhão",
            content: "MA",
            chartData: 
              {value: 58 },
            
          },
          {
            name: "Bahia",
            content: "BA",
            chartData: 
              {value: 98 },
            
          },
          {
            name: "Sergipe",
            content: "SE",
            chartData: 
              {value: 74 },
          },
        ],
      },
  
      {
        title: "Consumo total de energia elétrica em edifícios públicos(kWh)",
        states: [
  
          {
            name: "Paraná",
            content: "SC",
            chartData: 
              {value: 74 },
          },
        ],
      },
  
      {
        title: "Consumo total de energia elétrica em edifícios públicos(kWh)",
        states: [
  
          {
            name: "Paraná",
            content: "SC",
            chartData: 
              {value: 74 },
          },
        ],
      },
  
      
      {
        title: "Área total destes edifícios (𝑚2)",
        states: [
          {
            name: "São Paulo",
            content: "SP",
            chartData: 
              {value: 360 },
          },
        ],
      },
      {
        title: "Consumo total de energia",
        states: [
          {
            name: "Goiás",
            content: "GO",
            chartData: 
              {value: 220 },
          },
        ],
      },
    ],
    
  };
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
