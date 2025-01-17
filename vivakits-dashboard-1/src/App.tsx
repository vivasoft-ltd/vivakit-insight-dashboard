import { VKFlex, VKLayout, VKNotifications } from '@vivakits/react-components';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './navbar/NavBar';
import SideBar from './sidebar/SideBar';

const App = () => {
  return (
    <VKLayout>
      <VKNotifications />
      <NavBar />
      <VKFlex className="z-0 w-full h-[calc(100%-3rem)] mt-[calc(4rem)]">
        <SideBar />
        <Dashboard />
      </VKFlex>
    </VKLayout>
  );
};

export default App;
