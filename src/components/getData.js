
  let isOk= true;

export const getData = (time,task) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(isOk) {
                resolve(task);
            } else {
                reject("Error");
            }
        },  )})};


