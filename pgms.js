// factorial
// var b=document.getElementById("head")
// function factorial(){
//     var fact=1;
//     var a=Number(document.getElementById("txt").value)
//     for(var i=1;i<=a;i++)
//     {
//         fact=fact*i;
//         rslt=fact;
//     }
//      b.innerHTML=fact;
//     // console.log(fact);
// }
// function clr()
// {
//     document.getElementById("txt").value="";
// }

// amstrong number

// function amstrong()
// {
//     var n=Number(document.getElementById("screen").value);
//     var rslt=document.getElementById("rslt");
//     var len,d,temp
//     var sum=0
    
//     len=n.toString().length;
//     temp=n;
  
//     if(len==4)
//     {
//         while(temp>0)
//         {
//             d=temp%10;
//             sum=sum+(d*d*d*d);
//             temp=parseInt(temp/10);
//         }
//         if(sum==n)
//             rslt.innerHTML=n+" is amstrong"
//         else
//             rslt.innerHTML=n+" is not amstrong"    
//     }
//     else{
//         while(temp>0)
//         {
//             d=temp%10;
//             sum=sum+(d*d*d);
//             temp=parseInt(temp/10);
//         }
//         if(sum==n)
//           rslt.innerHTML=n+" is amstrong";
//         else
//           rslt.innerHTML=n+" is not amstrong"
//     }
// }

       // prime number

    //  function prime(){
    //     var n= document.getElementById("txt").value;
    //     var rslt=document.getElementById("ans")
    //     var prime= true;
    //     if(n==1)
    //     {
    //         rslt.innerHTML="1 is not a prime number"
    //     }
    //     else if(n>1)
    //     {
    //         for(var i=2;i<n;i++){
    //             if(n%i==0){
    //                 prime=false;
    //                 break;
    //             }
    //         }
    //         if(prime){
    //             rslt.innerHTML=  n+ " is prime" 
    //         }
    //         else{
    //            rslt.innerHTML= n+ "is not prime"
    //         }
    //     }
    //     else{
    //        rslt.innerHTML="the number is not a prime number"
    //     }
        
    // }