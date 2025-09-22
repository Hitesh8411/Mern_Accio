/* Compute time complexity of this function */
function recursion(n) {
  if (n == 0) return;
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);

  for (let i = 0; i < n; i++) {
    console.log(i * i);
  }
}

/* 
Print this pattern, 

1. given N = 5

A
AB
BCD
CDEF
DEFGH

2. N = 4
    *
   * *
  *   *
 *     *
  *   *
   * *
    * 
*/

/* Question on Map & Set
Function to find length of longest substring with non-repeating characters
input: "abbcda"
output: 4 (string is bcda)
*/

/* time complexity of below function */
function recursion(n) {
  if (n == 0) return;
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);

  for (let i = 0; i < n; i++) {
    console.log(i * i);
  }
}

/* 
 t.c. :O(nlogn base 4)
for diagram explanation refer 
  https://onedrive.live.com/view.aspx?resid=9301DDF91216653A!sb227bf0bf059482889cb4b1151f25ea8&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL28vYy85MzAxRERGOTEyMTY2NTNBL0VndV9KN0paOENoSWljdExFVkh5WHFnQkFBRE4tRnJMUWtGcDBRamhvc3RiT1E&wd=target%28Lecture%2017.one%7Ce87c9049-e039-f640-9231-d682b46c123b%2FUntitled%20Page%7C188894c1-5d85-be49-aa47-80db6b83f8a4%2F%29&wdorigin=NavigationUrl
 */

