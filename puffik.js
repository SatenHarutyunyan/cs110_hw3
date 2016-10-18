const array = [1,2,3,4,5,6,7];
const glukh = function(arr){
const puffik=[]
for(let k=0; k<array.length; k++){ 
puffik[k]=arr[(arr.length-1)-k];

}
  return puffik;
};
console.log(glukh(array));