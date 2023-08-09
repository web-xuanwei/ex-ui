import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage"
import prompts from "prompts";
import { readFile } from "fs/promises";
import gitClone from "./gitClone.js";

const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);

//帮助命令
const helpSections = [
  {
    header: 'create-exc-ui',
    content: '一个快速生成组件库搭建环境的脚手架',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号',
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助',
      }
    ],
  },
];

// 用户选择
const promptsOptions = [
  {
    type: "text",
    name: "name",
    message: "请输入项目名称",
  },
  {
    type: "select", //单选
    name: "template",
    message: "请选择一个模板",
    choices: [
      { title: "exc-ui", value: 1 },
      { title: "easyest", value: 2 },
    ],
  },
];

const remoteList = {
  1: "https://github.com/web-xuanwei/ex-ui.git",
  2: "https://github.com/web-xuanwei/ex-ui.git",
};

// 配置命令参数
const optionDefinitions = [{ name: 'version', alias: 'v', type: Boolean }, { name: 'help', alias: 'h', type: Boolean }];
const options = commandLineArgs(optionDefinitions);
const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  console.log(res)
  if (!res.name || !res.template) return;
  console.log(`direct:${remoteList[res.template]}`)
  gitClone(`direct:${remoteList[res.template]}`, res.name, {
    clone: true,
  });
};
if (options.version) {
  console.log(`v${pkg.version}`);
}
if (options.help) {
  console.log(commandLineUsage(helpSections))
}
getUserInfo();