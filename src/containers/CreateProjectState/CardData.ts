interface CardData {
  title: string;
  content: string;
  chartData: ChartData[]; 
}

interface ChartData {
  label: string;
  value: number;
}

interface CardListProps {
  cardsData: CardData[];
  onCardClick: (nomeEstado: string) => void;
}