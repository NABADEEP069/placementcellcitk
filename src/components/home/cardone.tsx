export default function CardOne() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="h-[16.5rem] w-[16.5rem] bg-gray-300 absolute right-72 rounded-2xl"></div>
      <div className="h-[19rem] bg-white w-1/2 pr-48 p-5 rounded-2xl flex flex-col justify-between shadow-lg">
        <div>
          <h3 className="text-2xl font-semibold">Exploring the skies</h3>
          <h5 className="text-slate-500">THE TRAINING AND PLACEMENT CELL</h5>
          <hr className="w-2/3 border-primary" />

          <p className="mt-3">
            Welcome to CIT Kokrajhar, your premier destination for top-tier
            talent in engineering and technology. Our accomplished alumni are
            living proof of our tradition of excellence, excelling across
            diverse domains from engineering to research and development.
          </p>
        </div>
        <div className="">
          <button className="text-sm font-semibold text-green-500">
            Read More..
          </button>
        </div>
      </div>
    </div>
  );
}
