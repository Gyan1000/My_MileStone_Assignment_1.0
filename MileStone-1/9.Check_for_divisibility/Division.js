let arr=[32,27,36,40,60,9,30,18,15];

        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0)
                continue;
            if(arr[i]%3==0){
               console.log(arr[i])
            }
        }