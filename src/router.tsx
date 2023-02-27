import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Configurations } from './pages/Configurations';
import { History } from './pages/History';
import { Home } from './pages/Home';
import { Messages } from './pages/Messages';
import { MessagesForm } from './pages/MessagesForm';
import { User } from './pages/User';
import { NewUser } from './pages/NewUser';
import { UserList } from './pages/UserList';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { NewProduct } from './pages/NewProduct';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/history" element={<History />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages-form" element={<MessagesForm />} />
        <Route path="/configurations" element={<Configurations />} />
      </Route>
    </Routes>
  );
}
