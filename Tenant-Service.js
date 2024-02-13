// const Queue = require("bull");
// const { db } = require("./db");
// const migrate = require("./migrations");
// // const seed = require("../seeders")/;
// const { bootstrap, getTenantConnection } = require("./Connection-Service");

// const up = async (params) => {
//   await db.raw(`CREATE ROLE ${params.tenantName} WITH LOGIN;`); // Postgres requires a role or user for each tenant
//   //   await db.raw(`GRANT ${params.tenantName} TO ADMIN;`); // you need provide permissions to your admin role in order to allow the database administration
//   await db.raw(`CREATE DATABASE ${params.tenantName};`);
//   await db.raw(
//     `GRANT ALL PRIVILEGES ON DATABASE ${params.tenantName} TO ${params.tenantName};`
//   );
//   console.log("ges");
//   await bootstrap(); // refresh tenant connections to include the new one as available
//   const tenant = getTenantConnection(params.uuid);
//   await migrate(tenant); // create all tables in the current tenant database
//   // await seed(tenant); // fill tables with dummy data
// };

// module.exports = { up };
