import { reservationStorage } from "@/utils/storage";

export default function reservations() {
  return (
    <>
      <h1>reservations</h1>
      {reservationStorage.get().map((e) => (
        <div key={e.idx}>{e.name}</div>
      ))}
    </>
  );
}
