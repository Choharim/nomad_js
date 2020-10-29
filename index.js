console.log('Im working.');

let a = 10;
let b = a / 2 ;
console.log(a,b);




let e = 2;
e=4;
let f = e+2;
console.log(f,e);

let c = 2;
let d = c+2;
c=4;
console.log(d,c);

const g = 20;
const h = g*2;
console.log(g,h);

const familyOfHarim = ["father","mother","sister","mori",true,5,0.5]
console.log(familyOfHarim);
console.log(familyOfHarim[0]);
console.log(familyOfHarim[4]);

const friendsOfMori = 
{ parang: "blue bear",
  bunhong:true, 
  snack: ["sweet potato","bam"],
  fav: [{one: 1,two: 2},{three: 3,four: 4}],
  pav: {double: [1,2],tri: [1,2,3]}
};
console.log(friendsOfMori.fav[0].one);
console.log(friendsOfMori.pav.tri[0]);
console.log(friendsOfMori.fav[0].one);

function mori (a,b){
  console.log('mori는 ',a,'와',b,'를 좋아해');
}
mori ("bam","sweet potato");

function parang (a,b){
  return `parang이는 ${a}와 ${b}를 좋아해`;
}
const fake = parang("mori","moris")
console.log(fake);

const calculators = {

  plus : function (a,b){
    return a + b ;
  },
  minus: function (a,b){
    return a - b ;
  },
  divide : function (a,b){
    return a / b ;
  },
  multiply : function (a,b){
    return a * b ;
  },
  root : function (a,b){
    return a**b;
  }

};

console.log(calculators.plus(1,1));

const minus = calculators.minus(1,1);
console.log(minus);
console.log(calculators.root(2,3));