let base = require('./config/base');
const cache = require('./config/cache');
const SpeedMeasure = require('./config/speedMeasure');


// 添加缓存  这种方式与webpack merge的区别？
base = cache(base);
base.mode = 'production';

base = SpeedMeasure(base);

module.exports = base;