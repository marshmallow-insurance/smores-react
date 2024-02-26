import type { SetStateAction } from 'react';
export declare const useControllableState: <StateType>({ initialState, stateProp, }: {
    initialState: StateType;
    stateProp: StateType | undefined;
}) => readonly [StateType, (state: SetStateAction<StateType>) => void];
