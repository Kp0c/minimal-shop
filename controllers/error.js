exports.notFoundController = (req, res, next) => {
  res.status(404).render('404', { title: 'Not found', path: null });
};
