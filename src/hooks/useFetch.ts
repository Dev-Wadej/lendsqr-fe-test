import { useState, useEffect } from "react"

interface UseFetchResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
}
export const base_url =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

const useFetch = <T>(url?: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url ?? base_url)
        if (!response.ok) {
          throw new Error("Error")
        }
        const result: T = await response.json()
        setData(result)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
