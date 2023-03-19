module.exports = {
  "parserOptions": {
      "project": "tsconfig.json",
      "tsconfigRootDir": __dirname // <-- this did the trick for me
    }
}