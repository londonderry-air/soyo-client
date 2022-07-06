import { useCallback, useEffect, useState } from "react"

// to use thie component on client,
// write markdown like @cmp[title](1)

export const Title = (props: { data: string[] }) => {
    const [d, setData] = useState<Data[] | null>()
    const fetchData = useCallback(async () => {
        const res = await fetch('/api/mock/data')
        const data = await res.json()
        setData(data)
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{width: '50%' ,display: 'flex', flexDirection: 'column', padding: '1em', border: 'solid 2px #212121'}}>
            <h3>{ d ? d[Number(props.data[0])].title : 'no data' }</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                <span>id: {d ? d[Number(props.data[0])].id : 'no user' }</span>
                <span>index: {Number(props.data[0])}</span>
            </div>
        </div>
    )
}

export const Elm = () => <>Title</>

export default Title

type Data = {
    userId: string
    id: string
    title: string
}