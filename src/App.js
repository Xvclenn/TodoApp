import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminMain } from './components/AdminMain';
import { Header } from './components/Header';

import { Todos } from './components/Todos';

function App() {
    return (
        <div>
            <Header />
            <Todos />
            <AdminMain />
        </div>
    );
}

export default App;
