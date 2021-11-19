import { Button, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { observer } from 'mobx-react'
import React from 'react'
import { Store } from '../../utils/store'
import LoadingCircul from '../components/UI/LoadingCircul/LoadingCircul'

const HomeAccount: React.FC<{ store: Store }> = observer(({ store }) => {
  const authStore = store.authStore;
  const authInfoStore = authStore.authInfoStore;


  const increase = () => {
    if (authInfoStore.userAccountInfo) {
      let bill = authInfoStore.userAccountInfo.bill
      authInfoStore.updateBill(bill++);
    }

  }

  return (
    <Paper variant="outlined" sx={{ flex: 1.5 }} >
      <Stack direction="column" spacing={3} p="1rem 2rem" textAlign="center" >
        <div>
          <Typography component="h2" variant="h5">Счет</Typography>
          {authInfoStore.userAccountInfo ?
            <Typography variant="h6">{authInfoStore.userAccountInfo.bill}</Typography> :
            <LoadingCircul />
          }
        </div>
        <div>
          <Typography component="h2" variant="h5">Сбережения</Typography>
          {authInfoStore.userAccountInfo ?
            <Typography variant="h6">
              {`${authInfoStore.userAccountInfo.savings.value} ${authInfoStore.userAccountInfo.savings.currency}`}
            </Typography> :
            <LoadingCircul />
          }
        </div>
        <Button variant="outlined" onClick={increase} >Increase account value</Button>
      </Stack>



    </Paper>
  )
});

export default HomeAccount
