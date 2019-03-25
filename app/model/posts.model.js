module.exports = (sequelize, Sequelize) => {
	const Posts = sequelize.define('posts', {
	  title: {
		  type: Sequelize.STRING
	  },
	  postdata: {
		  type: Sequelize.STRING
	  }
	});
	
	return Posts;
}