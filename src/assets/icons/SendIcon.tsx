import * as React from 'react';

function SendIcon({ className, currentColor = '#7049DD' }) {
  return (
    <svg
      className={className}
      width="505"
      height="386"
      viewBox="0 0 505 386"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M428.312 385.964C428.312 385.964 345.559 385.964 243.478 385.964C141.397 385.964 58.6442 385.964 58.6442 385.964C58.6442 300.34 141.397 230.928 243.478 230.928C345.559 230.928 428.312 300.34 428.312 385.964Z"
        fill={currentColor}
      />
      <circle
        cx="243.478"
        cy="114.327"
        r="106.827"
        fill={currentColor}
        stroke="#FFC14A"
        strokeWidth="15"
      />
      <path
        d="M360.743 273.468L455.058 158.17C460.193 151.893 469.443 150.967 475.72 156.102V156.102C481.997 161.236 482.923 170.487 477.788 176.764L383.473 292.061L360.743 273.468Z"
        fill={currentColor}
      />
      <rect
        x="365.713"
        y="231.436"
        width="73.807"
        height="16.5197"
        rx="4"
        transform="rotate(38.5609 365.713 231.436)"
        fill={currentColor}
      />
      <path
        d="M108.989 287.303L18.8061 168.744C13.8966 162.29 15.1489 153.078 21.6031 148.169V148.169C28.0573 143.259 37.2694 144.511 42.1789 150.966L132.362 269.524L108.989 287.303Z"
        fill={currentColor}
      />
      <rect
        x="69.2672"
        y="272.688"
        width="73.807"
        height="16.5197"
        rx="4"
        transform="rotate(-37.9818 69.2672 272.688)"
        fill={currentColor}
      />
      <path
        d="M182.957 320.395C182.702 318.007 181.626 316.147 179.73 314.816C177.853 313.486 175.41 312.82 172.402 312.82C170.288 312.82 168.474 313.139 166.961 313.777C165.448 314.415 164.29 315.281 163.488 316.375C162.686 317.469 162.276 318.717 162.258 320.121C162.258 321.288 162.522 322.299 163.051 323.156C163.598 324.013 164.336 324.742 165.266 325.344C166.195 325.927 167.225 326.419 168.355 326.82C169.486 327.221 170.625 327.559 171.773 327.832L177.023 329.145C179.138 329.637 181.171 330.302 183.121 331.141C185.09 331.979 186.849 333.036 188.398 334.313C189.966 335.589 191.206 337.129 192.117 338.934C193.029 340.738 193.484 342.853 193.484 345.277C193.484 348.559 192.646 351.448 190.969 353.945C189.292 356.424 186.867 358.366 183.695 359.77C180.542 361.155 176.723 361.848 172.238 361.848C167.882 361.848 164.099 361.173 160.891 359.824C157.701 358.475 155.203 356.507 153.398 353.918C151.612 351.329 150.646 348.176 150.5 344.457H160.48C160.626 346.408 161.228 348.03 162.285 349.324C163.342 350.618 164.719 351.585 166.414 352.223C168.128 352.861 170.042 353.18 172.156 353.18C174.362 353.18 176.294 352.852 177.953 352.195C179.63 351.521 180.943 350.591 181.891 349.406C182.839 348.203 183.322 346.799 183.34 345.195C183.322 343.737 182.893 342.534 182.055 341.586C181.216 340.62 180.04 339.818 178.527 339.18C177.033 338.523 175.283 337.94 173.277 337.43L166.906 335.789C162.294 334.604 158.648 332.809 155.969 330.402C153.307 327.978 151.977 324.76 151.977 320.75C151.977 317.451 152.87 314.561 154.656 312.082C156.461 309.603 158.913 307.68 162.012 306.312C165.111 304.927 168.62 304.234 172.539 304.234C176.513 304.234 179.995 304.927 182.984 306.312C185.992 307.68 188.353 309.585 190.066 312.027C191.78 314.452 192.664 317.241 192.719 320.395H182.957ZM220.685 361.82C216.474 361.82 212.837 360.945 209.774 359.195C206.73 357.427 204.388 354.93 202.747 351.703C201.106 348.458 200.286 344.639 200.286 340.246C200.286 335.926 201.106 332.134 202.747 328.871C204.406 325.59 206.721 323.038 209.692 321.215C212.664 319.374 216.155 318.453 220.165 318.453C222.754 318.453 225.196 318.872 227.493 319.711C229.808 320.531 231.85 321.807 233.618 323.539C235.405 325.271 236.808 327.477 237.829 330.156C238.85 332.818 239.36 335.99 239.36 339.672V342.707H204.935V336.035H229.872C229.854 334.139 229.444 332.453 228.642 330.977C227.84 329.482 226.718 328.306 225.278 327.449C223.856 326.592 222.198 326.164 220.302 326.164C218.278 326.164 216.501 326.656 214.97 327.641C213.438 328.607 212.244 329.883 211.388 331.469C210.549 333.036 210.121 334.759 210.103 336.637V342.461C210.103 344.904 210.549 347 211.442 348.75C212.336 350.482 213.584 351.812 215.188 352.742C216.793 353.654 218.67 354.109 220.821 354.109C222.261 354.109 223.565 353.909 224.731 353.508C225.898 353.089 226.91 352.478 227.767 351.676C228.623 350.874 229.271 349.88 229.708 348.695L238.95 349.734C238.367 352.177 237.255 354.31 235.614 356.133C233.992 357.937 231.914 359.341 229.38 360.344C226.846 361.328 223.948 361.82 220.685 361.82ZM257.633 336.391V361H247.734V319H257.195V326.137H257.688C258.654 323.785 260.194 321.917 262.309 320.531C264.441 319.146 267.076 318.453 270.211 318.453C273.109 318.453 275.634 319.073 277.785 320.312C279.954 321.552 281.632 323.348 282.816 325.699C284.02 328.051 284.612 330.904 284.594 334.258V361H274.695V335.789C274.695 332.982 273.966 330.785 272.508 329.199C271.068 327.613 269.072 326.82 266.52 326.82C264.788 326.82 263.247 327.203 261.898 327.969C260.568 328.716 259.52 329.801 258.754 331.223C258.007 332.645 257.633 334.367 257.633 336.391ZM310.242 361.738C306.943 361.738 303.99 360.891 301.383 359.195C298.776 357.5 296.716 355.039 295.203 351.812C293.69 348.586 292.934 344.667 292.934 340.055C292.934 335.388 293.699 331.451 295.23 328.242C296.78 325.016 298.867 322.582 301.492 320.941C304.117 319.283 307.043 318.453 310.27 318.453C312.73 318.453 314.754 318.872 316.34 319.711C317.926 320.531 319.184 321.525 320.113 322.691C321.043 323.84 321.763 324.924 322.273 325.945H322.684V305H332.609V361H322.875V354.383H322.273C321.763 355.404 321.025 356.488 320.059 357.637C319.092 358.767 317.816 359.733 316.23 360.535C314.645 361.337 312.648 361.738 310.242 361.738ZM313.004 353.617C315.1 353.617 316.887 353.052 318.363 351.922C319.84 350.773 320.961 349.178 321.727 347.137C322.492 345.095 322.875 342.716 322.875 340C322.875 337.284 322.492 334.923 321.727 332.918C320.979 330.913 319.867 329.354 318.391 328.242C316.932 327.13 315.137 326.574 313.004 326.574C310.798 326.574 308.957 327.148 307.48 328.297C306.004 329.445 304.892 331.031 304.145 333.055C303.397 335.078 303.023 337.393 303.023 340C303.023 342.625 303.397 344.967 304.145 347.027C304.91 349.069 306.031 350.682 307.508 351.867C309.003 353.034 310.835 353.617 313.004 353.617Z"
        fill="white"
      />
    </svg>
  );
}

export default SendIcon;
