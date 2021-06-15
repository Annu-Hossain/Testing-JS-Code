 
 /*var num=parseInt(prompt("Enter your marks :"));

 if(num%2==0)
console.log("even");

 if(num%2!=0)
 console.log("odd"); */
  
 /*var marks=parseInt(prompt("Enter your marks :"));

 if (marks>100 || marks<0)
 console.log("Invalid Marks");

 else if(marks>=80)
  console.log("A+");
  else if(marks>=70)
  console.log("A");
  else if(marks>=60)
  console.log("B+");
  else if(marks>=50)
  console.log("C+");
  else if(marks>=40)
  console.log("D+");
  else
  console.log("Fail"); */


/*var letter=prompt ("Enter Letter :");
letter=letter.toLowerCase();

if (letter =="a" || letter =="e" || letter =="i" || letter =="o" || letter =="u" )
console.log("Vowel");
else
console.log("Consonant");*/

//Letter select Vowel & Consonant

/* var letter=prompt("Enter a letter:");
letter=letter.toLowerCase();

switch(letter) {
    case "a":
        console.log("vowel");
        break;
        case "e":
        console.log("vowel");
        break;
        case "i":
        console.log("vowel");
        break;
        case "o":
        console.log("vowel");
        break;
        case "u":
        console.log("vowel"); 
     break;
        default:
                
        console.log("Consonant"); 
} */
//Vowel & consonant by switch case//
       /* var letter=prompt("Enter any letter:");
        letter=letter.toLowerCase();

        switch(letter){
            case "a":
            case "e":
            case "i":
            case "o": 
            case "u":
                console.log("Vowel");
                break;
                default:
                    console.log("Consonant");
                        
        } */


        //Printing condition//

       /* for(var x=1; x<=10;x=x+1)
        {
            document.write("<h1>Bangladesh</h1>");
        }
        document.write("End"); */



        // 1 2 3...10//

      /*   for( var x=1;x<=10;x=x+1)
         {
             document.write(""+x);
         } */


            //1 3 5....50//

           /* 
            for(var x=1;x<=50;x=x+2)
            {
                document.write(" " +x);
            }
     */


            //10 9 8 7 6 ....1

         /*  for(var x=10; x>=1; x=x-1)
            {
document.write(" " +x);
            } */

            
            // use for loop 1+2+3+4+5 //

          /*  var sum=0;
            {
            for(var x=1;x<=5;x=x+1)
                
            sum=sum+x;
            }
            document.write("sum =" + sum);
            */

            //use while loop 1+2+3+...+10


 var sum=0;
 var i=1;
 while( i<=6)
 {
    
     sum=sum+i;
     i=i+1;
 }
 document.write("Result = " +sum);
