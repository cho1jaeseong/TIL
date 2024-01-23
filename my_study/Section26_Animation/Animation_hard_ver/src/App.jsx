import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <AnimatePresence> <ChallengesPage /> </AnimatePresence>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
