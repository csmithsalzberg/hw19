//Caleb Smith-Salzberg, Anish Shenoy
//Team canss
//SoftDev2 pd7
//K19 -- Onions, Bell Peppers, and Celery, Oh My!
//2018-05-02

var dat = '[{"females": 2089000, "country": "United States", "age": 0, "males": 2186000, "year": 1960, "total": 4275000}, {"females": 2059000, "country": "United States", "age": 1, "males": 2147000, "year": 1960, "total": 4207000}, {"females": 2031000, "country": "United States", "age": 2, "males": 2113000, "year": 1960, "total": 4145000}, {"females": 2004000, "country": "United States", "age": 3, "males": 2082000, "year": 1960, "total": 4087000}, {"females": 1978000, "country": "United States", "age": 4, "males": 2054000, "year": 1960, "total": 4031000}, {"females": 1951000, "country": "United States", "age": 5, "males": 2026000, "year": 1960, "total": 3977000}, {"females": 1923000, "country": "United States", "age": 6, "males": 1998000, "year": 1960, "total": 3921000}, {"females": 1893000, "country": "United States", "age": 7, "males": 1970000, "year": 1960, "total": 3863000}, {"females": 1862000, "country": "United States", "age": 8, "males": 1939000, "year": 1960, "total": 3801000}, {"females": 1827000, "country": "United States", "age": 9, "males": 1906000, "year": 1960, "total": 3733000}, {"females": 1791000, "country": "United States", "age": 10, "males": 1872000, "year": 1960, "total": 3663000}, {"females": 1757000, "country": "United States", "age": 11, "males": 1840000, "year": 1960, "total": 3597000}, {"females": 1710000, "country": "United States", "age": 12, "males": 1791000, "year": 1960, "total": 3500000}, {"females": 1642000, "country": "United States", "age": 13, "males": 1717000, "year": 1960, "total": 3359000}, {"females": 1562000, "country": "United States", "age": 14, "males": 1627000, "year": 1960, "total": 3189000}, {"females": 1485000, "country": "United States", "age": 15, "males": 1541000, "year": 1960, "total": 3026000}, {"females": 1407000, "country": "United States", "age": 16, "males": 1456000, "year": 1960, "total": 2863000}, {"females": 1340000, "country": "United States", "age": 17, "males": 1378000, "year": 1960, "total": 2718000}, {"females": 1289000, "country": "United States", "age": 18, "males": 1314000, "year": 1960, "total": 2603000}, {"females": 1250000, "country": "United States", "age": 19, "males": 1261000, "year": 1960, "total": 2511000}, {"females": 1213000, "country": "United States", "age": 20, "males": 1210000, "year": 1960, "total": 2423000}, {"females": 1179000, "country": "United States", "age": 21, "males": 1161000, "year": 1960, "total": 2340000}, {"females": 1153000, "country": "United States", "age": 22, "males": 1127000, "year": 1960, "total": 2280000}, {"females": 1136000, "country": "United States", "age": 23, "males": 1116000, "year": 1960, "total": 2251000}, {"females": 1126000, "country": "United States", "age": 24, "males": 1120000, "year": 1960, "total": 2245000}, {"females": 1120000, "country": "United States", "age": 25, "males": 1127000, "year": 1960, "total": 2247000}, {"females": 1117000, "country": "United States", "age": 26, "males": 1138000, "year": 1960, "total": 2255000}, {"females": 1123000, "country": "United States", "age": 27, "males": 1153000, "year": 1960, "total": 2277000}, {"females": 1142000, "country": "United States", "age": 28, "males": 1169000, "year": 1960, "total": 2311000}, {"females": 1169000, "country": "United States", "age": 29, "males": 1186000, "year": 1960, "total": 2355000}, {"females": 1196000, "country": "United States", "age": 30, "males": 1205000, "year": 1960, "total": 2402000}, {"females": 1225000, "country": "United States", "age": 31, "males": 1226000, "year": 1960, "total": 2451000}, {"females": 1250000, "country": "United States", "age": 32, "males": 1245000, "year": 1960, "total": 2494000}, {"females": 1268000, "country": "United States", "age": 33, "males": 1260000, "year": 1960, "total": 2528000}, {"females": 1281000, "country": "United States", "age": 34, "males": 1273000, "year": 1960, "total": 2553000}, {"females": 1293000, "country": "United States", "age": 35, "males": 1284000, "year": 1960, "total": 2577000}, {"females": 1306000, "country": "United States", "age": 36, "males": 1296000, "year": 1960, "total": 2602000}, {"females": 1309000, "country": "United States", "age": 37, "males": 1297000, "year": 1960, "total": 2606000}, {"females": 1296000, "country": "United States", "age": 38, "males": 1283000, "year": 1960, "total": 2579000}, {"females": 1272000, "country": "United States", "age": 39, "males": 1260000, "year": 1960, "total": 2532000}, {"females": 1249000, "country": "United States", "age": 40, "males": 1235000, "year": 1960, "total": 2484000}, {"females": 1222000, "country": "United States", "age": 41, "males": 1208000, "year": 1960, "total": 2429000}, {"females": 1199000, "country": "United States", "age": 42, "males": 1184000, "year": 1960, "total": 2384000}, {"females": 1186000, "country": "United States", "age": 43, "males": 1170000, "year": 1960, "total": 2356000}, {"females": 1178000, "country": "United States", "age": 44, "males": 1160000, "year": 1960, "total": 2338000}, {"females": 1167000, "country": "United States", "age": 45, "males": 1147000, "year": 1960, "total": 2314000}, {"females": 1153000, "country": "United States", "age": 46, "males": 1133000, "year": 1960, "total": 2285000}, {"females": 1140000, "country": "United States", "age": 47, "males": 1117000, "year": 1960, "total": 2257000}, {"females": 1129000, "country": "United States", "age": 48, "males": 1099000, "year": 1960, "total": 2229000}, {"females": 1119000, "country": "United States", "age": 49, "males": 1080000, "year": 1960, "total": 2199000}, {"females": 1109000, "country": "United States", "age": 50, "males": 1060000, "year": 1960, "total": 2169000}, {"females": 1100000, "country": "United States", "age": 51, "males": 1041000, "year": 1960, "total": 2141000}, {"females": 1079000, "country": "United States", "age": 52, "males": 1016000, "year": 1960, "total": 2095000}, {"females": 1039000, "country": "United States", "age": 53, "males": 983000, "year": 1960, "total": 2022000}, {"females": 987000, "country": "United States", "age": 54, "males": 946000, "year": 1960, "total": 1933000}, {"females": 937000, "country": "United States", "age": 55, "males": 908000, "year": 1960, "total": 1845000}, {"females": 883000, "country": "United States", "age": 56, "males": 870000, "year": 1960, "total": 1753000}, {"females": 844000, "country": "United States", "age": 57, "males": 835000, "year": 1960, "total": 1680000}, {"females": 829000, "country": "United States", "age": 58, "males": 808000, "year": 1960, "total": 1638000}, {"females": 830000, "country": "United States", "age": 59, "males": 786000, "year": 1960, "total": 1615000}, {"females": 826000, "country": "United States", "age": 60, "males": 762000, "year": 1960, "total": 1589000}, {"females": 824000, "country": "United States", "age": 61, "males": 738000, "year": 1960, "total": 1562000}, {"females": 815000, "country": "United States", "age": 62, "males": 715000, "year": 1960, "total": 1530000}, {"females": 794000, "country": "United States", "age": 63, "males": 693000, "year": 1960, "total": 1487000}, {"females": 766000, "country": "United States", "age": 64, "males": 672000, "year": 1960, "total": 1438000}, {"females": 739000, "country": "United States", "age": 65, "males": 651000, "year": 1960, "total": 1390000}, {"females": 713000, "country": "United States", "age": 66, "males": 630000, "year": 1960, "total": 1343000}, {"females": 684000, "country": "United States", "age": 67, "males": 605000, "year": 1960, "total": 1289000}, {"females": 652000, "country": "United States", "age": 68, "males": 572000, "year": 1960, "total": 1225000}, {"females": 618000, "country": "United States", "age": 69, "males": 535000, "year": 1960, "total": 1154000}, {"females": 584000, "country": "United States", "age": 70, "males": 498000, "year": 1960, "total": 1082000}, {"females": 548000, "country": "United States", "age": 71, "males": 461000, "year": 1960, "total": 1008000}, {"females": 514000, "country": "United States", "age": 72, "males": 426000, "year": 1960, "total": 940000}, {"females": 485000, "country": "United States", "age": 73, "males": 395000, "year": 1960, "total": 880000}, {"females": 460000, "country": "United States", "age": 74, "males": 367000, "year": 1960, "total": 826000}, {"females": 433000, "country": "United States", "age": 75, "males": 339000, "year": 1960, "total": 772000}, {"females": 408000, "country": "United States", "age": 76, "males": 311000, "year": 1960, "total": 719000}, {"females": 378000, "country": "United States", "age": 77, "males": 283000, "year": 1960, "total": 661000}, {"females": 342000, "country": "United States", "age": 78, "males": 251000, "year": 1960, "total": 593000}, {"females": 302000, "country": "United States", "age": 79, "males": 219000, "year": 1960, "total": 521000}, {"females": 188000, "country": "United States", "age": 80, "males": 190000, "year": 1960, "total": 189000}, {"females": 157000, "country": "United States", "age": 81, "males": 159000, "year": 1960, "total": 158000}, {"females": 131000, "country": "United States", "age": 82, "males": 133000, "year": 1960, "total": 132000}, {"females": 111000, "country": "United States", "age": 83, "males": 112000, "year": 1960, "total": 111000}, {"females": 95100, "country": "United States", "age": 84, "males": 96200, "year": 1960, "total": 95500}, {"females": 80000, "country": "United States", "age": 85, "males": 81000, "year": 1960, "total": 80400}, {"females": 66500, "country": "United States", "age": 86, "males": 67300, "year": 1960, "total": 66900}, {"females": 54400, "country": "United States", "age": 87, "males": 55100, "year": 1960, "total": 54700}, {"females": 43200, "country": "United States", "age": 88, "males": 43700, "year": 1960, "total": 43400}, {"females": 33200, "country": "United States", "age": 89, "males": 33600, "year": 1960, "total": 33300}, {"females": 24700, "country": "United States", "age": 90, "males": 25000, "year": 1960, "total": 24800}, {"females": 17500, "country": "United States", "age": 91, "males": 17700, "year": 1960, "total": 17600}, {"females": 11900, "country": "United States", "age": 92, "males": 12000, "year": 1960, "total": 12000}, {"females": 8140, "country": "United States", "age": 93, "males": 8240, "year": 1960, "total": 8180}, {"females": 5790, "country": "United States", "age": 94, "males": 5860, "year": 1960, "total": 5820}, {"females": 4220, "country": "United States", "age": 95, "males": 4270, "year": 1960, "total": 4240}, {"females": 3490, "country": "United States", "age": 96, "males": 3530, "year": 1960, "total": 3510}, {"females": 2890, "country": "United States", "age": 97, "males": 2930, "year": 1960, "total": 2900}, {"females": 1990, "country": "United States", "age": 98, "males": 2010, "year": 1960, "total": 2000}, {"females": 986, "country": "United States", "age": 99, "males": 998, "year": 1960, "total": 991}, {"females": 1790, "country": "United States", "age": 100, "males": 1820, "year": 1960, "total": 1800}]';

var parsed = JSON.parse(dat);
var p = document.getElementById("par");

//FEATURE 1

//Total number of people between inputted ages
//NOTE: some of the total are wrong (total != females+males in some cases such as age 100)
function numberPpl(minA,maxA){
    if (minA > maxA){
      temp = minA;
      minA = maxA;
      maxA = temp;
    }
    var filtered = parsed.filter(function(a){return (a["age"]>=minA && a["age"]<=maxA) });
    var total = filtered.reduce(function(a,b, index){if (index==1){return a["females"]+a["males"]+b["females"]+b["males"];}else{return a+b["females"]+b["males"];}});
    return total;
}

function numberPplButton(){
  age1 = parseInt(document.getElementById("age_one_ppl").value, 10);
  age2 = parseInt(document.getElementById("age_two_ppl").value, 10);
  document.getElementById("feature_one_display").innerHTML = numberPpl(age1, age2).toString() + " People";
}

console.log("People between 90 and 100 years old: " + numberPpl(90,100));
console.log("Minors: " + numberPpl(0,18));


//FEATURE 2

//Percent genders given an age range
function pGenders(minA,maxA){
    if (minA > maxA){
      temp = minA;
      minA = maxA;
      maxA = temp;
    }
    var filtered = parsed.filter(function(a){return (a["age"]>=minA && a["age"]<=maxA) });
    var totalM = filtered.reduce(function(a,b, index){if (index==1){return a["males"]+b["males"];}else{return a+b["males"];}});
    console.log("minA " + totalM);
    var percentM = Math.round(totalM/numberPpl(minA,maxA)*100);
    var percentF = 100-percentM;
    return "Percent of " + minA + " to " + maxA + " year-old people that are \nMale: " + percentM + "%\nFemale: " + percentF + "%";
}

function pGendersButton(){
  age1 = parseInt(document.getElementById("age_one_gen").value, 10);
  age2 = parseInt(document.getElementById("age_two_gen").value, 10);
  document.getElementById("feature_two_display").innerHTML = pGenders(age1, age2);
}

console.log(pGenders(90,100));
console.log(pGenders(0,18));

//FEATURE 3

//Most common age
function modeA(){
    var mostP = parsed.reduce(function(a,b, index){if (index==1){return a["females"]+a["males"];}else{return Math.max(a,b["females"]+b["males"]);}});
    var age = parsed.filter(function(a){return a["males"]+a["females"]== mostP; })[0]["age"];
    return "There are " + mostP + " people aged " + age;
}
console.log(modeA());
document.getElementById("feature_three_display").innerHTML = modeA();
