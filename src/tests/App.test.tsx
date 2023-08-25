import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { MockFetch } from './mockFetch';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import PlanetsProvider from '../context/api-planets-provider';


describe('Verificar input de busca', () => {

  test('Se existe um input Search Planet', () => {
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

  
  test('Se dá para selecionar um filtro da coluna', () => {
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
  
  test('Se dá para selecionar um filtro de comparação', () => {
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

test('Se tem um input de colocar número e se dá para digitar um valor numérico', () => {
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
  userEvent.type(screen.getByTestId('value-filter'), '1000');
});

describe('Verificar a tabela', () => {

  test('Se tem aparece uma tabela na tela', () => {
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


describe('Verificar o botão Filtrar', () => {

  test('Se tem um botão com o nome Filtrar na tela e se ele funciona', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (MockFetch),
    });
    render(
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    );
    const filtrarBotão = screen.getByText(/filtrar/i);
    expect(filtrarBotão).toBeInTheDocument();
    userEvent.click(filtrarBotão);
  });
}
);
