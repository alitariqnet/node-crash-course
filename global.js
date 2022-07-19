
setTimeout(()=>{
    console.log('hello')
    clearInterval(int);
},3000);

const int = setInterval(()=>{
    console.log('this is interval');
},995);