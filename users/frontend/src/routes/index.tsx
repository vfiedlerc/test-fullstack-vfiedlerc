import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { PrivateRoute } from './Route';
import { CreateUser } from '../pages/CreateUser';
import { EditUser } from '../pages/EditUser';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/auth" element={<PrivateRoute />}>
          <Route path="/auth/dashboard" element={<Dashboard />} />
          <Route path="/auth/create-user" element={<CreateUser />} />
          <Route path="/auth/edit-user" element={<EditUser />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
