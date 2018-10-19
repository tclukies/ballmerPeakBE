exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinker').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinker').insert([
        {name:  'Kyle Coberly',
        weight: 180,
        drinks: 7,
        start: '2018-10-19 09:09:11.761166+03',
        end: '2018-10-19 21:09:11.761166+03'
        }
      ]);
    });
};
