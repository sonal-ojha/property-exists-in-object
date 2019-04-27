const propertyExistsInObject = (object, arrayProps) => {
    if (!object) {
      return null;
    }
    let objCopy = Object.assign({}, object);
  
    for (let i = 0; i < arrayProps.length; i++) {
      if (
        typeof objCopy[arrayProps[i]] !== "undefined" &&
        objCopy[arrayProps[i]] !== null
      ) {
        objCopy = objCopy[arrayProps[i]];
      } else {
        return null;
      }
    }
    return objCopy;
  };
  
  export default propertyExistsInObject;