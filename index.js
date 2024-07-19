function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } 
    else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection; 
  }
  function myMap(collection, callback) {
    const result = Array.isArray(collection) ? [] : {};
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    }
    else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result[key] = callback(collection[key]);
        }
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
  
    if (typeof initialValue === 'undefined') {
      // Handle arrays
      if (Array.isArray(collection)) {
        accumulator = collection[0];
        startIndex = 1;
      }
      // Handle objects
      else if (typeof collection === 'object' && collection !== null) {
        const values = Object.values(collection);
        accumulator = values[0];
        startIndex = 1;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    }
    else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          accumulator = callback(accumulator, collection[key], collection);
        }
      }
    }
    return accumulator;
  }
  function myFind(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i];
        }
      }
    }
    else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (callback(collection[key])) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }
  function mySize(collection) {
    // Handle arrays
    if (Array.isArray(collection)) {
      return collection.length;
    }
    // Handle objects
    else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
  }
  function myFilter(collection, callback) {
    const result = Array.isArray(collection) ? [] : {};
    // Handle arrays
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          result.push(collection[i]);
        }
      }
    }
    // Handle objects
    else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && callback(collection[key])) {
          result[key] = collection[key];
        }
      }
    }
    return result;
  }
  function myFirst(collection, n) {
    // Handle arrays
    if (Array.isArray(collection)) {
      if (typeof n === 'undefined') {
        return collection[0];
      } else {
        return collection.slice(0, n);
      }
    }
  }
  function myLast(collection, n) {
    // Handle arrays
    if (Array.isArray(collection)) {
      if (typeof n === 'undefined') {
        return collection[collection.length - 1];
      } else {
        return collection.slice(-n);
      }
    }
  }
  function myKeys(obj) {
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj);
    }
  }
  function myValues(obj) {
    if (typeof obj === 'object' && obj !== null) {
      return Object.values(obj);
    }
  }
          