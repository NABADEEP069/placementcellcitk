interface CardTwoProps {
  paragraphs: string[];
}

export default function CardTwo({ paragraphs }: CardTwoProps) {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow">
      <ul className="">
        {paragraphs.map((paragraph, index) => (
          <li key={index} className="bg-white p-3 rounded-lg shadow my-3">
            {paragraph}
          </li>
        ))}
      </ul>
    </div>
  );
}
