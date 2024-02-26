import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { ReactNode } from 'react';

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: ReactNode;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, title, message }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus style={{
            backgroundColor: 'black',
            color : "white",
            fontWeight: "bold", 
            fontSize: ".8rem"
        }}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;