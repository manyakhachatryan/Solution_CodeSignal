function solution(a) {
    let arr = [0,0];
    let  i = 0;
    while(i<a.length)
    {
        if(i%2==0){
            arr[0]=arr[0]+a[i]
        } else {
            arr[1]=arr[1]+a[i]
        }
        i++;
    }
    return arr
}
