export default (req, res) => {
    res.json({
        text: 'Hello',
        method: req.method,
    })
}