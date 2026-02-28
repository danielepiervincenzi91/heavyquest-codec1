import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

interface WeeklySummary {
  weekId: string;
  avgWeight: number;
}

function History() {
  const [weeks, setWeeks] = useState<WeeklySummary[]>([]);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      const q = query(
        collection(db, "weeklySummariesV3"),
        orderBy("createdAt", "asc")
      );

      const snapshot = await getDocs(q);

      const data: WeeklySummary[] = snapshot.docs.map((doc) => ({
        weekId: doc.data().weekId,
        avgWeight: doc.data().avgWeight,
      }));

      setWeeks(data);
    };

    fetchWeeklyData();
  }, []);

  return (
    <div className="codec-wrapper">
      <div className="codec-frame">
        <h2 className="codec-title">HISTORY</h2>

        {weeks.map((week) => (
          <div key={week.weekId} className="stat-card">
            <div className="stat-label">{week.weekId}</div>
            <div className="stat-value">
              {week.avgWeight.toFixed(1)} kg
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;