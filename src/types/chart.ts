interface WeeklyMood {
  week: string;
  happy: number;
  tired: number;
  stressed: number;
}

interface TopCoffee {
  brand: string;
  popularity: number;
}

interface SeriesItem {
  cups: number;
  bugs: number;
  productivity: number;
}

interface CunsumptionItems {
  team: string;
  series: SeriesItem[];
}

interface CoffeeConsumption {
  teams: CunsumptionItems[];
}

export type { WeeklyMood, TopCoffee, SeriesItem, CoffeeConsumption, CunsumptionItems };
