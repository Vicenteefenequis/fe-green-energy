import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useIndicatorById } from "../../queries/useIndicator";
import Loader from "../../components/Loader";
import Chart from "react-google-charts";

const OPTIONS = {
  vAxis: { title: "Porcentagem" },
  hAxis: { title: "Cidades" },
  seriesType: "bars",
  series: { 1: { type: "line" } },
};

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: indicators, isLoading: isLoadingIndicator } = useIndicatorById(
    id || ""
  );


  return (
    <>
      <Header />
      <Loader isLoading={isLoadingIndicator} />

      {indicators?.map((indicator, key) => (
        <Chart
          key={key}
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={[
            ["Cidades", `${indicator.unit}`, "Media"],
            ...indicator?.data.map((data) => [
              data.location_name,
              data.value,
              indicator.average
            ]) || [],
          ]}
          options={{
            ...OPTIONS,
            title: indicator.name,
          }}
        />
      ))}

    </>
  );
};

export default Project;
