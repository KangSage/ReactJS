export const updateUser = (name) => ({
    type: 'changeState',
    payload: {
        user: name
    }
});