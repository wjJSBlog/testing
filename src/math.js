module.exports = {
    add: function(...args){
        return args.reduce((prev, next)=>{
            return prev + next;
        });
    },

    mul: function(...args){
        return args.reduce((prev, next)=>{
            return prev - next;
        });
    }
}