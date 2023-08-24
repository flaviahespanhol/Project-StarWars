import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MockFetch } from './mockFetch';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import PlanetsProvider from '../context/api-planets-provider';


describe('Verifica input de busca', () => {

  test('Teste se existe um input de buscar planetas', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (MockFetch),
    });
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    );
    const inputSearch = screen.getByRole('textbox');
    expect(inputSearch).toBeInTheDocument();
  });
})

describe('Verificar os inputs de filtro', () => {

  test('Teste se tem um input de colocar número', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (MockFetch),
    });
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    );
    const numberInput = screen.getByRole('spinbutton');
    expect(numberInput).toBeInTheDocument();
  });

  test('Teste se tem um input de selecionar uma coluna', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (MockFetch),
    });
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    );
     userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
  });

  test('Teste se tem um input de selecionar uma comparação', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (MockFetch),
    });
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    );
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que');
  });
}
);

describe('Testando a tabela', () => {
  test('Teste se tem aparece uma tabela na tela', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (MockFetch),
    });
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    );
    const tabela = screen.getByRole('table');
    expect(tabela).toBeInTheDocument();
  });
}
);

// describe('')
