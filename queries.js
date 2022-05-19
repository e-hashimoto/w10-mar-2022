// This is all example for the proj

// const {User, Post} = require('../models');

// async function buildUser() {
//     const user = await User.build({
//         username: 'Alec',
//         password: 'password123!',
//         bio: 'I am Alec',
//         avatar: 'It was ok',
//         faveBread: 'Sandwiches'
//     });

//     await user.save()
// }

// // buildUser();

// async function createPost(title, content) {
//     const post = await Post.create({
//         title: title,
//         content: content,
//         userId: 1,
//         subId: 1
//     })

//     await post.save()
// }

// createPost('Is rice the new bread?', 'Please provide viable arguments.');

// async function findUserByPk (userId) {
//     const user = await User.findByPk(userId, {})

//     console.log(JSON.stringify(user, null, 2))
// }

// findUserByPk(1);

// async function getAllPost() {
//     const posts = await postMessage.findAll()

//     console.log(JSON.stringify(posts, null, 2))
// }

// getAllPost();

// apply function findUserByName(username) {
//     const user = await User.findOne({
//         where: {
//             username
//         }
//     })

//     console.log(JSON.stringify(user, null, 2))
// }

// findUserByName('Shane');

// async function findSomePosts(subId) {
//     const posts = await postMessage.findAll({
//         where: {
//             subId: subId
//         }
//     })

//     console.log(JSON.stringify(posts, null, 2))
// }

// findSomePosts(1);

// async function getEvenFewerPosts(subId, userId) {
//     const posts = await Post.findAll({
//         where: {
//             subId,
//             userId
//         }
//     })

//     console.log(JSON.stringify(posts, null, 2))
// }

// getEvenFewerPosts(1, 1);
