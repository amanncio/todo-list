const connection = require("./connection")

const getAll = async () => {
    const tasks = await connectio.execute("SELECT * FROM tasks");
    return tasks;
}

module.exports = {
    getAll,
}