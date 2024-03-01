import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, Web, Inventory, QuestionAnswer } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ButtonDrawer({open, onClose}: {open:boolean, onClose : () => void} ) {
    const navigate = useNavigate();

    const handleMenuClick = (destination: string) => {
        navigate(destination);
        onClose(); // 메뉴를 클릭했을 때 Drawer를 닫습니다.
    };
    
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
          <List>
              <ListItem key='Dashboard' disablePadding>
                <ListItemButton onClick={() => handleMenuClick('./dashboard')}>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                  </ListItemButton>
              </ListItem>
              <ListItem key='Page' disablePadding>
                <ListItemButton onClick={() => handleMenuClick('./page')}>
                    <ListItemIcon>
                      <Web />
                    </ListItemIcon>
                    <ListItemText primary='Page' />
                  </ListItemButton>
              </ListItem>
              <ListItem key='Project' disablePadding>
                <ListItemButton onClick={() => handleMenuClick('./project')}>
                    <ListItemIcon>
                      <Inventory />
                    </ListItemIcon>
                    <ListItemText primary='Project' />
                  </ListItemButton>
              </ListItem>
              <ListItem key='QnA' disablePadding>
                 <ListItemButton onClick={() => handleMenuClick('./qna')}>
                  <ListItemIcon>
                    <QuestionAnswer />
                  </ListItemIcon>
                  <ListItemText primary='QnA' />
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      );
    return (
        <Drawer open={open} onClose={onClose}>
            {DrawerList}
        </Drawer>
    );
  }