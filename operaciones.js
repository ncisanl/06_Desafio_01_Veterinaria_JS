const fs = require("fs");

const FILE_PATH = "citas.json";

const dataDateList = fs.readFileSync(FILE_PATH, "utf8");
const dataDateListJson = JSON.parse(dataDateList);

const leer = () => {
  return console.log(dataDateListJson);
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    return console.error(
      "Falta ingresar",
      validarParams(nombre, edad, animal, color, enfermedad),
    );
  }

  const newDate = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  };

  dataDateListJson.push(newDate);
  fs.writeFileSync(FILE_PATH, JSON.stringify(dataDateListJson, null, 2));

  return console.log(dataDateListJson);
};

function validarParams(nombre, edad, animal, color, enfermedad) {
  let nullParam;

  if (!nombre) {
    nullParam = "nombre";
    return nullParam;
  }

  if (!edad) {
    nullParam = "edad";
    return nullParam;
  }

  if (!animal) {
    nullParam = "animal";
    return nullParam;
  }

  if (!color) {
    nullParam = "color";
    return nullParam;
  }

  if (!enfermedad) {
    nullParam = "enfermedad";
    return nullParam;
  }
}

module.exports = {
  leer,
  registrar,
};
