var models = require('../models');
var faker = require('faker');

models.sequelize
  .sync({ force: true })
  .then(function () {
    //add Users
    var usersData = [];
    for (var i = 0; i < Math.random() * 100; i += 1) {
      var newUser = {
        username: faker.internet.userName()
      };
      usersData.push(newUser);
    }
    return models.User
      .bulkCreate(usersData, { returning: true} );
  })

  .then(function (users) {
    //add Post
    var postsData = [];
    for(var i = 0; i < Math.random() * 100; i += 1){
      var newPost = {
        title: faker.lorem.words().join(' '),
        content: faker.lorem.paragraphs()
      };
      postsData.push(newPost);
    }
    return models.Post
      .bulkCreate(postsData, { returning: true} )
      .then(function (posts) {
        users[0].setPosts(posts);
        return posts;
      });
  })
  .then(function (posts) {
    // create comments
    var commentsData = [];
    for(var i = 0; i < Math.random() * 100; i += 1){
      var newComment = {
        text: faker.lorem.words().join(' ')
      };
      commentsData.push(newComment);
    }
    return models.Comment
      .bulkCreate(commentsData, { returning: true })
      .then(function (comments) {
        models.User.findAll().then( function(users) {
          console.log(users);
          users[0].setComments(comments);
        });
        posts[0].setComments(comments);
      });
  });