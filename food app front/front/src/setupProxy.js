const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app)=> {
    const targetURL = 'http://127.0.0.1:3000/'

    app.use(
        '/api',
        createProxyMiddleware({
            target: targetURL,
            changeOrigin: true
        })
    )
}