exports.seed = async function(knex) {
    await knex('tasks').insert([
       {projects_id: 2, description: 'Tasks 1', notes: 'Note 1', completed: false},
       {projects_id: 4, description: 'Tasks 2', notes: 'Note 2', completed: true},
       {projects_id: 1, description: 'Tasks 3', notes: 'Note 3', completed: true},
       {projects_id: 2, description: 'Tasks 4', notes: 'Note 4', completed: false},
       {projects_id: 5, description: 'Tasks 5', notes: 'Note 5', completed: false},
    ])
  }
