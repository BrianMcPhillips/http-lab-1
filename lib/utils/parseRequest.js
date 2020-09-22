module.exports = rawRequest => {
  const containsBody = rawRequest.includes('{');
  const parsed = {
    method: rawRequest.split('\n')[0].split(' ')[0],
    path: rawRequest.split('\n')[0].split(' ')[1]
  };
  const parsedWithBody = {
    method: rawRequest.split('\n')[0].split(' ')[0],
    path: rawRequest.split('\n')[0].split(' ')[1],
    body: rawRequest.split('\n\n')[1]
    
  };
  if(containsBody === true) {return parsedWithBody;} else { return parsed;}
  
};

//return parsedWithBody
