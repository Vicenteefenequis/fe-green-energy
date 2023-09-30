import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";
import Main from "../ProjectMain/Main";
import IndicatorByItem from "../../components/IndicatorByItem";

const CreateProjectState: React.FC = () => {

    const valuesGraphPlot: string[] = ["Uso de energia elétrica residencial total(kWh)", 
"Número de habitantes com ligação regular à rede de distribuição",
"Uso total de energia elétrica (kWh)", 
"Área total destes edifícios (𝑚2)",
"Consumo total de energia elétrica produzida a partir de fontes renováveis",
"Consumo total de energia elétrica em edifícios públicos(kWh)", 
"Consumo total de energia"]


const cardsData: CardData = {
  state: [
    {
      title: "Goiás",
      content: "GO",
      chartData: [
        { label: valuesGraphPlot[1], value: 14 },
        { label: valuesGraphPlot[2], value: 36 },
      ],
    },
    {
      title: "Amazonas",
      content: "AM",
      chartData: [
        { label: valuesGraphPlot[1], value: 54 },
        { label: valuesGraphPlot[2], value: 45 },
      ],
    },

    {
      title: "Pará",
      content: "PA",
      chartData: [
        { label: valuesGraphPlot[1], value: 36 },
        { label: valuesGraphPlot[2], value: 56 },
      ],
    },
    {
      title: "Maranhão",
      content: "MA",
      chartData: [
        { label: valuesGraphPlot[1], value: 98 },
        { label: valuesGraphPlot[2], value: 89 },
      ],
    },
  ],
};


      const handleCardClick = useCallback((estado: string) => {
        alert(`Estado ${estado} foi clicado.`);
      }, []);

    const navigate = useNavigate();
    const { mutate: mutateIndicator, isSuccess: isSuccessIndicatorMutation } =
      useIndicatorMutation();
      useEffect(() => {
        if (!isSuccessIndicatorMutation) return;
        navigate("/");
      }, [isSuccessIndicatorMutation, navigate]);
      return(
        <div >
            <Main/>
            <IndicatorByItem cardsData={cardsData} onCardClick={handleCardClick} />
        </div>
      )
      
};

export default CreateProjectState;
