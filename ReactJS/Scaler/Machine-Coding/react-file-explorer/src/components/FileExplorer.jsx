import React, { useState } from 'react'

function FileExplorer({ folderData }) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='container'>
            <h1>
                {folderData?.type == "folder" ? "📁" : "🗃️"}
                <span onClick={() => setToggle(!toggle)}>{folderData?.name}</span>
            </h1>
            {
                toggle &&
                <div className='children'>
                    {
                        folderData?.children?.map((child, index) => (
                            <FileExplorer key={index} folderData={child} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default FileExplorer
