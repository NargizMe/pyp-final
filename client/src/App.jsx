import { useState } from 'react';
import DetailsPage from './pages/details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DetailsPage/>
    </>
  )
}

export default App
