import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const BookForm = ({ book }) => {
  const [values, setValues] = React.useState(book);

  React.useEffect(() => {
    setValues(book);
    console.count('REnder form');
  }, [book]);

  const handleChange = (field, { target: { value } }) => {
    console.log(field, value);
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="title"
            label="Title"
            value={values.title}
            onChange={(value) => handleChange('title', value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="author"
            label="Author"
            value={values.author}
            onChange={(value) => handleChange('author', value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            name="description"
            label="Description"
            value={values.description}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default BookForm;
