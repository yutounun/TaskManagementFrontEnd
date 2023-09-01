const Filter = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4.5C3 3.94772 3.44772 3.5 4 3.5H20C20.5523 3.5 21 3.94772 21 4.5V7.08579C21 7.351 20.8946 7.60536 20.7071 7.79289L14.2929 14.2071C14.1054 14.3946 14 14.649 14 14.9142V17.5L10 21.5V14.9142C10 14.649 9.89464 14.3946 9.70711 14.2071L3.29289 7.79289C3.10536 7.60536 3 7.351 3 7.08579V4.5Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Filter;
