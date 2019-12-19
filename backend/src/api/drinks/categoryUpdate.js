const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const CategoryService = require('../../services/categoryService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.categoryEdit,
    );

    const payload = await new CategoryService(req).update(
      req.body.id,
      req.body.data,
    );

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
