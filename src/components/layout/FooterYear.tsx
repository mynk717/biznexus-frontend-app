
"use client";

import { useState, useEffect } from 'react';

export default function FooterYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    // You can return a placeholder or null while waiting for client-side mount
    return <>...</>; 
  }

  return <>{year}</>;
}
