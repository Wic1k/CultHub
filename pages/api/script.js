export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';
    const referer = req.headers.referer || '';
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    
    // Проверяем оба условия: User-Agent и Referer
    const isValidReferer = referer.includes('culthub.vercel.app/script.lua');
    const isRobloxUserAgent = userAgent.toLowerCase().includes('roblox');
    
    if (!isValidReferer || !isRobloxUserAgent) {
        return res.redirect(302, 'https://yoxi-hub.ru');
    }
    
    const script = `
loadstring(game:HttpGet("https://raw.githubusercontent.com/erxsethis/yoxi/refs/heads/main/loader",true))()
`;
    
    return res.status(200).send(script);
}
