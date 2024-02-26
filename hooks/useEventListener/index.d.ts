import { RefObject } from 'react';
import { GenericEventCallback } from '../../types';
export declare const useEventListener: ({ eventName, callback, ref, capture, }: {
    eventName: keyof HTMLElementEventMap | string;
    callback: GenericEventCallback;
    ref: RefObject<HTMLElement | Document>;
    capture?: boolean | undefined;
}) => void;
