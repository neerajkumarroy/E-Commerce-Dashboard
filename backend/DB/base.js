const str = "Welcme to the ftechiz solutions";

const base64 = btoa(str);
console.warn(base64);


const decode = atob(base64);
console.warn(decode);
