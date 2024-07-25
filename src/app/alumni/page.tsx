import Card from "@/components/alumni/card";
import data from "@/data/alumni.json";

export default function Page() {
  return (
    <main className="min-h-screen px-10 py-5">
      <h1 className="text-5xl text-center mb-5 uppercase">Alumni</h1>
      <div className="grid grid-cols-3 gap-5 px-10">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </main>
  );
}
