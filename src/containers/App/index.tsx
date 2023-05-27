import { Chart } from 'react-google-charts';
import Modal from 'react-modal';
import { useState } from 'react';
import Header from '../../components/Header';
import { useIndicatorListQuery } from '../../queries/useIndicatorListQuery';
import CreateIndicatorForm from './form';
import { useIndicatorMutation } from '../../queries/useIndicatorMutation';
import { MAPPED_INDICATORS } from '../../models/indicator';
import MapComponent from './map';

export const options = {
  vAxis: { title: 'Porcentagem' },
  hAxis: { title: 'Cidades' },
  seriesType: 'bars',
  series: { 1: { type: 'line' } },
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const customStyleMap = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: 'none',
    padding: '0',
    width: '80%',
    height: '80%',
    maxHeight: 'none',
    maxWidth: 'none',
  },
};

export default function App() {
  const { data: indicators } = useIndicatorListQuery();
  const { mutate: mutateIndicator } = useIndicatorMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMapModal, setShowMap] = useState(false);

  
  

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

      <button
        onClick={() => setIsOpen(true)}
        className="rounded-500 bg-blue-500 mx-5 my-5 text-white  hover:bg-sky-700"
      >
        Adicionar nova informação de cidade
      </button>

      <button
      onClick={() => setShowMap(true)}

      className="rounded-500 bg-green-500 mx-5 my-5 text-white  hover:bg-sky-700"
      >
        Visualizar mapa
      </button>
      </div>

      <div className="flex flex-wrap px-8 gap-3">
        {indicators?.map((indicator) => (
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={[
              ['Cidades', 'Porcentagem', 'Média'],
              ...indicator.cities.map((city) => [
                city.name,
                city.result,
                indicator.average,
              ]),
            ]}
            options={{
              ...options,
              title: MAPPED_INDICATORS[indicator.indicator],
            }}
          />
        ))}
      </div>


 <Modal
  isOpen={isOpenMapModal}
  onRequestClose={() => setShowMap(false)}
  style={customStyleMap}
  contentLabel='Mapa Energético'>
  <MapComponent />
</Modal>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Criar cidade"
        style={customStyles}
      >
        <CreateIndicatorForm
          onSubmit={(value) => {
            mutateIndicator(value);
            setIsOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
// const data = {
//   labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
//   datasets: [
//     {
//       label: 'Dados do Gráfico de Barras',
//       data: [10, 20, 30, 40, 50],
//       backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       borderColor: 'rgba(75, 192, 192, 1)',
//       borderWidth: 1,
//     },
//   ],
// };

// {
//   "indicator": "residential_electricity_consumption_pcp",
//   "cities": [
//       {
//           "name": "GUADALARAJA",
//           "result": 2.440085925095732
//       },
//       {
//           "name": "GOIÂNIA",
//           "result": 2.353211009174312
//       },
//       {
//           "name": "BOGOTÁ",
//           "result": 0.026492489131838333
//       },
//       {
//           "name": "BUENOS AIRES",
//           "result": 0.07031112238552942
//       },
//       {
//           "name": "LEÓN",
//           "result": 1.638967840832881
//       }
//   ],
//   "average": 1.3058136773240585
// }
