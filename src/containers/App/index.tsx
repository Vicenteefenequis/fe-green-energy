import * as React from 'react';
import Button from '@mui/material/Button';
import Header from '../../components/Header';
import { useIndicatorListQuery } from '../../queries/useIndicatorListQuery';
import Loader from '../../components/Loader';
import { Link, useNavigate } from 'react-router-dom';
import RenderIf from '../../components/RenderIf';
import { LuMapPin } from 'react-icons/lu';
import Swap from '../../components/Swap';
import AlertDialog from '../../dialogs/Dialog';

export default function App() {
  const { data: indicators, isLoading: isLoadingMeIndicators } =
    useIndicatorListQuery();

  const navigate = useNavigate();

  // Estado para controlar a abertura/fechamento do diálogo
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Header />
      <div className="flex w-full items-center justify-center px-6">
        <div className="w-full mt-6 p-6 bg-white border border-gray-200 shadow">
          <h1 className="mb-2 font-semibold text-3xl tracking-tight text-gray-900">
            Projetos
          </h1>

          <Loader isLoading={isLoadingMeIndicators} />

          <RenderIf condition={!isLoadingMeIndicators}>
            <Swap
              condition={!!indicators?.content.results.length}
              WhenFalse={
                <div className="min-w-7xl mt-6 p-6 border border-gray-200 mb-8">
                  <span>Você não tem nenhum projeto atualmente.</span>
                </div>
              }
              WhenTrue={indicators?.content.results.map((indicator) => (
                <div
                  className="min-w-7xl mt-6 p-6 border border-gray-200 mb-8 bg-gray-50"
                  onClick={() => navigate(`/projeto/${indicator.id}`)}
                >
                  <h1 className="font-bold">{indicator.name.toUpperCase()}</h1>
                  <h4 className="font-medium mt-5 mb-5">
                    {indicator.description}
                  </h4>

                  <div className="flex items-center gap-2">
                    <LuMapPin className="text-zinc-500" />
                    <p className="text-zinc-500">{indicator.city}</p>
                  </div>
                </div>
              ))}
            />
          </RenderIf>
            <AlertDialog/>
        </div>
      </div>
    </>
  );
}
