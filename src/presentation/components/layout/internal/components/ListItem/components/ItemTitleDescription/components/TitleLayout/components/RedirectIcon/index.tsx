const RedirectIcon: React.FC = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
      className="group absolute right-0 bottom-0"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#4B587C"
        strokeWidth="1.5"
        className="group-hover:stroke-[#F54212] transition-all duration-300"
      >
        <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10" />
        <path d="m6.6 7 3-3-3-3m5.4 9v3H0" />
      </g>
    </svg>
  );
};

export default RedirectIcon;
