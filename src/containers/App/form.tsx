import { FormikProps, withFormik } from 'formik';
import React from 'react';
import { Indicator } from '../../models/indicator';
import Input from '../../components/Input';

type FormValues = Indicator.Input;

type FormProps = {
  onSubmit: (values: FormValues) => void;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  values,
  setFieldValue,
}) => {
  return (
    <form
      style={{ width: 650 }}
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3"
    >
      <Input
        name="city_name"
        value={values.city_name}
        type="text"
        placeholder="Nome da cidade"
        onChange={(e) => setFieldValue('city_name', e.target.value)}
      />
      <Input
        name="residential_total_electricity_usage"
        value={values.residential_total_electricity_usage}
        type="number"
        placeholder="Uso de energia elétrica residencial total (kWh)"
        onChange={(e) =>
          setFieldValue('residential_total_electricity_usage', e.target.value)
        }
      />
      <Input
        name="regular_connection_population"
        value={values.regular_connection_population}
        type="number"
        placeholder="Nº de habitantes com ligação regular à rede de distribuição"
        onChange={(e) =>
          setFieldValue('regular_connection_population', e.target.value)
        }
      />
      <Input
        name="public_buildings_electricity_consumption"
        value={values.public_buildings_electricity_consumption}
        type="number"
        placeholder="Consumo total de energia elétrica em edifícios públicos (kWh)"
        onChange={(e) =>
          setFieldValue(
            'public_buildings_electricity_consumption',
            e.target.value
          )
        }
      />
      <Input
        name="total_area_of_buildings"
        value={values.total_area_of_buildings}
        type="number"
        placeholder="Área total destes edíficios (m2)"
        onChange={(e) =>
          setFieldValue('total_area_of_buildings', e.target.value)
        }
      />
      <Input
        name="total_renewable_energy_consumption"
        value={values.total_renewable_energy_consumption}
        type="number"
        placeholder="Consumo total de energia elétrica produzida à partir de fontes renováveis"
        onChange={(e) =>
          setFieldValue('total_renewable_energy_consumption', e.target.value)
        }
      />
      <Input
        name="total_energy_consumption"
        value={values.total_energy_consumption}
        type="number"
        placeholder="Consumo total de energia"
        onChange={(e) =>
          setFieldValue('total_energy_consumption', e.target.value)
        }
      />
      <Input
        name="total_electricity_usage"
        value={values.total_electricity_usage}
        type="number"
        placeholder="Uso total de energia elétrica (kWh)"
        onChange={(e) =>
          setFieldValue('total_electricity_usage', e.target.value)
        }
      />
      <Input
        name="total_customer_interruptions"
        value={values.total_customer_interruptions}
        type="number"
        placeholder="Nº total de interrupções ao consumidor"
        onChange={(e) =>
          setFieldValue('total_customer_interruptions', e.target.value)
        }
      />
      <Input
        name="total_customers_served"
        value={values.total_customers_served}
        type="number"
        placeholder="Nº total de consumidores atendidos"
        onChange={(e) =>
          setFieldValue('total_customers_served', e.target.value)
        }
      />
      <Input
        name="total_duration_of_interruptions"
        value={values.total_duration_of_interruptions}
        type="number"
        placeholder="Soma da duração de todas as interrupções (h)"
        onChange={(e) =>
          setFieldValue('total_duration_of_interruptions', e.target.value)
        }
      />
      <Input
        name="total_number_of_interruptions"
        value={values.total_number_of_interruptions}
        type="number"
        placeholder="Nº total de interrupções"
        onChange={(e) =>
          setFieldValue('total_number_of_interruptions', e.target.value)
        }
      />
      <Input
        name="total_population"
        value={values.total_population}
        type="number"
        placeholder="População total"
        onChange={(e) => setFieldValue('total_population', e.target.value)}
      />

      <button className="bg-blue-700 text-gray-100" type="submit">
        Criar
      </button>
    </form>
  );
};

const CreateIndicatorForm = withFormik<FormProps, FormValues>({
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(Form);

export default CreateIndicatorForm;
