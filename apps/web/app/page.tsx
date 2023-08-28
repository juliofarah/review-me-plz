"use client";
import { Button, Header } from "ui";
import { trpc } from "../utils/_trpcClient";

export default function Page() {
  const data = trpc.example.list.useQuery();

  return (
    <>
      <Header text="Web" />
      {(data.data ?? []).map(i => (
        <div key={i.id}>
          {i.id} - {i.name}
        </div>
      ))}
      <Button />
    </>
  );
}
