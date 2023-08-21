import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MockFetch } from './mockFetch';
import { vi } from 'vitest';

test('Teste se uma das colunas é Name', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (MockFetch),
  });
  render(<App />);
  const name = screen.getByRole('columnheader', {name: /name/i});
  expect(name).toBeInTheDocument();
});

test('Teste se uma das colunas é Rotate Period', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (MockFetch),
  });
  render(<App />);
  const rotatePeriod = screen.getByRole('columnheader', {name: /rotate period/i});
  expect(rotatePeriod).toBeInTheDocument();
});

test('Teste se uma das colunas é Diameter', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (MockFetch),
  });
  render(<App />);
  const diameter = screen.getByRole('columnheader', {name: /diameter/i});
  expect(diameter).toBeInTheDocument();
});

test('Teste se uma das colunas é Climate', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (MockFetch),
  });
  render(<App />);
  const climate = screen.getByRole('columnheader', {name: /gravity/i});
  expect(climate).toBeInTheDocument();
});
