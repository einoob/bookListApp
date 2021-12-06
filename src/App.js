import React from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [bookList, setBookList] = React.useState([]);

  React.useEffect(async () => {
    try {
      const res = await axios.get('/books');
      setBookList(res.data);
    } catch (error) {
      console.error('ERROR!', error);
    }
  }, []);

  console.log('bookList in index', bookList);
  if (!bookList.length) {
    return <CircularProgress />;
  }

  return <LandingPage data={bookList} />;
};

export default App;
