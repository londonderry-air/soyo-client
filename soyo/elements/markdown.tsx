import { gen } from "middle"
import dynamic from "next/dynamic"
import { Post } from "../hooks/usePost"

export const SoyoMarkdown = (props: { post: Post }) => {
    const tokens = gen(props.post.markdown ?? '')

    console.log(tokens)

    const elements = [tokens.map(t => {
        if (t.isHTML) {
            return <div dangerouslySetInnerHTML={{__html: t.content as string}} />
        } else {
            const content = t.content as {component: string, props: string[]}
            const Component = dynamic<{data: string[]}>(() => import(`${process.env.NEXT_PUBLIC_MIDDLE_COMPONENT_PATH}/${content.component}`))
            return Component ? <Component data={content.props ?? []} /> : <></>
        }
    })]
    return <>{elements.map(e => e)}</>
}

type HTMLToken = {
    isHTML: boolean;
    content: {
        component: string;
        props: string[];
    } | string;
};
