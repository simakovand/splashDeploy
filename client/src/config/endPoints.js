export const host = () => 'http://localhost:3030';
export const hostFrontSkin = () => 'http://localhost:3000/shop-cards/';
export const getStats = (id) => `/statistics/${id}`;

export const signUp = () => `/auth/signup`;
export const signIn = () => `/auth/signin`;
export const signOut = () => `/auth/signout`;
export const checkAuth = () => `/auth/check`;

export const getAllUsers = () => `/users`;
export const editUser = (id) => `/users/${id}`;
export const getUser = (id) => `/users/${id}`;

export const getCurrRoom = () => `/curr/room`;
export const getRooms = () => `/rooms`;

export const getAllSkins = () => `/skins`;
export const postSkin = () => `/skins`;
export const getUserSkins = (id) => `/skins/user/${id}`;
export const putSkinUser = () => `/skins/user`;
