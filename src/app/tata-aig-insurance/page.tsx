import { getAuth, signInAnonymously } from "firebase/auth";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function Page() {
  const auth = getAuth();
  await signInAnonymously(auth); // Temporary authentication to test permissions

  const q = query(collection(db, "pillarPages"), where("slug", "==", "post-42"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());

  return (
    <div>
      <h1>Tata AIG Insurance</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}