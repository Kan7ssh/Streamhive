import type { SVGProps } from 'react';
import React from 'react';

const SvgInfo = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g clipPath="url(#clip0_6216_14535)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.21502 8.84672C2.21331 6.08272 3.29494 3.43157 5.22338 1.47662C5.55592 1.13807 5.55592 0.59117 5.22338 0.252615C4.88912 -0.0842049 4.34915 -0.0842049 4.01489 0.252615C1.7642 2.53135 0.5 5.6235 0.5 8.84672C0.5 12.0699 1.7642 15.1621 4.01489 17.4408C4.17688 17.6032 4.39544 17.6934 4.62342 17.6926C4.84798 17.6926 5.06396 17.6014 5.22338 17.4408C5.55592 17.1023 5.55592 16.5554 5.22338 16.2168C3.29494 14.2619 2.21331 11.6107 2.21502 8.84672ZM17.9416 2.40632C18.1799 2.41586 18.4044 2.52524 18.5595 2.70928C20.1657 4.33695 21.0691 6.54451 21.0691 8.84669C21.0691 11.1489 20.1666 13.3564 18.5595 14.9841C18.2253 15.3209 17.6853 15.3209 17.3511 14.9841C17.0185 14.6455 17.0185 14.0986 17.3511 13.7601C18.6384 12.4571 19.3618 10.6896 19.3618 8.84669C19.3618 7.00373 18.6384 5.23629 17.3511 3.93329C17.1694 3.7753 17.0614 3.54959 17.0519 3.30739C17.0425 3.0652 17.1334 2.83081 17.3022 2.6598C17.4711 2.48878 17.7025 2.39677 17.9416 2.40632ZM7.64893 2.70928C7.31467 2.37246 6.77471 2.37246 6.44044 2.70928C4.83342 4.33695 3.93091 6.54451 3.93091 8.84669C3.93091 11.1489 4.83427 13.3564 6.44044 14.9841C6.77471 15.3209 7.31467 15.3209 7.64893 14.9841C7.98148 14.6455 7.98148 14.0986 7.64893 13.7601C6.36159 12.4571 5.63822 10.6896 5.63822 8.84669C5.63822 7.00373 6.36159 5.23629 7.64893 3.93329C7.98148 3.59473 7.98148 3.04784 7.64893 2.70928ZM12.4999 4.50623C11.0703 4.50449 9.73408 5.22588 8.93699 6.42818C8.1399 7.63049 7.9882 9.1566 8.53159 10.4961C9.07498 11.8355 10.2415 12.8121 11.6428 13.1003V20.1319C11.6428 20.6111 12.0268 21 12.4999 21C12.973 21 13.357 20.6111 13.357 20.1319V13.1003C14.7583 12.8121 15.9248 11.8355 16.4682 10.4961C17.0116 9.1566 16.859 7.63049 16.0628 6.42818C15.2665 5.22588 13.9295 4.50536 12.4999 4.50623ZM12.4999 11.451C11.8176 11.451 11.1637 11.1766 10.682 10.6879C10.2003 10.1992 9.92863 9.53682 9.92863 8.84669C9.92863 8.15655 10.1995 7.49333 10.682 7.00546C11.1645 6.5176 11.8185 6.24241 12.4999 6.24241C13.1813 6.24241 13.8361 6.51673 14.3177 7.00546C14.7994 7.4942 15.0711 8.15655 15.0711 8.84669C15.0711 9.53682 14.8003 10.2 14.3177 10.6879C13.8352 11.1758 13.1813 11.451 12.4999 11.451ZM19.7765 0.252615C20.1108 -0.0842049 20.6507 -0.0842049 20.985 0.252615V0.269976C23.2357 2.54958 24.4999 5.64086 24.4999 8.86408C24.4999 12.0873 23.2357 15.1794 20.985 17.4582C20.823 17.6205 20.6045 17.7117 20.3765 17.7099C20.1519 17.7091 19.9359 17.6188 19.7765 17.4582C19.444 17.1196 19.444 16.5727 19.7765 16.2342C21.7135 14.2792 22.802 11.6246 22.802 8.8554C22.802 6.08619 21.7135 3.43157 19.7765 1.47662C19.444 1.13807 19.444 0.59117 19.7765 0.252615Z"
        fill={fill || 'currentColor'}
      />
      <path
        d="M5.22338 1.47662L5.25897 1.51174L5.25905 1.51166L5.22338 1.47662ZM2.21502 8.84672L2.26502 8.84675L2.26502 8.84669L2.21502 8.84672ZM5.22338 0.252615L5.25905 0.217577L5.25887 0.217394L5.22338 0.252615ZM4.01489 0.252615L3.9794 0.217394L3.97932 0.217479L4.01489 0.252615ZM4.01489 17.4408L3.97932 17.476L3.9795 17.4761L4.01489 17.4408ZM4.62342 17.6926V17.6426L4.62323 17.6426L4.62342 17.6926ZM5.22338 17.4408L5.25886 17.476L5.25905 17.4759L5.22338 17.4408ZM5.22338 16.2168L5.25905 16.1818L5.25897 16.1817L5.22338 16.2168ZM18.5595 2.70928L18.5212 2.7416L18.524 2.7444L18.5595 2.70928ZM17.9416 2.40632L17.9436 2.35636L17.9436 2.35636L17.9416 2.40632ZM18.5595 14.9841L18.595 15.0193L18.5951 15.0192L18.5595 14.9841ZM17.3511 14.9841L17.3154 15.0191L17.3156 15.0193L17.3511 14.9841ZM17.3511 13.7601L17.3155 13.7249L17.3154 13.725L17.3511 13.7601ZM17.3511 3.93329L17.3867 3.89805L17.3839 3.89556L17.3511 3.93329ZM17.3022 2.6598L17.2666 2.62467V2.62467L17.3022 2.6598ZM6.44044 2.70928L6.40495 2.67406L6.40486 2.67415L6.44044 2.70928ZM7.64893 2.70928L7.6846 2.67424L7.68442 2.67406L7.64893 2.70928ZM6.44044 14.9841L6.40485 15.0192L6.40495 15.0193L6.44044 14.9841ZM7.64893 14.9841L7.68442 15.0193L7.6846 15.0191L7.64893 14.9841ZM7.64893 13.7601L7.6846 13.725L7.6845 13.7249L7.64893 13.7601ZM7.64893 3.93329L7.6845 3.96843L7.6846 3.96833L7.64893 3.93329ZM8.93699 6.42818L8.89532 6.40056L8.93699 6.42818ZM12.4999 4.50623L12.4998 4.55623H12.4999L12.4999 4.50623ZM8.53159 10.4961L8.57792 10.4773L8.53159 10.4961ZM11.6428 13.1003H11.6928V13.0596L11.6529 13.0514L11.6428 13.1003ZM13.357 13.1003L13.3469 13.0514L13.307 13.0596V13.1003H13.357ZM16.4682 10.4961L16.4218 10.4773L16.4682 10.4961ZM10.682 10.6879L10.7176 10.6528L10.682 10.6879ZM14.3177 7.00546L14.2821 7.04056V7.04056L14.3177 7.00546ZM20.985 0.252615H21.035V0.232015L21.0205 0.217394L20.985 0.252615ZM19.7765 0.252615L19.741 0.217394L19.7408 0.217577L19.7765 0.252615ZM20.985 0.269976H20.935V0.2905L20.9494 0.305105L20.985 0.269976ZM20.985 17.4582L21.0204 17.4935L21.0206 17.4933L20.985 17.4582ZM20.3765 17.7099L20.3768 17.6599H20.3767L20.3765 17.7099ZM19.7765 17.4582L19.7408 17.4932L19.741 17.4934L19.7765 17.4582ZM19.7765 16.2342L19.741 16.199L19.7408 16.1991L19.7765 16.2342ZM19.7765 1.47662L19.7408 1.51166L19.741 1.51182L19.7765 1.47662ZM5.18778 1.44151C3.25004 3.40589 2.1633 6.0697 2.16502 8.84675L2.26502 8.84669C2.26331 6.09573 3.33985 3.45724 5.25897 1.51174L5.18778 1.44151ZM5.18771 0.287652C5.50115 0.606756 5.50115 1.12248 5.18771 1.44159L5.25905 1.51166C5.6107 1.15365 5.6107 0.575584 5.25905 0.217577L5.18771 0.287652ZM4.05038 0.287835C4.36509 -0.0292783 4.87318 -0.0292783 5.18789 0.287835L5.25887 0.217394C4.90505 -0.139131 4.33322 -0.139131 3.9794 0.217394L4.05038 0.287835ZM0.55 8.84672C0.55 5.63655 1.80908 2.55706 4.05047 0.28775L3.97932 0.217479C1.71931 2.50565 0.45 5.61044 0.45 8.84672H0.55ZM4.05047 17.4057C1.80908 15.1364 0.55 12.0569 0.55 8.84672H0.45C0.45 12.083 1.71931 15.1878 3.97932 17.476L4.05047 17.4057ZM4.62323 17.6426C4.40865 17.6434 4.20289 17.5584 4.05028 17.4055L3.9795 17.4761C4.15087 17.6479 4.38222 17.7435 4.62361 17.7426L4.62323 17.6426ZM5.18789 17.4056C5.03769 17.5569 4.83441 17.6426 4.62342 17.6426V17.7426C4.86154 17.7426 5.09023 17.6459 5.25886 17.476L5.18789 17.4056ZM5.18771 16.2519C5.50115 16.571 5.50115 17.0867 5.18771 17.4058L5.25905 17.4759C5.6107 17.1179 5.6107 16.5398 5.25905 16.1818L5.18771 16.2519ZM2.16502 8.84669C2.1633 11.6237 3.25004 14.2875 5.18778 16.2519L5.25897 16.1817C3.33985 14.2362 2.26331 11.5977 2.26502 8.84675L2.16502 8.84669ZM18.5978 2.67705C18.4336 2.48228 18.1959 2.36647 17.9436 2.35636L17.9396 2.45628C18.1638 2.46526 18.3752 2.56821 18.5213 2.7415L18.5978 2.67705ZM21.1191 8.84669C21.1191 6.53144 20.2106 4.31125 18.5951 2.67416L18.524 2.7444C20.1208 4.36265 21.0191 6.55757 21.0191 8.84669H21.1191ZM18.5951 15.0192C20.2115 13.3821 21.1191 11.1619 21.1191 8.84669H21.0191C21.0191 11.1358 20.1217 13.3307 18.524 14.949L18.5951 15.0192ZM17.3156 15.0193C17.6694 15.3758 18.2412 15.3758 18.595 15.0193L18.5241 14.9489C18.2093 15.266 17.7013 15.266 17.3865 14.9489L17.3156 15.0193ZM17.3154 13.725C16.9637 14.0831 16.9637 14.6611 17.3154 15.0191L17.3867 14.9491C17.0733 14.63 17.0733 14.1142 17.3867 13.7951L17.3154 13.725ZM19.3118 8.84669C19.3118 10.6766 18.5935 12.4314 17.3155 13.7249L17.3866 13.7952C18.6833 12.4828 19.4118 10.7027 19.4118 8.84669H19.3118ZM17.3155 3.96843C18.5935 5.26201 19.3118 7.0168 19.3118 8.84669H19.4118C19.4118 6.99066 18.6833 5.21057 17.3866 3.89815L17.3155 3.96843ZM17.002 3.30934C17.0119 3.56524 17.1261 3.80393 17.3183 3.97102L17.3839 3.89556C17.2126 3.74667 17.1108 3.53394 17.1019 3.30545L17.002 3.30934ZM17.2666 2.62467C17.088 2.80557 16.992 3.0534 17.002 3.30934L17.1019 3.30545C17.093 3.07699 17.1787 2.85605 17.3378 2.69493L17.2666 2.62467ZM17.9436 2.35636C17.6903 2.34624 17.4453 2.44374 17.2666 2.62467L17.3378 2.69493C17.4968 2.53383 17.7146 2.44729 17.9396 2.45628L17.9436 2.35636ZM6.47593 2.7445C6.79064 2.42739 7.29873 2.42739 7.61344 2.7445L7.68442 2.67406C7.3306 2.31753 6.75877 2.31753 6.40495 2.67406L6.47593 2.7445ZM3.98091 8.84669C3.98091 6.55756 4.8783 4.36265 6.47602 2.74441L6.40486 2.67415C4.78853 4.31125 3.88091 6.53146 3.88091 8.84669H3.98091ZM6.47603 14.949C4.87915 13.3307 3.98091 11.1358 3.98091 8.84669H3.88091C3.88091 11.1619 4.78939 13.3821 6.40485 15.0192L6.47603 14.949ZM7.61344 14.9489C7.29873 15.266 6.79064 15.266 6.47593 14.9489L6.40495 15.0193C6.75877 15.3758 7.3306 15.3758 7.68442 15.0193L7.61344 14.9489ZM7.61326 13.7951C7.9267 14.1142 7.9267 14.63 7.61326 14.9491L7.6846 15.0191C8.03625 14.6611 8.03625 14.0831 7.6846 13.725L7.61326 13.7951ZM5.58821 8.84669C5.58821 10.7027 6.31672 12.4828 7.61336 13.7952L7.6845 13.7249C6.40647 12.4314 5.68822 10.6766 5.68822 8.84669H5.58821ZM7.61336 3.89815C6.31672 5.21057 5.58821 6.99066 5.58821 8.84669H5.68822C5.68822 7.0168 6.40647 5.26201 7.6845 3.96843L7.61336 3.89815ZM7.61326 2.74432C7.9267 3.06342 7.9267 3.57915 7.61326 3.89825L7.6846 3.96833C8.03625 3.61032 8.03625 3.03225 7.6846 2.67424L7.61326 2.74432ZM8.97866 6.45581C9.76659 5.26732 11.0872 4.55451 12.4998 4.55623L12.4999 4.45623C11.0533 4.45447 9.70156 5.18443 8.89532 6.40056L8.97866 6.45581ZM8.57792 10.4773C8.04072 9.15304 8.19073 7.64431 8.97866 6.45581L8.89532 6.40056C8.08908 7.61667 7.93568 9.16015 8.48526 10.5149L8.57792 10.4773ZM11.6529 13.0514C10.2681 12.7666 9.11511 11.8014 8.57792 10.4773L8.48526 10.5149C9.03485 11.8696 10.2148 12.8577 11.6327 13.1493L11.6529 13.0514ZM11.6928 20.1319V13.1003H11.5928V20.1319H11.6928ZM12.4999 20.95C12.055 20.95 11.6928 20.5841 11.6928 20.1319H11.5928C11.5928 20.6381 11.9986 21.05 12.4999 21.05V20.95ZM13.307 20.1319C13.307 20.5841 12.9448 20.95 12.4999 20.95V21.05C13.0012 21.05 13.407 20.6381 13.407 20.1319H13.307ZM13.307 13.1003V20.1319H13.407V13.1003H13.307ZM16.4218 10.4773C15.8846 11.8014 14.7316 12.7666 13.3469 13.0514L13.367 13.1493C14.7849 12.8577 15.9649 11.8696 16.5145 10.5149L16.4218 10.4773ZM16.0211 6.45579C16.8082 7.64432 16.959 9.15306 16.4218 10.4773L16.5145 10.5149C17.0641 9.16013 16.9098 7.61666 16.1045 6.40058L16.0211 6.45579ZM12.4999 4.55623C13.9126 4.55537 15.234 5.26735 16.0211 6.45579L16.1045 6.40058C15.299 5.1844 13.9464 4.45535 12.4998 4.45623L12.4999 4.55623ZM10.6464 10.723C11.1374 11.2212 11.8042 11.501 12.4999 11.501V11.401C11.8311 11.401 11.19 11.1321 10.7176 10.6528L10.6464 10.723ZM9.87863 8.84669C9.87863 9.54992 10.1555 10.2249 10.6464 10.723L10.7176 10.6528C10.2452 10.1735 9.97863 9.52372 9.97863 8.84669H9.87863ZM10.6465 6.9703C10.1546 7.46762 9.87863 8.14351 9.87863 8.84669H9.97863C9.97863 8.16959 10.2444 7.51904 10.7176 7.04062L10.6465 6.9703ZM12.4999 6.19241C11.805 6.19241 11.1383 6.47305 10.6465 6.9703L10.7176 7.04062C11.1908 6.56214 11.832 6.29241 12.4999 6.29241V6.19241ZM14.3534 6.97037C13.8623 6.47214 13.1947 6.19241 12.4999 6.19241V6.29241C13.1678 6.29241 13.8098 6.56131 14.2821 7.04056L14.3534 6.97037ZM15.1211 8.84669C15.1211 8.14345 14.8443 7.46848 14.3534 6.97037L14.2821 7.04056C14.7546 7.51992 15.0211 8.16966 15.0211 8.84669H15.1211ZM14.3533 10.7231C14.8452 10.2258 15.1211 9.54986 15.1211 8.84669H15.0211C15.0211 9.52378 14.7554 10.1743 14.2822 10.6527L14.3533 10.7231ZM12.4999 11.501C13.1948 11.501 13.8615 11.2203 14.3533 10.7231L14.2822 10.6527C13.8089 11.1312 13.1677 11.401 12.4999 11.401V11.501ZM21.0205 0.217394C20.6667 -0.139131 20.0948 -0.139131 19.741 0.217394L19.812 0.287835C20.1267 -0.0292783 20.6348 -0.0292783 20.9495 0.287835L21.0205 0.217394ZM21.035 0.269976V0.252615H20.935V0.269976H21.035ZM24.5499 8.86408C24.5499 5.6278 23.2806 2.52388 21.0206 0.234847L20.9494 0.305105C23.1908 2.57529 24.4499 5.65392 24.4499 8.86408H24.5499ZM21.0206 17.4933C23.2806 15.2052 24.5499 12.1004 24.5499 8.86408H24.4499C24.4499 12.0743 23.1908 15.1537 20.9494 17.4231L21.0206 17.4933ZM20.3761 17.7599C20.6177 17.7618 20.8491 17.6651 21.0204 17.4935L20.9496 17.4229C20.7969 17.5759 20.5912 17.6616 20.3768 17.6599L20.3761 17.7599ZM19.741 17.4934C19.9098 17.6634 20.1384 17.759 20.3763 17.7599L20.3767 17.6599C20.1654 17.6591 19.9621 17.5742 19.812 17.423L19.741 17.4934ZM19.7408 16.1991C19.3892 16.5571 19.3892 17.1352 19.7408 17.4932L19.8122 17.4231C19.4987 17.104 19.4987 16.5883 19.8122 16.2692L19.7408 16.1991ZM22.752 8.8554C22.752 11.6115 21.6687 14.2535 19.741 16.199L19.812 16.2694C21.7584 14.305 22.852 11.6377 22.852 8.8554H22.752ZM19.741 1.51182C21.6687 3.45733 22.752 6.09928 22.752 8.8554H22.852C22.852 6.0731 21.7584 3.4058 19.812 1.44143L19.741 1.51182ZM19.7408 0.217577C19.3892 0.575584 19.3892 1.15365 19.7408 1.51166L19.8122 1.44159C19.4987 1.12248 19.4987 0.606756 19.8122 0.287652L19.7408 0.217577Z"
        fill={fill || 'currentColor'}
      />
    </g>
    <defs>
      <clipPath id="clip0_6216_14535">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInfo;