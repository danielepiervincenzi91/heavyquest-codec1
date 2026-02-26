export type WeeklyData = {
    weekId: string;
    avgWeight: number;
    delta: number;
    sessions: number;
  };
  
  export const weeklyDataList: WeeklyData[] = [
    {
      weekId: "2026-W06",
      avgWeight: 83.1,
      delta: -0.2,
      sessions: 3,
    },
    {
      weekId: "2026-W07",
      avgWeight: 82.8,
      delta: -0.3,
      sessions: 4,
    },
    {
      weekId: "2026-W08",
      avgWeight: 82.4,
      delta: -0.3,
      sessions: 3,
    },
  ];