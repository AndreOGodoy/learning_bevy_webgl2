import * as wasm from "./wasm/pkg/index_bg.wasm";
export * from "./wasm/pkg/index_bg.js";

import css from "./index.css";

console.log('wasm: ', wasm);
wasm.run();
