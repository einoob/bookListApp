import React from 'react';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Page from '../../components/Page';

import BookForm from './components/BookForm';
import BookList from './components/BookList';

import BookService from '../../services/BookService';

const useStyles = makeStyles({
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const LandingPage = ({ data }) => {
  const classes = useStyles();
  const [submitting, setSubmitting] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState({});
  const [bookList, setBookList] = React.useState(data);

  const handleAdd = async () => {
    setSubmitting(true);
    const book = {
      title: 'Testi',
      author: {
        givenName: 'Teppo',
        familyName: 'Testaaja',
      },
      description: 'joo123',
    };
    try {
      const res = await BookService.createBook(book);
      const updatedBookList = bookList.concat(res.data);
      setBookList(updatedBookList);
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  React.useEffect(() => {
    console.count('render');
  }, []);

  return (
    <Page>
      <Container className={classes.contentContainer}>
        <BookList data={bookList} setSelectedBook={setSelectedBook} />
        {selectedBook.title && <BookForm book={selectedBook} />}
      </Container>
    </Page>
  );
};

export default LandingPage;
