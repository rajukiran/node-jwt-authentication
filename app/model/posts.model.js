module.exports = (sequelize, Sequelize) => {
	const Posts = sequelize.define('posts', {
		postId: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		title: {
			type: Sequelize.STRING
		},
		postdata: {
			type: Sequelize.STRING
		}
	});

	return Posts;
}