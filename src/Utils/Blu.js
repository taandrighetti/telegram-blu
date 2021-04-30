const defaultBluList = [
    707252564,  // @confesionesAdminlessBot
];

const bluUsers = new Set(
    (window.localStorage.bluUsers) ? JSON.parse(window.localStorage.bluUsers) : defaultBluList
);

export function isSenderBlu({ user_id } = {}) {
    return bluUsers.has(user_id);
}
