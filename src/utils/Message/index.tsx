import { Alert, Snackbar } from '@mui/material'
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { Store } from '../store';

const Messages: React.FC<{ store: Store }> = observer(({ store }) => {

  const messagesStore = store.messagesStore;
  const [Open, setOpen] = useState(messagesStore.isOpen);
  const [Message, setMessage] = useState(messagesStore.message);
  const [Status, setStatus] = useState(messagesStore.status);

  const closeFunc = () => messagesStore.close();

  useEffect(() => {
    setMessage(messagesStore.message);
    setStatus(messagesStore.status);
    setOpen(messagesStore.isOpen);
  }, [messagesStore.message, messagesStore.isOpen, messagesStore.status])

  return (
    <Snackbar open={Open} autoHideDuration={6000} onClose={closeFunc}        >
      <Alert onClose={closeFunc} severity={Status} >{Message}</Alert>
    </Snackbar>
  )
});

export default Messages;
