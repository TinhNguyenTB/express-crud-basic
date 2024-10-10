const models = require("../models/index");

const findAll = async (req, res) => {
    try {
        // Find all users
        const users = await models.User.findAll();
        if (users.length === 0) {
            return res.status(400).json({
                ok: false,
                message: "list users are empty"
            });
        };
        return res.json({
            ok: true,
            data: users
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error: "Something went wrong!"
        });
    }
}

const create = async (req, res) => {
    try {
        // Validate data
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                ok: false,
                message: "Please enter data"
            });
        }
        // Check email exist
        const user = await models.User.findOne({
            where: { email: req.body.email }
        });
        if (user) {
            return res.status(400).json({
                ok: false,
                message: "Email was exist"
            });
        }
        // Create a new user
        const newUser = await models.User.create({
            firstName,
            lastName,
            email,
            password
        });

        return res.json({
            ok: true,
            data: newUser
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error: "Something went wrong!"
        });
    }
}

const update = async (req, res) => {
    try {
        // Validate data
        const { id, firstName, lastName } = req.body;
        if (!id || !firstName || !lastName) {
            return res.status(400).json({
                ok: false,
                message: "Please enter data"
            });
        }
        // Update user
        await models.User.update(
            {
                firstName,
                lastName
            },
            {
                where: {
                    id: req.body.id
                }
            }
        );
        return res.json({
            ok: true,
            message: "Update user succeed"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error: "Something went wrong!"
        });
    }
}

const deleteById = async (req, res) => {
    try {
        // Validate data
        if (!req.params.id) {
            return res.status(400).json({
                ok: false,
                message: "Invalid id"
            });
        }
        // Delete user
        await models.User.destroy({
            where: {
                id: req.params.id
            },
        });
        return res.json({
            ok: true,
            message: "Delete user succeed"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error: "Something went wrong!"
        });
    }
}

module.exports = {
    findAll,
    create,
    update,
    deleteById
}