import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";
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
  titles: [
    {
      title: "Uso de energia elétrica residencial per capita(KWh/ano)",
      states: [
        {
          name: "Goiás",
          content: "GO",
          chartData: 
            {value: 14 },
          
        },
        {
          name: "Amazonas",
          content: "AM",
          chartData: 
            {value: 95 },
      
        },
      ],
    },
    {
      title: "Número de habitantes com ligação regular à rede de distribuição",
      states: [
        {
          name: "Paraná",
          content: "PR",
          chartData: 
            {value: 22 },
          
        },
        {
          name: "Santa Catarina",
          content: "SC",
          chartData: 
            {value: 64 },
          
        },
        {
          name: "Goiás",
          content: "GO",
          chartData: 
            {value: 25 },
          
        },
        
      ],
    },
    {
      title: "Uso total de energia elétrica (kWh)",
      states: [
        {
          name: "São Paulo",
          content: "SP",
          chartData: 
            {value: 25 },
          
        },
        {
          name: "Rio de Janeiro",
          content: "RJ",
          chartData: 
            {value: 54 },
          
        },
        {
          name: "Minas Gerais",
          content: "MG",
          chartData: 
            {value: 69 },
          
        },
        
      ],
    },

    {
      title: "Consumo total de energia elétrica em edifícios públicos(kWh)",
      states: [
        {
          name: "Maranhão",
          content: "MA",
          chartData: 
            {value: 58 },
          
        },
        {
          name: "Bahia",
          content: "BA",
          chartData: 
            {value: 98 },
          
        },
        {
          name: "Sergipe",
          content: "SE",
          chartData: 
            {value: 74 },
        },
      ],
    },

    {
      title: "Consumo total de energia elétrica em edifícios públicos(kWh)",
      states: [

        {
          name: "Paraná",
          content: "SC",
          chartData: 
            {value: 74 },
        },
      ],
    },

    {
      title: "Consumo total de energia elétrica em edifícios públicos(kWh)",
      states: [

        {
          name: "Paraná",
          content: "SC",
          chartData: 
            {value: 74 },
        },
      ],
    },

    
    {
      title: "Área total destes edifícios (𝑚2)",
      states: [
        {
          name: "São Paulo",
          content: "SP",
          chartData: 
            {value: 360 },
        },
      ],
    },
    {
      title: "Consumo total de energia",
      states: [
        {
          name: "Goiás",
          content: "GO",
          chartData: 
            {value: 220 },
        },
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
            <IndicatorByItem cardsData={cardsData} onCardClick={handleCardClick} />
        </div>
      )
      
};

export default CreateProjectState;
