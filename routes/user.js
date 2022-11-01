const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ msg: 'This is all users route' });
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router
  .route('/:id')
  .get((req, res) => res.json({ msg: 'This is user id' + req.params.id }))
  .patch((req, res) => res.json({ msg: 'Edited id is ' + req.params.id }))
  .delete((req, res) => res.json({ msg: 'Deleted id is ' + req.params.id }));

// router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   res.json({ msg: 'This is user id' + id });
// });

// router.patch('/:id', (req, res) => {
//   res.json({ msg: 'Edit id is ' + req.params.id });
// });

// router.delete('/:id', (req, res) => {
//   res.json({ msg: 'Deleted id is ' + req.params.id });
// });

module.exports = router;
