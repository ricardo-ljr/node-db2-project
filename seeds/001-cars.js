exports.seed = async function(knex) {
  const testData = [
    { VIN: "0000000001", make: "Chevy", model: "corvette", mileage: "23" },
    { VIN: "0000000002", make: "Chevy", model: "corvette2", mileage: "24" },
    { VIN: "0000000003", make: "Chevy", model: "corvette3", mileage: "25" }
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("cars").truncate();

  return knex("cars").insert(testData);
};
