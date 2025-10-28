import { CoffeeConsumption } from '@/types/chart';

const percentageChart = (v: number, type: 'normal' | 'hundred' = 'hundred') => {
  if (typeof v !== 'number' || isNaN(v)) return '0%';

  switch (type) {
    case 'normal':
      return `${v}%`;
    case 'hundred':
      return `${Math.round(v * 100)}%`;
    default:
      return `${v}%`;
  }
};

const formatPercentLabel = (label: React.ReactNode) => {
  const n = typeof label === 'number' ? label : typeof label === 'string' ? Number(label) : NaN;

  return Number.isFinite(n) ? `${n}%` : '';
};

type WideRow = { cups: number; [k: string]: number };

const normalizeToWide = (data?: CoffeeConsumption) => {
  if (!data?.teams?.length) return { wide: [] as WideRow[], teams: [] as string[] };

  const teamNames = data.teams.map((t) => t.team);
  const byCups = new Map<number, WideRow>();

  for (const { team, series } of data.teams) {
    for (const { cups, bugs, productivity } of series) {
      const row = byCups.get(cups) ?? { cups };
      row[`${team}.bugs`] = bugs;
      row[`${team}.productivity`] = productivity;
      byCups.set(cups, row);
    }
  }

  const wide = Array.from(byCups.values()).sort((a, b) => a.cups - b.cups);
  return { wide, teams: teamNames };
};

export { percentageChart, formatPercentLabel, normalizeToWide };
