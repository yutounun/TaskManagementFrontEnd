const Plus = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_6_1233)">
      <path
        d="M8.99999 15.5834C12.912 15.5834 16.0833 12.4121 16.0833 8.50008C16.0833 4.58806 12.912 1.41675 8.99999 1.41675C5.08797 1.41675 1.91666 4.58806 1.91666 8.50008C1.91666 12.4121 5.08797 15.5834 8.99999 15.5834Z"
        fill="#red"
      />
      <path
        d="M8.99999 5.66675V11.3334M6.16666 8.50008H11.8333M16.0833 8.50008C16.0833 12.4121 12.912 15.5834 8.99999 15.5834C5.08797 15.5834 1.91666 12.4121 1.91666 8.50008C1.91666 4.58806 5.08797 1.41675 8.99999 1.41675C12.912 1.41675 16.0833 4.58806 16.0833 8.50008Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_1233">
        <rect width="17" height="17" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default Plus;
