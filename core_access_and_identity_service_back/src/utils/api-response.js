function success(data, meta) {
  return {
    ok: true,
    data,
    meta: meta || null,
  };
}

function failure(message, details) {
  return {
    ok: false,
    error: {
      message,
      details: details || null,
    },
  };
}

module.exports = {
  success,
  failure,
};
