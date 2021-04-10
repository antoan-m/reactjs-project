import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
    };
}


static getDerivedStateFromError(error) {
    return {
        hasError: true
    }
}

componentDidCatch(error, errorInfo) {
    console.log('Error: ', error);
}

render() {

   if (this.state.hasError) {
        return <article className="error-page">
            <h2>Ooops, something went wrong...</h2>
        <img src={process.env.PUBLIC_URL + '/error.jpg'} alt="Ooops, something went wrong..." />
      </article>
    }
    return this.props.children;
}

}

export default ErrorBoundary;