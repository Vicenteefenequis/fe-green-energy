import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";
import Main from "../ProjectMain/Main";
import CardList from "./cardList";
import IndicatorByItem from "../../components/IndicatorByItem";

const CreateProjectState: React.FC = () => {

    const valuesGraphPlot: string[] = ["Uso de energia elétrica residencial total(kWh)", 
"Número de habitantes com ligação regular à rede de distribuição",
"Uso total de energia elétrica (kWh)", 
"Área total destes edifícios (𝑚2)",
"Consumo total de energia elétrica produzida a partir de fontes renováveis",
"Consumo total de energia elétrica em edifícios públicos(kWh)", 
"Consumo total de energia"]


    const cardsData: CardData[] = [
        {
          title: "Goiás",
          content: "GO",
          chartData: [
            { label: valuesGraphPlot[1], value: 24 },
            { label: valuesGraphPlot[2], value: 36 },
          ],
        },
        {
          title: "Rio Grande do Sul",
          content: "RS",
          chartData: [
            { label: valuesGraphPlot[3], value: 15 },
            { label: valuesGraphPlot[4], value: 365 },
          ],
        },
        {
          title: "Maranhão",
          content: "MA",
          chartData: [
            { label: valuesGraphPlot[5], value: 50 },
            { label: valuesGraphPlot[6], value: 15 },
          ],
        },
      ];
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
             <CardList cardsData={cardsData} onCardClick={handleCardClick} />
        </div>
      )
      
};

export default CreateProjectState;
