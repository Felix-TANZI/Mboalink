function validate(schema, property = 'body') {
  return (req, _res, next) => {
    const parsed = schema.parse(req[property]);
    req[property] = parsed;
    next();
  };
}

module.exports = validate;
