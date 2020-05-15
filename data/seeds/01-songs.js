
exports.seed = function(knex, Promise) {
  return knex('songs').insert([
    {song_name: 'American Woman', artist: 'Lenny Kravitz'},
    {song_name: 'Blue Aint Your Color', artist: 'Keith Urban'},
    {song_name: 'Burn It to The Ground', artist: 'Nickelback'},
    {song_name: 'Body Like a Back Road', artist: 'Sam Hunt'},
    {song_name: 'Farmers Daughter', artist: 'Rodney Atkins'},
  ]);
};
