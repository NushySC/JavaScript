  ////Promises

  const deliver = (callback) => {
    const package = {
        content: "An awwesome bomb",
    }

    setTimeout(() => {
        callback(package);
    }, 2000);
}

///


const deliver2 = () => {
  return new Promise((resolve, reject) => {
    const package = {
      content: "An awesome bomb",
    }
 
    setTimeout(() => {
      if(Math.random() >= 0.5) {
        resolve(package);
      } else {
        reject("Ooops...")
      }
    }, 3000);
  });
}

//deliver (p => console.log ('Yay'), err => console.log(err));

deliver2()
.then(p => console.log(p))
.catch(err => console.log('Error: ' + err));


//https://classes.codingbootcamp.cz/coding-bootcamp/winter-2019/893-exercises-promises

const testNum = (num) => {
    return new Promise((resolve, reject) => {
        const bigOrSmall = {
            content: "Smaller"
        }
        setTimeout(() => {
            if (num < 10) {
                resolve(bigOrSmall);
            } else {
                reject("Bigger");
            }
        }, 2000);
      });
    }


    ///Toss
    let toss = new Promise(function(resolve, reject) {
        let face = "tail"

        if (face === "tail") {
            resolve ("It's tail");
        } else if (face === "head") {
            resolve ("It's head");
        } else {
            reject ("it fell");
        }
        })

        promiseToss.then(function(result){
            console.log("result")
        }).catch(function(result){
            console.log("result")
        });




        ////
