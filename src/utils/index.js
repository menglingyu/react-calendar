export const isEmpty = data => {
    if (!data) return true;
    if (Array.isArray(data) && !data.length) return true;
    if (data instanceof Object) {
        if (!Object.keys(data).length) return true;
    }
    return false
};