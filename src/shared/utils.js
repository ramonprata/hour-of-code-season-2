export const goToPreview = book => {
  window.open(book.volumeInfo.previewLink);
};
