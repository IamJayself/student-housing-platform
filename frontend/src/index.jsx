import './index.css';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Tailwind + React is Working!
      </h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
