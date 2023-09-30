import React from "react";
import Chart from "react-google-charts";

interface ChartData {
  label: string;
  value: number;
}

interface ChartProps {
  data: ChartData[];
  chartType: "BarChart" | "LineChart" | "Bar" | "Line";
}

const CustomChart: React.FC<ChartProps> = ({ data, chartType }) => {
  const chartData = [["Label", "Valores"], ...data.map((item) => [item.label, item.value])];

  return (
    <div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType={chartType}
        loader={<div>Carregando gráfico...</div>}
        data={chartData}
        options={{
          colors: ["#0000CD"], // Cor das barras ou linhas
          titleTextStyle: { color: "#000000", fontSize: 18 }, // Estilo do título
          legend: { position: "top", textStyle: { color: "#000000" } }, // Posição e estilo da legenda
          hAxis: { title: "Maiores Indicadores", titleTextStyle: { color: "#000000" } }, // Estilo do eixo horizontal
          vAxis: { title: "Valores", titleTextStyle: { color: "#000000" } }, // Estilo do eixo vertical
          orientation: "horizontal", // Orientação horizontal
          chartArea: { width: "45%", height: "45%" }, // Tamanho da área do gráfico
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default CustomChart;
