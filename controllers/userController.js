const userModel = require('../models/user');

//create
exports.createUser = async (req, res) => {
    const body = req.body;
    const user = userModel.create({
        user_name: body.user_name,
        user_email: body.user_email,
        user_password: body.user_password,
        user_role: body.user_role
    });
    console.log(user);
    return res.status(201).json({message : "User created successfully"});
}

//get
exports.getAllUsers =  async (req, res) => {
    const allUsers = await userModel.find({});
    return res.json(allUsers);
}

// get by id
exports.getById = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    return res.json(user);
}

// put
exports.updateUser = async (req, res) => {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedUser);
}

// delete
exports.deleteUser =   async (req, res) => {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    return res.json(deletedUser);
}

