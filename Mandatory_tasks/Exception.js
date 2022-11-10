function throwException() {
    throw new Error('Something went wrong');
}
function catchException() {
    try {
        throwException();
    } catch (e) {
        console.log(e);
    }
}
catchException();
