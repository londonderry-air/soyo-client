/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { SoyoMarkdown } from "../../soyo/elements/markdown"
import { usePost } from "../../soyo/hooks/usePost"

export const page = () => {
    const router = useRouter()
    const slug = router.query.slug as string
    const post = usePost(slug)

    if (!post) return <>post not found...</>

    return (
        <SoyoMarkdown post={post} />
    )
}

export default page