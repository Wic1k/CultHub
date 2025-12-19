export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';
    
    // Важно: Roblox HttpGet шлёт User-Agent вроде "Roblox/WinInet" или "RobloxAndroid/..." 
    // (может варьироваться, но всегда содержит "Roblox" с большой R)
    if (!userAgent.includes('Roblox')) {
        // Если не Roblox — редиректим или отдаём ошибку/пустоту
        return res.status(302).redirect('https://yoxi-hub.ru');  // или твой другой сайт
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');

    const script = `loadstring(game:HttpGet("https://raw.githubusercontent.com/erxsethis/yoxi/refs/heads/main/loader",true))()`;

    return res.status(200).send(script);
}

// Для Next.js API routes — добавь это, чтобы работало правильно
export const config = {
    api: {
        bodyParser: false,  // не нужно парсить body
    },
};
