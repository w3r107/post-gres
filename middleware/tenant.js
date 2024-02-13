module.exports = tenant = (req, res, next, db) => {
  // Get token from header
  next();
  const tenant_id = req.header("App-Tenant");

  // Check if tenant is available
  if (!tenant_id) {
    return res
      .status(401)
      .json(
        new Response(401, "No App-Origin, authorization denied!").getResponse()
      );
  }

  try {
    // Add sequelize scope pattern to all models of tenant
    // Query teams table for App-Tenant and if valid, attach to request object.
    db.options.tenant_id = tenant_id;
    db.options.tenant_safe = false;
    req.tenant_id = tenant_id;
    next();
  } catch (err) {
    res
      .status(401)
      .json(
        new Response(
          401,
          "Invalid App-Origin, authorization denied!"
        ).getResponse()
      );
  }
};
