import { createSelector } from 'reselect';
import PermissionChecker from './permissionChecker';
import Roles from '../../security/roles'

const selectRaw = (state) => state.auth;

const selectAuthenticationUser = createSelector(
  [selectRaw],
  (auth) => auth.authenticationUser,
);

const selectCurrentUser = createSelector(
  [selectRaw],
  (auth) => auth.currentUser,
);

const selectCurrentUserEmail = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.email : null),
);

const selectCurrentUserFullName = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser ? currentUser.fullName : '',
);

const selectSignedIn = createSelector(
  [selectCurrentUser],
  (currentUser) => !!currentUser && !!currentUser.id,
);

const selectRoles = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser ? currentUser.roles || [] : [],
);

const selectEmptyPermissions = createSelector(
  [selectRoles],
  (roles) => !roles || !roles.length,
);

const selectLoading = createSelector(
  [selectRaw],
  (auth) => !!auth.loading,
);

const selectLoadingInit = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingInit,
);

const selectLoadingEmailConfirmation = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingEmailConfirmation,
);

const selectLoadingPasswordResetEmail = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingPasswordResetEmail,
);

const selectLoadingUpdateProfile = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingUpdateProfile,
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage,
);

const selectCurrentUserNameOrEmailPrefix = createSelector(
  [selectCurrentUser, selectCurrentUserFullName],
  (currentUser, fullName) => {
    if (!currentUser) {
      return '';
    }

    if (fullName && fullName.length < 25) {
      return fullName;
    }

    if (currentUser.firstName) {
      return currentUser.firstName;
    }

    return currentUser.email.split('@')[0];
  },
);

const selectCurrentUserAvatar = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (
      !currentUser ||
      !currentUser.avatars ||
      !currentUser.avatars.length ||
      !currentUser.avatars[0].publicUrl
    ) {
      return null;
    }

    return currentUser.avatars[0].publicUrl;
  },
);

const selectCurrentUserIsCustomer = createSelector(
  [selectCurrentUser], 
  (currentUser) => {
  return !new PermissionChecker(
    currentUser,
    ).rolesMatchOneOf([
    Roles.values.manager, 
    Roles.values.employeeWaiter,
    Roles.values.employeeChef,
    Roles.values.employeeCash,
    ]);
  },
);

const selectCurrentUserIsManager = createSelector(
  [selectCurrentUser], 
  (currentUser) => {
  return new PermissionChecker(
    currentUser,
    ).rolesMatchOneOf(Roles.values.manager);
  },
);
const selectCurrentUserIsEmployee = createSelector(
  [
    selectCurrentUser, 
    selectCurrentUserIsCustomer, 
    selectCurrentUserIsManager 
  ], 
  ( currentUser, 
    isManager,
  ) => {
  const isEmpoyee = new PermissionChecker(
    currentUser,
    ).rolesMatchOneOf([
      Roles.values.employeeWaiter,
      Roles.values.employeeChef,
      Roles.values.employeeCash,
    ]);
    return isEmpoyee && !isManager; 
  },
);


const selectors = {
  selectLoadingPasswordResetEmail,
  selectLoadingEmailConfirmation,
  selectLoadingInit,
  selectLoadingUpdateProfile,
  selectLoading,
  selectEmptyPermissions,
  selectRoles,
  selectSignedIn,
  selectCurrentUserFullName,
  selectCurrentUserEmail,
  selectCurrentUser,
  selectAuthenticationUser: selectAuthenticationUser,
  selectErrorMessage,
  selectRaw,
  selectCurrentUserNameOrEmailPrefix,
  selectCurrentUserAvatar,
  selectCurrentUserIsCustomer,
  selectCurrentUserIsManager,
  selectCurrentUserIsEmployee
};

export default selectors;
