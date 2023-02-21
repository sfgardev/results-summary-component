type Props = {
  category: string;
  score: number;
  icon: string;
  className: string;
};

const SummaryItem = ({ category, score, icon,className }: Props) => {
  console.log(className)
  return (
    <li className={`${className} text-sm font-bold flex items-center gap-3 p-4 rounded-lg`}>
      <img src={icon} alt={category} />
      <p className="">{category}</p>
      <p className="ml-auto text-clr-dark-gray-blue">
        {score} <span className="text-clr-dark-gray-blue/30">/ 100</span>
      </p>
    </li>
  );
};
export default SummaryItem;
