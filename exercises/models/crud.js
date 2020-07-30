const User = require('./user');

const getUserById = (id) => {
	var user = User.findById(id);
	return user;
};

const getAllUsers = () => {
	var allUsers = User.find({}).exec();
	return allUsers;
};

const createUser = (userDetails) => {
	var newUser = User.create(userDetails);
	return newUser;
};
const removeUserById = (id) => {
	var removeUser = User.findByIdAndRemove(id).exec();
	return removeUser;
};

const updateUserById = (id, update) => {
	var updateUser = User.findByIdAndUpdate(id, update, { new: true }).exec();
	return updateUser;
};

module.exports = {
	getUserById,
	getAllUsers,
	createUser,
	removeUserById,
	updateUserById
};
