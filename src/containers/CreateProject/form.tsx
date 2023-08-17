import React from "react";
import Input from "../../components/Input";
import { FormikProps, withFormik } from "formik";
import { Indicator } from "../../models/indicator";

type FormValues = Indicator.Input;

type FormProps = {
  onSubmit: (values: FormValues) => void;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  values,
  setFieldValue,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-6 p-6 border border-gray-200 mb-8"
    >
      <div className="flex flex-col gap-5 w-5/5">
        <Input
          name="name"
          onChange={(e) => setFieldValue("name", e.target.value)}
          placeholder="Nome do projeto"
          type="string"
          value={values.name}
        />

        <Input
          name="description"
          onChange={(e) => setFieldValue("description", e.target.value)}
          placeholder="Descrição do projeto"
          type="string"
          value={values.description}
        />

        <Input
          name="city"
          onChange={(e) => setFieldValue("city", e.target.value)}
          placeholder="Cidade"
          type="string"
          value={values.city}
        />

        <Input
          name="total_residencial_electricity_use"
          onChange={(e) =>
            setFieldValue("total_residential_electricity_use", e.target.value)
          }
          placeholder="Uso de energia elétrica residencial total(kWh)"
          type="number"
          value={values.total_residential_electricity_use}
        />

        <Input
          name="number_of_people_with_regular_connection"
          onChange={(e) =>
            setFieldValue(
              "number_of_people_with_regular_connection",
              e.target.value
            )
          }
          placeholder="Número de habitantes com ligação regular à rede de distribuição"
          type="number"
          value={values.number_of_people_with_regular_connection}
        />

        <Input
          name="total_electricity_use"
          onChange={(e) =>
            setFieldValue("total_electricity_use", e.target.value)
          }
          placeholder="Uso total de energia elétrica (kWh)"
          type="number"
          value={values.total_electricity_use}
        />

        <Input
          name="population"
          onChange={(e) => setFieldValue("population", e.target.value)}
          placeholder="População total"
          type="number"
          value={values.population}
        />

        <div className="flex gap-2">
          <Input
            name="total_electricity_consumption_in_public_buildings"
            onChange={(e) =>
              setFieldValue(
                "total_electricity_consumption_in_public_buildings",
                e.target.value
              )
            }
            placeholder="Consumo total de energia elétrica em edifícios públicos(kWh)"
            type="number"
            value={values.total_electricity_consumption_in_public_buildings}
          />
          <Input
            name="total_area_of_these_buildings"
            onChange={(e) =>
              setFieldValue("total_area_of_these_buildings", e.target.value)
            }
            placeholder="Área total destes edifícios (𝑚2)"
            type="number"
            value={values.total_area_of_these_buildings}
          />
        </div>

        <div className="flex gap-2">
          <Input
            name="total_electricity_consumption_produced_from_renewable"
            onChange={(e) =>
              setFieldValue(
                "total_electricity_consumption_produced_from_renewable",
                e.target.value
              )
            }
            placeholder="Consumo total de energia elétrica produzida a partir de fontes renováveis"
            type="number"
            value={values.total_electricity_consumption_produced_from_renewable}
          />

          <Input
            name="total_energy_consumption"
            onChange={(e) =>
              setFieldValue("total_energy_consumption", e.target.value)
            }
            placeholder="Consumo total de energia"
            type="number"
            value={values.total_energy_consumption}
          />
        </div>

        <div className="flex gap-2">
          <Input
            name="total_number_of_consumer_interruptions"
            onChange={(e) =>
              setFieldValue(
                "total_number_of_consumer_interruptions",
                e.target.value
              )
            }
            placeholder="Número total de interrupções ao consumidor"
            type="number"
            value={values.total_number_of_consumer_interruptions}
          />
          <Input
            name="total_number_of_consumers_served"
            onChange={(e) =>
              setFieldValue("total_number_of_consumers_served", e.target.value)
            }
            placeholder="Número total de consumidores atendidos"
            type="number"
            value={values.total_number_of_consumers_served}
          />
        </div>

        <div className="flex gap-2">
          <Input
            name="sum_of_the_duration_of_all_interruptions"
            onChange={(e) =>
              setFieldValue(
                "sum_of_the_duration_of_all_interruptions",
                e.target.value
              )
            }
            placeholder="Soma da duração de todas as interrupções(h)"
            type="number"
            value={values.sum_of_the_duration_of_all_interruptions}
          />
          <Input
            name="total_number_of_interruptions"
            onChange={(e) =>
              setFieldValue("total_number_of_interruptions", e.target.value)
            }
            placeholder="Número total de interrupções"
            type="number"
            value={values.total_number_of_interruptions}
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex mt-5 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Salvar
      </button>
    </form>
  );
};

const ProjectForm = withFormik<FormProps, FormValues>({
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(Form);

export default ProjectForm;
