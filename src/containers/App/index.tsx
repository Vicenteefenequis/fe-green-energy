import * as React from 'react';
import Header from '../../components/Header';
import { useProjectListQuery } from '../../queries/useProjectListQuery';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
import RenderIf from '../../components/RenderIf';
import Swap from '../../components/Swap';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AlertDialog from '../../components/Dialog';

export default function App() {

  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const { data: projects, isLoading: isLoadingMeIndicators } =
    useProjectListQuery();


  return (
    <>
      <Header />


      <Loader isLoading={isLoadingMeIndicators} />

      <Box sx={{ mx: 5, my: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Listagem de projetos para comparação de indicadores
        </Typography>

        <Typography variant="body1" >
          Navegue ou crie novos projetos e obtenha uma visão detalhada dos indicadores de cada iniciativa em prol da sustentabilidade e energia limpa.
        </Typography>
      </Box>

      <RenderIf condition={!isLoadingMeIndicators}>
        <Swap
          condition={!!projects?.results.length}
          WhenFalse={
            <Card variant="outlined" sx={{ mx: 5, my: 5 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Você não tem nenhum projeto atualmente.
                </Typography>
              </CardContent>
            </Card>
          }
          WhenTrue={projects?.results.map((project, key) => (
            <Card onClick={() => navigate(`/projeto/${project.id}`)} variant="outlined" key={key} sx={{
              mx: 5,
              my: 5,
              ":hover": {
                cursor: 'pointer'
              }
            }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {project.description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {project.location_name}
                </Typography>
                <Typography variant="body2">
                  {project.created_at}
                </Typography>
              </CardContent>

            </Card>
          ))}
        />

        <Button
          sx={{ mx: 5, my: 5 }}
          color="primary"
          variant="contained"
          size="small"
          onClick={handleDialogOpen}
          endIcon={<ArrowForwardIosIcon />}
        >
          Criar novo projeto
        </Button>
      </RenderIf>

      <AlertDialog open={open} handleClose={handleClose} />
    </>
  );
}
