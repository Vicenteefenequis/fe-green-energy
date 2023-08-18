import React, { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useIndicatorById } from "../../queries/useIndicator";
import Loader from "../../components/Loader";
import { useIndicatorCertified } from "../../queries/useIndicatorsCertified";
import Chart from "react-google-charts";
import {
  KEY_INDICATOR,
  KeyIndicator,
  MAPPED_INDICATORS,
} from "../../models/indicator";

const OPTIONS = {
  vAxis: { title: "Porcentagem" },
  hAxis: { title: "Cidades" },
  seriesType: "bars",
  series: { 1: { type: "line" } },
};

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: indicator, isLoading: isLoadingIndicator } = useIndicatorById(
    id || ""
  );

  const { data: indicators, isLoading: isLoadingIndicators } =
    useIndicatorCertified();

  const allIndicators = useMemo(
    () => [...(indicators || []), indicator],
    [indicator, indicators]
  );

  const getAverage = useCallback(
    (key: KeyIndicator) => {
      if (allIndicators) {
        const total = allIndicators.reduce((acc, item) => {
          if (!item) return 0;
          return acc + (item[key] as number);
        }, 0);
        const average = total / allIndicators.length;
        return average;
      }
    },
    [allIndicators]
  );

  return (
    <>
      <Header />
      <Loader isLoading={isLoadingIndicator || isLoadingIndicators} />
      <div className="flex flex-wrap px-8 gap-3">
        {KEY_INDICATOR.map((keyIndicator) => (
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={[
              ["Cidades", "Porcentagem", "Média"],
              ...allIndicators.map((indicator) => [
                indicator?.city,
                indicator ? indicator[keyIndicator] : 0,
                getAverage(keyIndicator),
              ]),
            ]}
            options={{
              ...OPTIONS,
              title: MAPPED_INDICATORS[keyIndicator],
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Project;
