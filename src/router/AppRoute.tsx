import AppLayout from '@/components/common/Layout/AppLayout';
import HomePage from '@/pages/HomePage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const AppRoute = () => {
  return (
    <Router>
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/product-details/" element={<ProductDetailsPage />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoute