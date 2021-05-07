(async function(){
    const getDataFromDb = (edad)=> {
      return new Promise((resolve, reject) => {
        if(edad >= 18){
          // Resolver
          setTimeout(() => {
            const data = {
              nombre: "Jair",
              edad: 20
            }
            resolve(data);
    
          }, 4000);
        }else{
          reject("No se pudieron los datos");
        }
      });
    }
    
    const edad = 20;
    try {
      console.log("Antes");
      // getDataFromDb(20).then(data => console.log(data)).catch(error => console.error(error));
      let data = await getDataFromDb(edad);
      console.log(data);
      console.log("Despues");
    } catch (error) { 
      console.error(error);
    }


})();