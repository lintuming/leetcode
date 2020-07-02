const { template, configs } = require("./README.template");

const glob = require("glob");
const fs = require("fs");
const path = require("path");
const sortByIndex = (a, b) => {
  if (Array.isArray(a)) {
    a = a[0];
  }
  if (Array.isArray(b)) b = b[0];
  return a - b;
};

function formatOutput(fileName, content) {
  const [num, name] = fileName.split(".");
  const output = `- [${num}.${name}](./${fileName})${
    content ? "-" : ""
  }${content}`;
  return output;
}

function write(lines) {
  return lines
    .map((line) => {
      line = Array.isArray(line) ? line : [line, ""];
      const [sequence, content] = line;
      const [fileName] = glob.sync(`solutions/${sequence}.*.js`);
      return formatOutput(fileName, content);
    })
    .join("\n");
}

const getRegExp = (markup) => {
  return new RegExp(`{{${markup}}}`, "g");
};

function build(configs) {
  configs = configs.map((config) => config.sort(sortByIndex));
  let result = template;
  for (let i = 0; i < configs.length; i++) {
    const config = configs[i];
    const markup = config[0];
    const lines = write(config.slice(1));
    result = result.replace(getRegExp(markup), lines);
  }
  return result;
}

const pathOfREADME = path.join(process.cwd(), "README.md");

fs.writeFileSync(pathOfREADME, build(configs));
