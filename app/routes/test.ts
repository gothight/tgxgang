export let action: ActionFunction = async ({ params }) => {
  const { id } = params;
  const link = "https://discord.com/invite/8Yc4DKFHtf";

  if (!link) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return redirect(link, { status: 307 });
};
