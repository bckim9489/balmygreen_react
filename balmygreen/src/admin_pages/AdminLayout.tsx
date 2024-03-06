import {useState} from 'react';
// import { useTheme } from '@emotion/react';
import ButtonAppBar from '../components/ButtonAppBar';
import ButtonDrawer from '../components/ButtonDrawer';

export default function Layout({children}:any) {


  const [open, setOpen] = useState(false);
  // const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };



  return (
    <div>
      <ButtonAppBar onClick={toggleDrawer(true)}/>
      <ButtonDrawer open={open} onClose={toggleDrawer(false)}/>
      {children}
    </div>
  );
}