const Pause = ({ color }: { color: string }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3999 9V15M14.3999 9V15M21.3999 12C21.3999 16.9706 17.3705 21 12.3999 21C7.42934 21 3.3999 16.9706 3.3999 12C3.3999 7.02944 7.42934 3 12.3999 3C17.3705 3 21.3999 7.02944 21.3999 12Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Pause;
