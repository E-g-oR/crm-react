import React from 'react';
import { Alert, Button, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SendRounded } from '@mui/icons-material';
import { useForm, UseControllerProps, useController } from 'react-hook-form';
import store, { Store } from '../../utils/store';
import { useSnackbar } from 'notistack';

interface CreateCategoryInput {
  name: string,
  limit: number
}

const CategoriesCreate: React.FC = () => {
  const { control, reset, handleSubmit, clearErrors } = useForm({
    defaultValues: {
      name: '',
      limit: 1,
    },
    mode: "onChange"
  });

  function onSubmit(data: CreateCategoryInput) {
    const result = store.authStore.authInfoStore.addCategory(data.name, data.limit);
    reset();
    clearErrors();
  }

  return (
    <Box sx={{ width: "100%", maxWidth: "450px" }}>
      <Paper variant="outlined" sx={{ padding: "1rem 2rem" }} >

        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5">Создать</Typography>

          <Stack direction="column" spacing={2} sx={{ mt: 2, mb: 1 }} >
            <NameInput control={control} name="name" rules={{ required: true }} />
            <NameInput control={control} name="limit" rules={{ required: true }} />
            <Button type="submit" variant="contained" endIcon={<SendRounded />} >Создать</Button>
          </Stack>

        </form>

      </Paper>
    </Box>
  )
}

export type NameInputType = {
  name: string;
  limit: number;
}
export function NameInput(props: UseControllerProps<NameInputType>) {
  const { field, fieldState } = useController(props);
  const fiealdInfo = () => field.name === "name" ? ({
    lable: "Название",
    type: "text"
  }) : ({
    lable: "Лимит",
    type: "number"
  })
  return (
    <>
      <TextField
        {...field}
        error={!!fieldState.error}
        fullWidth
        id="name"
        label={fiealdInfo().lable}
        type={fiealdInfo().type}
        variant="outlined"
      />
    </>
  )
}
export default CategoriesCreate
