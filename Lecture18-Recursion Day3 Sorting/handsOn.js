function factRec(n){
  if(n <= 1) return 1;
  return n * factRec(n - 1);
}
console.log("factRec(5):", factRec(5));

function fibRec(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fibRec(n - 1) + fibRec(n - 2);
}
console.log("fibRec(6):", fibRec(6));

function sumToN(n){
  if(n === 0) return 0;
  return n + sumToN(n - 1);
}
console.log("sumToN(5):", sumToN(5));

function reverseStringRec(s){
  if(s.length === 0) return "";
  return reverseStringRec(s.slice(1)) + s[0];
}
console.log("reverseStringRec('abc'):", reverseStringRec("abc"));


/* Nth Even Fibonacci-like number */
function evenFib(n){
  if(n==1) return 2;
  if(n==2) return 8;
  return 4*evenFib(n-1)+evenFib(n-2);
}
console.log(evenFib(4));

/* Print range from x to y */
function range(x,y){
  if(x>y) return;
  console.log(x);
  range(x+1,y);
}
range(5,8);

/* Power using recursion */
function power(x,y){
  if(y==0) return 1;
  if(y%2==0) return power(x*x,y/2);
  return x*power(x,y-1);
}
console.log(power(2,10));

/* Remove 'x' from string */
function removeX(s){
  if(s=="") return "";
  if(s[0]=="x") return removeX(s.slice(1));
  return s[0]+removeX(s.slice(1));
}
console.log(removeX("axxbxxc"));

/* Count "abc" or "aba" */
function countABC(s,i=0){
  if(i>s.length-3) return 0;
  if((s[i]=="a"&&s[i+1]=="b"&&s[i+2]=="c")||(s[i]=="a"&&s[i+1]=="b"&&s[i+2]=="a"))
    return 1+countABC(s,i+1);
  return countABC(s,i+1);
}
console.log(countABC("abaaba"));

/* Count 'x' in string */
function countX(s){
  if(s=="") return 0;
  if(s[0]=="x") return 1+countX(s.slice(1));
  return countX(s.slice(1));
}
console.log(countX("abcxxabc"));

/* String palindrome */
function isPal(s,l=0,r=s.length-1){
  if(l>=r) return true;
  if(s[l]!=s[r]) return false;
  return isPal(s,l+1,r-1);
}
console.log(isPal("abba"));

/* Check valid parenthesis */
function validParen(s){
  let open=0;
  for(let ch of s){
    if(ch=="(") open++;
    else if(open>0) open--; else return false;
  }
  return open==0;
}
console.log(validParen("()()"));
console.log(validParen("())("));

/* Generate all parenthesis */
let res=[];
function genParen(n,str="",o=0,c=0){
  if(str.length==n){
    if(o==c) res.push(str);
    return;
  }
  genParen(n,str+"(",o+1,c);
  genParen(n,str+")",o,c+1);
}
genParen(4);
console.log(res);
