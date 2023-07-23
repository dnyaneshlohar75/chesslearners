"use client"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div>
      <Backdrop
          open = {true}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CircularProgress color = "inherit" />
      </Backdrop>
    </div>
  )
};

export default Loading;
