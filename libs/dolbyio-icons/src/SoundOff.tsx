import type { SVGProps } from 'react';
import React from 'react';

const SvgSoundOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={props.fill || 'currentColor'}
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M9.64376 3.81154C10.4559 3.06291 11.7212 3.11443 12.4698 3.92661C12.7677 4.24977 12.9497 4.66064 12.9905 5.09481L12.9993 5.28211V18.7215C12.9993 19.8261 12.1038 20.7215 10.9993 20.7215C10.5604 20.7215 10.1356 20.5772 9.78889 20.3137L9.6453 20.1935L5.10673 16.0189L2.98788 16.006C1.93805 15.9997 1.08117 15.1853 1.00544 14.1547L1 14.0061V9.99175C1 8.93738 1.81588 8.07358 2.85074 7.99723L3 7.99175H5.1087L9.64376 3.81154ZM17.6122 8.9276L17.7064 9.01079L18.999 10.3032L20.2922 9.01079L20.3864 8.9276C20.7787 8.62258 21.3459 8.6503 21.7064 9.01079C22.0669 9.37127 22.0946 9.9385 21.7896 10.3308L21.7064 10.425L20.413 11.7172L21.7064 13.0108C22.0969 13.4013 22.0969 14.0345 21.7064 14.425C21.3459 14.7855 20.7787 14.8132 20.3864 14.5082L20.2922 14.425L18.999 13.1312L17.7064 14.425L17.6122 14.5082C17.2199 14.8132 16.6526 14.7855 16.2922 14.425C15.9317 14.0645 15.9039 13.4973 16.209 13.105L16.2922 13.0108L17.585 11.7172L16.2922 10.425C15.9016 10.0345 15.9016 9.40131 16.2922 9.01079C16.6526 8.6503 17.2199 8.62258 17.6122 8.9276ZM6.4642 9.46231L10.9993 5.2821V18.7215L6.4607 14.5468L6.31834 14.4276C5.97473 14.166 5.55405 14.0215 5.11885 14.0189L3 14.006V9.99173H5.1087L5.296 9.98295C5.73017 9.94212 6.14105 9.76019 6.4642 9.46231Z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgSoundOff;
