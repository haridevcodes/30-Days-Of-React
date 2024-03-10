const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

if (!countries.includes("Ethiopia")){
    countries.push("Ethiopia");
    console.log(countries)
}
else {
    console.log("ETHIOPIA");
}