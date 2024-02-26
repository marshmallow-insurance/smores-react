import { FC } from 'react';
declare const typeColorScheme: {
    positive1: {
        text: string;
        logo: {
            body: string;
            eyes: string;
            pupils: string;
        };
    };
    positive2: {
        text: string;
        logo: {
            body: string;
            eyes: string;
            pupils: string;
        };
    };
    negative1: {
        text: string;
        logo: {
            body: string;
            eyes: string;
            pupils: string;
        };
    };
};
type LogoType = keyof typeof typeColorScheme;
export type LogoProps = {
    type?: LogoType;
    showText?: boolean;
    small?: boolean;
};
export declare const Logo: FC<LogoProps>;
export {};
