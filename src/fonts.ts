import { Inter, Poppins, Source_Code_Pro } from "next/font/google";
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const subjectivity = localFont({
    src: "../fonts/subjectivity/Subjectivity-Bold.otf",
    display: 'swap',
    variable: "--font-subjectivity",
})

export const neueRegrade = localFont({
    src: "../fonts/NeueRegrade/Neue Regrade Variable.ttf",
    display: "swap",
    variable: "--font-neue-regrade",
})

export const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const helveticaRegular = localFont({
    src: "../fonts/helvetica-255/Helvetica.ttf",
    display: 'swap',
    variable: "--font-helvetica-regular",
})

export const helveticaBold = localFont({
    src: "../fonts/helvetica-255/Helvetica-Bold.ttf",
    display: 'swap',
    variable: '--font-helvetica-bold',
})