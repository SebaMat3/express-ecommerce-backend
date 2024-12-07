const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

//READ users

router.get('/', (req, res) => {
	const users = [];
	const {size} = req.query;
	const limit = size || 10;
	for (let i = 0; i < limit; i++) {
		users.push({
			name: faker.person.firstName(),
			lastName: faker.person.lastName(),
			image: faker.image.url(),
		});
	}
res.json(users);
});

//READ user

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		id,
    name: faker.person.firstName(),
		lastName: faker.person.lastName(),
		image: faker.image.url(),
	});
});

//CREATE

router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		message: 'Creation',
		data: body
	});
});

//UPDATE

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	res.json({
		message: 'Update',
		data: body,
		id
	});
});

//DELETE

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		message: 'deleted element',
		id
	});
});

module.exports = router;
