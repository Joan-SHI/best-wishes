
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, to: 'Cathy', body: 'Ollie is an awesome guy', from: 'Ollie', like_count: 100, color: 'red', archived: false},
        {id: 2, to: 'Ollie', body: 'Ollie is a fantastically great guy', from: 'Ollie', like_count: 99, color: 'blue', archived: false},
        {id: 3, to: 'Kelly', body: 'Ollie is a my best friend and a great guy', from: 'Ollie', like_count: 12, color: 'yellow', archived: false},
        {id: 4, to: 'Joan', body: 'Ollie is a really great guy', from: 'Ollie', like_count: 4, color: 'green', archived: false},
        {id: 5, to: 'Bobbi', body: 'Ollie has amazing manners', from: 'Ollie', like_count: 5, color: 'green', archived: false},
        {id: 6, to: 'Sung-mi', body: 'Ollie is super cool', from: 'Ollie', like_count: 3, color: 'pink', archived: false},
        {id: 7, to: 'Robbie', body: 'Ollie inspires the masses wherever he goes', from: 'Ollie', like_count: 1, color: 'orange', archived: false},
        {id: 8, to: 'Ruby', body: 'Ollie has the best jokes', from: 'Ollie', like_count: 17, color: 'aqua', archived: false},
        {id: 9, to: 'Peter', body: 'Ollie is a real stand-up guy', from: 'Ollie', like_count: 19, color: 'turqoise', archived: false},
        {id: 10, to: 'James', body: 'Ollie makes the best cookies', from: 'Ollie', like_count: 9, color: 'red', archived: false},
        {id: 11, to: 'Taz', body: 'Ollie makes me want to be a better man', from: 'Ollie', like_count: 91, color: 'coral', archived: false},
        {id: 12, to: 'Brandon', body: 'Ollie is my everything', from: 'Ollie', like_count: 55, color: 'teal', archived: false}
      ]);
    });
};
