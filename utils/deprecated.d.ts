export declare const isLocal: boolean;
type UseDeprecatedWarningParams = {
    enabled?: boolean;
    title: string;
    message: string;
    componentProps?: Record<string, any>;
};
export declare const useDeprecatedWarning: ({ enabled, title, message, componentProps, }: UseDeprecatedWarningParams) => void;
export {};
