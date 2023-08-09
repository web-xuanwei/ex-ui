import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/path";
import run from "../utils/run";

const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");

// 删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/ex-ui`);
};

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/ex-ui/lib/src`))
    .pipe(dest(`${pkgPath}/ex-ui/es/src`));
};

// 打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )  
);
