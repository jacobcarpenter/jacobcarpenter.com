import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	/* latin */
	@font-face {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: local('Noto Sans Bold'), local('NotoSans-Bold'), url(https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyBx2pqPA.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	/* latin */
	@font-face {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Noto Sans'), local('NotoSans'), url(https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	/* latin */
	@font-face {
		font-family: 'Quicksand';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/quicksand/v20/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58a-xDwxUD2GFw.woff) format('woff');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	body {
		margin: 0;
		padding: 0;

		margin-bottom: 4em;

        color: ${({ theme }) => theme.colors.text};
		background: ${({ theme }) => theme.colors.pageBackground};

		font-family: 'Noto Sans', sans-serif;
		font-size: 18px;

		> * {
			box-sizing: border-box;
		}
	}
`;
