import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListsPage from './pages/AdminsListPage';
import App from './App';
export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListsPage,
                path: '/admin'
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage
            }
        ]
    }
]
