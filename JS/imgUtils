
//convierte archivo a base64 (probado con imagenes)
export function getBase64(file) {
  if(!file) return null;
  return new Promise(function(resolve) {
    var reader = new FileReader();
    reader.onloadend = function() {
      resolve(reader.result.split(",")[1]) //se quita la primera parte que no vale
    }
    reader.readAsDataURL(file);
  })
}

//saca la url de un archivo tipo imagen
export function getImgUrl(file) {
  return URL.createObjectURL(file);
}

export function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;
  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };
    
    img.onerror = () => {
      callback(false);
    };
  }
}

//evento de carga imagen fallida
export function onImageLoadFailure (event) {
  event.target.src = rutaImagenesModelosRenting + "carDefault.png"; 
}
