import React from 'react';
import { Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Actions() {
  

  return (
    <div className='global-font'>
      <div className='mr-2p d-flex jc-start'>
        <span  className='fs-24 fw-100 ml-10'>
            פעולות
        </span>
        <SearchIcon fontSize="large" />
      </div>
      <Divider className='ml-2p mr-2p mb-20'/>
    </div>
  );
}
