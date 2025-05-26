const Logo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" {...props}>
    <title>Endgame logo.</title>
    <defs>
      <linearGradient id="favicon_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#0091FF" />
        <stop offset="100%" stopColor="#004880" />
      </linearGradient>
      <linearGradient id="favicon_svg__b" x1="50%" x2="50%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#0091FF" />
        <stop offset="100%" stopColor="#004880" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={540} cy={540} r={468} fill="url(#favicon_svg__a)" />
      <path
        fill="url(#favicon_svg__b)"
        d="M540 150c215.391 0 390 174.609 390 390S755.391 930 540 930 150 755.391 150 540s174.609-390 390-390m0 39c-193.852 0-351 157.148-351 351s157.148 351 351 351 351-157.148 351-351-157.148-351-351-351"
      />
      <g fillRule="nonzero">
        <path d="M300 300h480v480H300z" />
        <path
          fill="#FFF"
          d="M590.486 360a40 40 0 0 0-32.888 17.232L464.062 512.34l103.606 103.604 135.108-93.536a40 40 0 0 0 17.232-32.887V380c0-11.046-8.954-20-20-20zM414.14 505.858a20 20 0 0 0-30.784 3.048l-12.343 18.514a40 40 0 0 0 .733 45.438l32.129 44.98-43.878 43.878c-15.621 15.62-15.621 40.948 0 56.568l1.716 1.716c15.62 15.622 40.947 15.622 56.568 0l43.878-43.878 44.981 32.13a40 40 0 0 0 45.436.732l18.514-12.342a20 20 0 0 0 3.05-30.784z"
        />
      </g>
    </g>
  </svg>
);

export default Logo;
