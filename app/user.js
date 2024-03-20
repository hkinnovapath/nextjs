"use client";
import getData from "./test";
import React, { useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      {data && (
        <ul>
          {data.data.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
