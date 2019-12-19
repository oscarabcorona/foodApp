const Roles = require('../../security/roles');

module.exports = class UserRoleChecker {
    static isCustomer(currentUser) {
        if(!currentUser || !currentUser.roles) {
            return false;
        }
        return !currentUser.roles.some((role) => {
            return [
                Roles.values.manager,
                Roles.values.employeeWaiter, 
            ].includes(role)
        })
    }
    static isManager(currentUser) {
        if(!currentUser || !currentUser.roles) {
            return false;
        }
        return currentUser.roles.some((role) => {
            return role === Roles.values.manager;
        })
    }
    static isEmployee(currentUser) {
        if(!currentUser || !currentUser.roles) {
            return false;
        }
        return (
            !this.isManager(currentUser) &&
            !this.isCustomer(currentUser)
        );
    }
}