export function selectBook(book) {
  // action always contains a type, sometimes contains a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
