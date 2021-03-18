export const FETCH_USERS = 'fecth_users';
export const FETCH_CURRENT_USER = 'fecth_current_user';
export const fetchUsers = () => async (dispatch,getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
}
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
}