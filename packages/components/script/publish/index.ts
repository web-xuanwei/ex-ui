import run from "../utils/run";
import { pkgPath } from "../utils/path";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/exc-ui`);
};
export default series(async () => publishComponent());