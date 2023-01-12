import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Housing from '../../pages/Housing';
import NotFound from '../../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} replace />
    </Routes>
  );
};

export default AppRouter;
