const jwt = require('jsonwebtoken');
const User = require('../../models/UserModel/User');

exports.getUserDetails = async (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ message: 'No token provided.' });
    }

    jwt.verify(token.split(" ")[1], 'rjStudioToken', async (err, decoded) => {
        if (err) {
            console.error('Token verification failed:', err);
            return res.status(500).send({ message: 'Failed to authenticate token.', err });
        }

        const username = decoded.userName;
        if (!username) {
            return res.status(400).send({ message: 'Invalid token payload.' });
        }

        try {
            const user = await User.findOne({ email: username }, { _id: 1, firstName: 1, lastName: 1, email: 1, });
            if (!user) {
                return res.status(404).send({ message: 'User not found.' });
            }

            res.status(200).send(user);
        } catch (dbError) {
            console.error('Database error:', dbError);
            res.status(500).send({ message: 'Database error.', dbError });
        }
    });
};
