import UserActionTypes from './actions-type';

export const loginUser = (payload) => ({
	type: UserActionTypes.LOGIN,
	payload: payload,
});

export const logoutUser = () => ({
	type: UserActionTypes.LOGOUT,
});
