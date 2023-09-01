const Search = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21.5L16.65 17.15M11 6.5C13.7614 6.5 16 8.73858 16 11.5M19 11.5C19 15.9183 15.4183 19.5 11 19.5C6.58172 19.5 3 15.9183 3 11.5C3 7.08172 6.58172 3.5 11 3.5C15.4183 3.5 19 7.08172 19 11.5Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Search;
