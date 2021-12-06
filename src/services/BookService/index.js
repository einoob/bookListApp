import request from '../request';

const getBooks = () =>
  request({
    url: `/books`,
    method: 'get',
  });

const createBook = (payload) =>
  request({
    url: `/books`,
    method: 'post',
    data: {
      ...payload,
    },
  });

const deleteBook = (id) =>
  request({
    url: `/books/${id}`,
    method: 'delete',
  });

const editBook = (id, payload) =>
  request({
    url: `/books/${id}`,
    method: 'put',
    data: {
      ...payload,
    },
  });

const BookService = {
  getBooks,
  createBook,
  deleteBook,
  editBook,
};

export default BookService;
