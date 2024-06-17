/// <reference types="react" />
type Props = {
    key: string;
    defaultValue: unknown;
};
declare const usePersistedState: ({ key, defaultValue }: Props) => {
    state: any;
    setState: import("react").Dispatch<any>;
};
export default usePersistedState;
