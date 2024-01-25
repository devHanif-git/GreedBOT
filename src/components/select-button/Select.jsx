import { useState } from "react";

const SelectCustom = ({ options, onSelectChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (e) => {
    const newSelectedOption = e.target.value;
    setSelectedOption(newSelectedOption);

    // Pass the selected option to the parent component
    onSelectChange(newSelectedOption);
  };
  return (
    <div className="relative inline-flex">
      <svg
        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fillRule="nonzero"
        />
      </svg>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="text-white border border-gray-300 rounded-full h-10 pl-3 pr-8 bg-transparent hover:border-gray-400 focus:outline-none focus:text-gray-500 appearance-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCustom;
