export const getColor = (numero) => {
    if(numero === 0){
      return "black"
    }else if(numero % 2 === 0){
      return "blue"
    }else{
      return "red"
    }
  }
