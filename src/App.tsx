
import { useEffect, useState } from 'react';
import './App.css';
import { getAllRoute } from './api/routeApi';
import { NavigateMenu } from './components/navigate/navigate.component';
import { AllRoute } from './routes/route';

export interface DataApiRoute {
  id: string
  title: string
  order: number
  path: string
}

function App() {
  const [allRoute, setAllRoute]: DataApiRoute[] | any[] = useState<DataApiRoute[]>([])

  useEffect(() => {
    getAllRoute()
      .then((data:DataApiRoute[]) => {
        setAllRoute(data)
      })
  }, [])

  return (
    <>
      <NavigateMenu allRoute={allRoute} />
      <AllRoute allRoute={allRoute} />
    </>
  );
}

export default App;
