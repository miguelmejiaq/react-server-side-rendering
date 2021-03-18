import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>Hello from home component</div>
            <button onClick={() => console.log('button pressed!')}>Press me!</button>
        </div>
    );
};

export default {
    component: HomePage
};