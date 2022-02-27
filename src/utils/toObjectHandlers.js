module.exports = {
    arrayToObject(array) {
        return array.map(element => {element.toObject()});
    },
    singleToObject(element) {
        return element.toObject();
    }
};