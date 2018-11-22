
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, to: 'Cathy', message: 'Ollie is an awesome guy', from: 'Ollie', like_count: 100, color: 'red', archived: false},
        {id: 2, to: 'Ollie', message: 'Ollie is a fantastically great guy', from: 'Joan', like_count: 99, color: 'blue', archived: false},
        {id: 3, to: 'Kelly', message: 'Ollie is a my best friend and a great guy', from: 'Cathy', like_count: 12, color: 'yellow', archived: false},
        {id: 4, to: 'Joan', message: 'Ollie is a really great guy', from: 'Robbie', like_count: 4, color: 'green', archived: true},
        {id: 5, to: 'Bobbi', message: 'Ollie has amazing manners', from: 'Ruby', like_count: 5, color: 'green', archived: false},
        {id: 6, to: 'Sung-mi', message: 'Ollie is super cool', from: 'Taz', like_count: 3, color: 'pink', archived: true},
        {id: 7, to: 'Robbie', message: 'Ollie inspires the masses wherever he goes', from: 'Brandon', like_count: 1, color: 'orange', archived: false},
        {id: 8, to: 'Ruby', message: 'Ollie has the best jokes', from: 'Peter', like_count: 17, color: 'aqua', archived: false},
        {id: 9, to: 'Peter', message: 'Ollie is a real stand-up guy', from: 'James', like_count: 19, color: 'turqoise', archived: false},
        {id: 10, to: 'James', message: 'Ollie makes the best cookies', from: 'Sung-mi', like_count: 9, color: 'red', archived: false},
        {id: 11, to: 'Taz', message: 'Ollie makes me want to be a better man', from: 'Bobbi', like_count: 91, color: 'coral', archived: false},
        {id: 12, to: 'Brandon', message: 'Ollie is my everything', from: 'Kelly', like_count: 55, color: 'teal', archived: false}
      ]);
    });
};
