import { RefObject } from 'react';
import { GenericEventCallback } from '../../types';
export declare const useOnClickOutside: ({ ref, callback, }: {
    ref: RefObject<HTMLElement>;
    callback: GenericEventCallback;
}) => void;
