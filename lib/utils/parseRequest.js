module.exports = rawRequest => {
  
  const parsed = {
    method: rawRequest.split('\n')[0].split(' ')[0],
    path: rawRequest.split('\n')[0].split(' ')[1]
  };
  return parsed;
};
