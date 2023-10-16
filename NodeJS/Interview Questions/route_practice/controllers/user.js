const getUser = (req, res) => {
    res.send("User found");
};

const postUser = (req, res) => {
    res.send("Post User");
};

const putUser= (req, res) => {
    res.send("Put User");
};

module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;