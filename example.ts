import { readline } from "https://raw.githubusercontent.com/JWebCoder/deno_readline/master/mod.ts";

for await (const line of readline('./mod.ts')) {
  console.log('line', line);
}