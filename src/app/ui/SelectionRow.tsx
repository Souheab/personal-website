import React from 'react';

interface SelectionRowProps {
  options: string[];
  onSelect: (selected: number) => void;
  selectedOption: number;
}

export default function SelectionRow(props: SelectionRowProps) {
  return (
    <div className="flex space-x-2">
      {props.options.map((option, idx) => (
        <button
          key={option}
          onClick={() => props.onSelect(idx)}
          className={`px-4 py-2 rounded w-36 ${
            props.options[props.selectedOption] === option
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
