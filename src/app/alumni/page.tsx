import Card from "@/components/alumni/card";
import data from "@/data/alumni.json";

export default function Page() {
  return (
    <main className="min-h-screen px-5 py-5">
      <h1 className="text-5xl text-center mb-5 uppercase">Alumni</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </main>
  );
}
