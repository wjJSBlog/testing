module.exports = {
    add (...args) {
        return args.reduce(function(prev, next){
            return prev + next;
        });
    },

    mul (...args) {
        return args.reduce(function(prev, next){
            return prev - next;
        });
    },
}