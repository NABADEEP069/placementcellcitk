import Card from "@/components/alumni/card";
import data from "@/data/alumni.json";

export default function Page() {
  return (
    <main className="min-h-screen px-10 py-5">
      <div className="grid grid-cols-3">
        {data.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            altText={item.altText}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
