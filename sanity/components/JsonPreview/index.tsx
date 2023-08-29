import React from 'react'

export function JsonPreview({ document }: any) {
    return(
        <div className='p-5'>
            <h1>{`JSON Data ${document.displayed.title}`}</h1>
            <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
        </div>
    )
}
