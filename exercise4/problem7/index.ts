const is = Object.assign({});

is.bool = function(val :boolean) {
    return typeof (val) === 'boolean';
}

is.num = (val :number) =>  typeof (val) === 'number';


is.str = (val :string) => typeof (val) === 'string';
 

is.fun = function(val :Function) {
    return typeof(val) === 'function';
}

 export default is;

