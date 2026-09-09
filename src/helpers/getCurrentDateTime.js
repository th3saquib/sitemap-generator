module.exports = () => new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00');
