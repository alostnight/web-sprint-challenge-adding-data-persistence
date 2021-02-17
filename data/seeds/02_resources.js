const { resource } = require("../../api/server")

exports.seed = async function(knex) {
    await knex("resources").insert([
        {name: "resource 1", description: "1"},
        {name: "resource 2", description: "2"},
        {name: "resource 3", description: "3"},
        {name: "resource 4", description: "4"},
        {name: "resource 5", description: "5"},
    ])
}