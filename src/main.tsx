import ReactDOM from 'react-dom/client';
import App from './App';
import PlanetsProvider from './context/api-planets-provider';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <PlanetsProvider>
      <App />
    </PlanetsProvider>,
  );
