exports.seed = async function(knex) {
    await knex('projects').insert([
       {name: 'project 1', description: 'Des 1', completed: true},
       {name: 'project 2', description: 'Des 2', completed: false},
       {name: 'project 3', description: 'Des 3', completed: true},
       {name: 'project 4', description: 'Des 4', completed: false},
       {name: 'project 5', description: 'Des 5', completed: true},
    ])
  }