export async function get({ params, redirect }) {
    const { id } = params;
    const link = "https://discord.com/invite/8Yc4DKFHtf";
  
    if (!link) {
      return new Response(null, {
        status: 404,
        statusText: 'Not found'
      });
    }
  
    return redirect(link, 307);
  }
