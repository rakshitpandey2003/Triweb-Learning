function print(...rest){
    rest.forEach(elem=> console.log(elem))
    let [a] = [...rest]
    console.log(a);
}

print(1,2,3,4,5,6,7,8,9);

 function make(start=0,end = Infinity , step =1){
    let nexti = start;
    let count = 0;

    const rangei = {
        next : function(){
            let res;
            if(nexti < end){
                res = {value:nexti , done:false}
                nexti += step;
                count++;
                return res;
            }
            return {value:count , done:true};
        }
    };
    return rangei;
 }
let x = make(0,3);
 console.log(x.next());
 console.log(x.next());
 console.log(x.next());
 console.log(x.next());

 function* maker(start =0 , end = 100 , step=1){
    let count =0;
    for(let i=start ; i<end;i+=step){
        count++;
        yield i;
    }
    return count;
 }

 let z = maker(0,3);
 console.log(z.next());
 console.log(z.next());
 console.log(z.next());
 console.log(z.next());