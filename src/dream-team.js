const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
    // remove line with error and write your code here
    if (Array.isArray(members)) {
        let name = [];
        for (let element of members) {
            if (typeof element !== 'string') {
                continue;
            }
            name.push(element.replace(/\s/g, '').charAt(0).toUpperCase());
        }
        return name.sort().join('');
    }
    return false;
};
