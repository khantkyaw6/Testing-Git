const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ msg: 'This is all post routes' });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json({ msg: 'This is post id' + id });
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.patch('/:id', (req, res) => {
  res.json({ msg: 'Edited id is ' + req.params.id });
});

router.delete('/:id', (req, res) => {
  res.json({ msg: 'Deleted id is ' + req.params.id });
});

module.exports = router;
