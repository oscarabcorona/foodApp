const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const BarService = require('../../services/barService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.barRead,
    );

    const payload = await new BarService(
      req,
    ).findAndCountAll(req.query);

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
