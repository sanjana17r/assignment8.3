function table(i,n) //this function is used to print the tables
{
    console.log(i+"*"+n+'='+(i*n));  // prints the tables each time the function is called i.e it prints till 5*10=50.
}

for (n=1;n<=10;n++) //n is incremented after each iteration until 10 times.
{
    table(5,n);//since we want tables of 5,the input is given as 5,and because we want it till it is multiplied to 10,it is iterated 10 times.
}
