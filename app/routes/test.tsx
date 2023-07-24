import { redirect } from "@remix-run/node"; // or cloudflare/deno

export const action = async () => {

  return redirect("https://discord.com/invite/8Yc4DKFHtf");
};
