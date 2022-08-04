export const host = () => 'https://kittysplash.herokuapp.com';
export const hostFrontSkin = () => 'https://kittysplash.herokuapp.com/shop-cards/';
export const getStats = (id) => `${host()}/statistics/${id}`;

export const signUp = () => `${host()}/auth/signup`;
export const signIn = () => `${host()}/auth/signin`;
export const signOut = () => `${host()}/auth/signout`;
export const checkAuth = () => `${host()}/auth/check`;

export const getAllUsers = () => `${host()}/users`;
export const editUser = (id) => `${host()}/users/${id}`;
export const getUser = (id) => `${host()}/users/${id}`;

export const getCurrRoom = () => `${host()}/curr/room`;
export const getRooms = () => `${host()}/rooms`;

export const getAllSkins = () => `${host()}/skins`;
export const postSkin = () => `${host()}/skins`;
export const getUserSkins = (id) => `${host()}/skins/user/${id}`;
export const putSkinUser = () => `${host()}/skins/user`;
