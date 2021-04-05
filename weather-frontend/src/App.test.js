import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';
import LocationApp from './LocationApp'

let container = null;

beforeEach(() =>{
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() =>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('basic weather app', () => {
  render(<App />);
  const linkElement = screen.getByText(/the weather in/i);
  expect(linkElement).toBeInTheDocument();
});

test('basic location app', () => {
  render(<LocationApp />);
  const linkElement = screen.getByText(/Your location/i);
  expect(linkElement).toBeInTheDocument();
});