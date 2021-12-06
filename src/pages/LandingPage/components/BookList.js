import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tableContainer: {
    margin: 8,
    minWidth: '40%',
  },
});

const BookListTableRow = ({ book, setSelectedBook }) => {
  const { title, author } = book;

  const handleClick = () => {
    setSelectedBook(book);
  };

  return (
    <TableRow onClick={handleClick} hover>
      <TableCell>{title}</TableCell>
      <TableCell>{author}</TableCell>
    </TableRow>
  );
};

const BookList = ({ data, setSelectedBook }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table classes={classes.tableContainer}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((book) => (
            <BookListTableRow book={book} setSelectedBook={setSelectedBook} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookList;
