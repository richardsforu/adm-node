import React, { Component } from 'react';
import DefaultLayout from './default'

class Index extends Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div className="container">
                    <hr />
                    <div>
                        <div className="jumbotron">
                            <h1 className="display-4">Todos!</h1>
                            <hr className="my-4" />
                            <a className="btn btn-primary btn-lg" href="/todos" role="button">manage</a>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Index;