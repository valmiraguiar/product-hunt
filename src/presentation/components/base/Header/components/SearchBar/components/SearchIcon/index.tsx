import * as React from 'react';

const SearchIcon: React.FC = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 -0.5 25 25"
      {...props}
    >
      <g
        stroke="#A0A8BE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          d="M5.5 11.146a6.144 6.144 0 1 1 12.288-.002 6.144 6.144 0 0 1-12.288.002Z"
          clipRule="evenodd"
        />
        <path d="m15.989 15.49 3.511 3.511" />
      </g>
    </svg>
  );
};

export default SearchIcon;
