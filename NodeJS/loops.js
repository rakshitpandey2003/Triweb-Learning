let prev=0;
let cur=1;
let next;
let n=10;

for(let i=0;i<n;i++)
{
    console.log(`${prev}`);
    next=cur+prev;
    prev=cur;
    cur=next;
}