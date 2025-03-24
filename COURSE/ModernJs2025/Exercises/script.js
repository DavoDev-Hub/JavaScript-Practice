function breakMe() {
  // Todo: Throw your own error here
  throw { message: "Ocurrio un error" };
}

function main() {
  // Todo: Handle breakMe()'s error with
  try {
    breakMe();
  } catch (error) {
    return error;
  }
}
