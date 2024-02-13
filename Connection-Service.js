// const knex = require("knex");
// const { getNamespace } = require("continuation-local-storage");
// const { db, config } = require("./db");
// let tenantMapping;

// const getConfig = (tenant) => {
//   const {
//     db_username: user,
//     db_name: database,
//     db_password: password,
//   } = tenant;
//   return {
//     ...config,
//     connection: {
//       ...config.connection,
//       user,
//       database,
//       password,
//     },
//   };
// };

// const getConnection = () => getNamespace("tenants").get("connection") || null;

// const bootstrap = async () => {
//   try {
//     console.log("line 30");
//     const tenants = await db
//       .select("uuid", "db_name", "db_username", "db_password")
//       .from("tenants");

//     tenantMapping = tenants.map((tenant) => ({
//       uuid: tenant.uuid,
//       connection: knex(getConfig(tenant)),
//     }));
//   } catch (e) {
//     console.error(e);
//   }
// };

// const getTenantConnection = (uuid) => {
//   const tenant = tenantMapping.find((tenant) => tenant.uuid === uuid);
//   console.log("line 42", tenant);

//   if (!tenant) return null;

//   return tenant.connection;
// };

// module.exports = { bootstrap, getTenantConnection };
