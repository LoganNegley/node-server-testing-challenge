
exports.up = function(knex) {
  return (
      knex.schema 
      .createTable('songs', tbl =>{
          tbl.increments()
          tbl.string('song_name')
          .notNullable()
          .unique();
          tbl.string('artist')
      })
  )
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('songs')
};
