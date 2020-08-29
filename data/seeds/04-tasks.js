exports.seed = async function(knex) {
    await knex('tasks').insert([
       {description: 'Tasks 1', project_id: 2, notes: 'Note 1'},
       {description: 'Tasks 2', project_id: 4, notes: 'Note 2'},
       {description: 'Tasks 3', project_id: 1, notes: 'Note 3'},
       {description: 'Tasks 4', project_id: 2, notes: 'Note 4'},
       {description: 'Tasks 5', project_id: 5, notes: 'Note 5'},
    ])
  }
