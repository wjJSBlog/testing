module.exports = {
    add(...args) {
        return args.reduce((prev, next) => {
            return prev + next;
        });
    },

    mul(...args) {
        return args.reduce((prev, next) => {
            return prev - next;
        });
    }
}