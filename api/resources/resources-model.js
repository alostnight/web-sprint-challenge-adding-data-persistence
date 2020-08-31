const db = require('../../data/dbConfig')

const find = () => {
	return db('resources')
}

const findById = (id) => {
	return db('resources').where({ id }).first()
}

const add = data => {
	return db("resources")
	  .insert(data, "id")
	  .then(ids => {
		const [id] = ids;
  
		return db("resources")
		  .where({ id })
		  .first()
		  .then(resource => {
			return resource;
		  });
	  });
  };

module.exports = {
	find,
	findById,
	add,
} 
