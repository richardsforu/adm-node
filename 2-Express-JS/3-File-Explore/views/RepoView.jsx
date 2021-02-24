import React from 'react';
const RepoView = (props) => {

    let { result } = props;
    //let result=props.result;

    const renderFileIcon = (ext) => {
        if (ext === 'pdf') return ">>>PDF"
        if (ext === 'txt') return ">>>TEXT"
        if (ext === 'jpg') return ">>>JPEG"

    }

    const renderData = () => {

        return result.map((item) => {
            return (
                <div>
                    <li>
                        <a href={item} > {item.substring(0, item.lastIndexOf('.'))}</a>
                        {renderFileIcon(item.substring(item.lastIndexOf('.') + 1))}</li>
                </div>
            )
        })

    }

    return (
        <div>
            { renderData()}
        </div>

    )
}

export default RepoView;