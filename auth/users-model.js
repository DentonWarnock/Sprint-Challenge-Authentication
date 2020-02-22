const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username", "password");
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}
