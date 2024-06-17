interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
export declare const base_url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
declare const useFetch: <T>(url?: string) => UseFetchResult<T>;
export default useFetch;
