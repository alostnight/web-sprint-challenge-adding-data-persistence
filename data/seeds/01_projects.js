exports.seed = async function(knex) {
    await knex('projects').insert([
       {name: 'project 1', description: 'Des 1'},
       {name: 'project 2', description: 'Des 2'},
       {name: 'project 3', description: 'Des 3'},
       {name: 'project 4', description: 'Des 4'},
       {name: 'project 5', description: 'Des 5'},
    ])
  }