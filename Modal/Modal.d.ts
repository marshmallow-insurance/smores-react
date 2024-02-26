import { FC, ReactNode } from 'react';
export type ModalProps = {
    title?: string;
    icon?: string;
    children?: ReactNode;
    showModal?: boolean;
    handleClick: () => void;
    drawer?: boolean;
    cross?: boolean;
    width?: string;
    containerClass?: string;
    portalContainer?: Element | DocumentFragment;
};
export declare const Modal: FC<ModalProps>;
