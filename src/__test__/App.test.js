import React from 'react';
import {cleanup, fireEvent, render, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'

afterEach(cleanup);

it('App.js: hello world가 상단에 노출된다', () => {
    expect(true).toBeTruthy();
    const {queryByText} = render( <App />);
    expect(queryByText('hello world')).toBeInTheDocument();
})