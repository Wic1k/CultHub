module.exports = (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    if (!userAgent.includes('Roblox')) {
        res.writeHead(302, { Location: 'https://yoxi-hub.ru' });
        return res.end();
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');

    const script = `loadstring(game:HttpGet("https://raw.githubusercontent.com/erxsethis/yoxi/refs/heads/main/loader",true))()`;

    res.statusCode = 200;
    res.end(script);
};
