import useSWR from "swr"
import { fetcher } from "../util/fetch"

export const usePost = (slug: string) => {
    const {data, error} = useSWR(`/api/post/${slug}`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 6000,
        focusThrottleInterval: 6000,
        errorRetryCount: 1
    })

    if (error) return null
    if (!data) return null

    return data
}

export type Post = {
    id: string
    title?: string
    slug?: string
    publish: boolean
    release: Date
    markdown?: string
}