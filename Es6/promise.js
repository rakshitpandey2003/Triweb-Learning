function age(x){
    return new Promise((resolve,reject)=>{
        if(x>0){
            x=x+1;
            resolve(x);
        }else{
            reject('invalid age');
            //throw new Error("invalid age");
        }
    })
}

age(1)
    .then((updated)=>{
        console.log('updated age',updated);
    })
    .catch((err)=>{
        console.log("err:age not updated");
    })