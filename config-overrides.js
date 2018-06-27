module.exports = function override(config, env) {
  //console.log(JSON.stringify(config))
  config.module.rules[1].oneOf[1].options.babelrc = true;

  return config;
};