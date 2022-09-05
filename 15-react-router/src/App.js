import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Error from './Error';
import SharedLayout from './SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  );
}

export default App;
