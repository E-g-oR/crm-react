import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SendRounded } from '@mui/icons-material';
import { NameInput, NameInputType } from './CategoriesCreate';
import { Controller, useForm } from 'react-hook-form';
import { Store } from '../../utils/store';
import { observer } from 'mobx-react';
import { ICategoryUI } from '../../utils/store/authStore/authInfoStore';

const CategoriesEdit: React.FC<{ store: Store }> = observer(({ store }) => {

  const authInfoStore = store.authStore.authInfoStore
  const [Categories, setCategories] = useState<ICategoryUI[] | null>(null);

  useEffect(() => {
    const categoriesArr = [];
    const cat = authInfoStore.categories
    if (cat) {
      for (let key in cat) {
        const newCategory:ICategoryUI = {...cat[key], key};
        categoriesArr.push(newCategory)
      }
    }
    setCategories(categoriesArr)
  }, [authInfoStore])

  const { control, formState: { errors }, reset, handleSubmit, clearErrors } = useForm({
    defaultValues: {
      name: '',
      limit: 1,
    },
    mode: "onChange"
  });

  function onSubmit(data: NameInputType) {
    console.log(data);
    reset();
    clearErrors();
  }

  return (
    <Box sx={{ width: "100%", maxWidth: "450px" }}>
      <Paper variant="outlined" sx={{ padding: "1rem 2rem" }} >

        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5">Редактировать</Typography>

          <Stack direction="column" spacing={2} sx={{ mt: 2, mb: 1 }} >


            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Название</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Название"
                  >
                    {Categories && Categories.map(category => (
                      <MenuItem key={category.name} value={category.limit}>{category.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />

            <NameInput control={control} name="limit" rules={{ required: true }} />

            <Button type="submit" variant="contained" endIcon={<SendRounded />} >
              Редактировать
            </Button>
          </Stack>

        </form>

      </Paper>
    </Box>
  )
})



export default CategoriesEdit;
