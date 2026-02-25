import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import HandoutPage from './components/HandoutPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path=":handoutId" element={<HandoutPage />} />
      </Route>
    </Routes>
  );
}
