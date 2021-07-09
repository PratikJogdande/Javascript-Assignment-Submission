//Palindrome Assignment
let p = "Honda civic design looks like a racecar"
 p = p.toLowerCase() + " "
let p1 = "";
let p2 = "";
for (let q of p) {
    if (q != " ") {
        p1 = p1 + q
        p2 = q + p2
    }
    else {
        if (p1 == p2) {
          console.log(p1+ " is a Palindrome word")
        }
        p1 = ""
        p2 = ""
    }
}