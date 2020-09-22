module.exports = rawRequest => {

  const parsedWithBody = {
    method: rawRequest.split('\n')[0].split(' ')[0],
    path: rawRequest.split('\n')[0].split(' ')[1],
    body: rawRequest.split('\n\n')[1]
    
  };
  
  return parsedWithBody;
};
