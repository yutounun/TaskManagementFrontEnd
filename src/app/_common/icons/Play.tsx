const Play = ({ color, onClick }: { color: string; onClick: () => void }) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className="cursor-pointer"
  >
    <path
      d="M15.552 11.1679L12.3547 9.03647C11.6902 8.59343 10.8 9.06982 10.8 9.86852V14.1315C10.8 14.9302 11.6902 15.4066 12.3547 14.9635L15.552 12.8321C16.1457 12.4362 16.1457 11.5638 15.552 11.1679Z"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.8 12C21.8 16.9706 17.7706 21 12.8 21C7.82949 21 3.80005 16.9706 3.80005 12C3.80005 7.02944 7.82949 3 12.8 3C17.7706 3 21.8 7.02944 21.8 12Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Play;
