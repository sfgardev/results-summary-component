import data from "../data/data.json";
import SummaryItem from "./SummaryItem";

const ResultsCard = () => {
  return (
    <article className="grid gap-4 bg-clr-white md:grid-cols-2 md:gap-0 md:rounded-3xl md:shadow-xl md:max-w-2xl">
      <div className="bg-gradient-to-b from-clr-slate-blue to-clr-royal-blue rounded-b-3xl text-clr-light-lavender py-8 flex flex-col items-center gap-5 md:rounded-3xl md:gap-8">
        <h3 className="md:text-xl">Your Result</h3>
        <div className="flex flex-col justify-center gap-1 bg-gradient-to-b from-clr-violet-blue/100 to-clr-persian-blue/0 rounded-full w-36 h-36 text-center font-bold md:w-40 md:h-40">
          <p className="text-clr-white text-6xl">76</p>
          <span className="text-sm text-clr-light-lavender/50">of 100</span>
        </div>
        <div className="text-center px-14 flex flex-col gap-2 md:gap-3">
          <p className="text-white text-xl font-medium tracking-wider md:text-2xl md:font-medium">Great</p>
          <p className="text-base text-clr-light-lavender/80">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="px-8 md:py-10">
        <h3 className="mb-4 font-bold">Summary</h3>
        <ul className="flex flex-col gap-4 mb-6">
          {data.map((item) => (
            <SummaryItem key={item.category} {...item} />
          ))}
        </ul>
        <button className="w-full mb-4 bg-clr-dark-gray-blue text-clr-pale-blue/90 rounded-full p-3 transition hover:bg-gradient-to-b from-clr-slate-blue to-clr-royal-blue md:mb-0">
          Continue
        </button>
      </div>
    </article>
  );
};
export default ResultsCard;
