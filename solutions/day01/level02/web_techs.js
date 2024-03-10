const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

if (!webTechs.includes("Sass")){
    webTechs.push("Sass");
    console.log(webTechs)
}
else {
    console.log("Sass is a CSS preprocess");
}