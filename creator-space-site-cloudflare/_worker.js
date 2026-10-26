const SB="https://ohkecamneutxggqwhend.supabase.co/storage/v1/object/public/assets/";
export default{async fetch(req,env){
  const u=new URL(req.url);
  if(u.pathname.startsWith("/_blob/")){
    const r=await fetch(SB+u.pathname.slice(7),{method:"GET"});
    const h=new Headers(r.headers);h.set("Cache-Control","public, max-age=3600");h.set("X-Content-Type-Options","nosniff");
    return new Response(r.body,{status:r.status,headers:h});
  }
  if(u.pathname.startsWith("/u/")){u.pathname="/index.html";return env.ASSETS.fetch(new Request(u,req))}
  return env.ASSETS.fetch(req);
}};
