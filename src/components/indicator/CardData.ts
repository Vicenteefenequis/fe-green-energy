interface CardData {
  titles: Title[];
}

interface Title {
  title: string;
  states: State[];
}

interface State {
  name: string;
  content: string;
  chartData: ChartData;
}

interface ChartData {
  value: number;
}

interface CardListProps {
  cardsData: CardData;
  onCardClick: (nomeEstado: string) => void;
}
