function making_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'hello'; }
    console.log("making shirt og ".concat(size, " and printed ").concat(message, " on it"));
}
making_shirt();
making_shirt('medium');
making_shirt('small', 'hello');
