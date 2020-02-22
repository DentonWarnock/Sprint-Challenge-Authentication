exports.seed = async knex => {
  await knex("users").truncate();

  await knex("users").insert([
    { username: "denton", password: "abcde" },
    { username: "grant", password: "abcde" },
    { username: "mike", password: "abcde" },
    { username: "josh", password: "abcde" },
    { username: "jeff", password: "abcde" }
  ]);
};
