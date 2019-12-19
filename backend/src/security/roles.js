/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      manager: 'manager',
      employeeChash: 'employeeChash',
      employeeWaiter: 'employeeWaiter',
      employeeChef: 'employeeChef',
      foodCustumer: 'foodCustumer', 
    };
  }
}

module.exports = Roles;
