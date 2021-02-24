import React from 'react';

const DefaultLayout = (props) => {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link href="/css/bootstrap.css" rel="stylesheet" />
                <link href="/fontawesome/css/all.min.css" rel="stylesheet" />
            </head>
            <body className="container">
                <hr />
                <h1>Node + Express + React-View ( server-side )</h1>
                <hr />
                {props.children}
            </body>


        </html>

    );
};

export default DefaultLayout;