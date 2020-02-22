exports.seed = async knex => {
  await knex("users").truncate();

  await knex("users").insert([
    { username: "denton", password: "pass" },
    { username: "grant", password: "pass" },
    { username: "mike", password: "pass" },
    { username: "josh", password: "pass" },
    { username: "jeff", password: "pass" }
  ]);
};
