import { readline } from "https://raw.githubusercontent.com/jwebcoder/deno_readline/master/mod.ts";

for await (const line of readline('./mod.ts')) {
  console.log('line', line);
}