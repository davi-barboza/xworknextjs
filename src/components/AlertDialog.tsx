import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

type Props = {
  title: string;
  content: string;
  open: boolean;
};

const AlertDialog: React.FC<Props> = (props: Props) => {
  const { title, content, open } = props;
  const [openAlert, setOpenAlert] = useState(open);

  const handleClose = () => {
    setOpenAlert(false);
  };

  return (
    <div>
      <Dialog open={openAlert} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
