"use client"; // Mark as client component

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "pillarPages"), where("slug", "==", "post-42"));
        const querySnapshot = await getDocs(q);
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (err) {
        setError((err as Error).message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Tata AIG Insurance</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}