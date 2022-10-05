//Funcion para filtrar objetos por sus atributos

/*
const mapAtribFiltro = {
        'dniUsuario': this.filtro.dni,
        'nombreUsuario': this.filtro.nombre,
        'matricula': this.filtro.matricula,
        'comision': this.filtro.comision,
        'estadoId': this.filtro.estado,
        'fechaSolicitud': {
          'type': 'date',
          '>': this.filtro.fechaSolicitudRenting.inicio,
          '<': this.filtro.fechaSolicitudRenting.fin 
        }
*/

export function filtrarArrayObjetos(jsonMapAtributosFiltros, arrayAFiltrar){
  Object.entries(jsonMapAtributosFiltros).forEach(([key, value]) => { //key == atributo del objeto  value==valor del filtro
    if (value != "" && value != undefined && value != null) {  //si tenemos el valor de filtro
      arrayAFiltrar = arrayAFiltrar.filter((objeto) => {
        if(typeof value == 'object' && value!=null){  // si el type es object (json dentro de json) entra al case
          switch (value['type']) {
            case 'date':                  
              if (
                objeto[key]!= null &&    //si existe el atributo a filtrar
                objeto[key]!= "" && 
                objeto[key]!= undefined
              ){
                if(value['<']!=undefined){
                    const fechaValor = parseDate (objeto[key]);
                    const fechaFiltro = parseDate(value['<']);
                    return (fechaValor < fechaFiltro);
                }
                else if(value['<=']!=undefined){
                  const fechaValor = parseDate (objeto[key]);
                  const fechaFiltro = parseDate(value['<=']);
                  return ( fechaValor <= fechaFiltro);
                }
                else if(value['>']!=undefined){
                    const fechaValor = parseDate (objeto[key]);
                    const fechaFiltro = parseDate(value['>']);
                    return ( fechaValor > fechaFiltro);
                }
                else if(value['>=']!=undefined){
                  const fechaValor = parseDate (objeto[key]);
                  const fechaFiltro = parseDate(value['>=']);
                  return ( fechaValor >= fechaFiltro);
                }
                else if(value['=']!=undefined){
                    const fechaValor = parseDate (objeto[key]);
                    const fechaFiltro = parseDate(value['=']);
                    return (fechaValor == fechaFiltro);
                }
              }
              break;
            case 'int':
              if (
                objeto[key]!= null &&    //si existe el atributo a filtrar
                objeto[key]!= "" && 
                objeto[key]!= undefined
              ){
                if(value['<']!=undefined){
                    const intValor = objeto[key];
                    const intFiltro = value['<'];
                    return (intValor < intFiltro);
                }
                else if(value['<=']!=undefined){
                  const intValor = objeto[key];
                  const intFiltro = value['<='];
                  return ( intValor <= intFiltro);
                }
                else if(value['>']!=undefined){
                    const intValor = objeto[key];
                    const intFiltro = value['>'];
                    return ( intValor > intFiltro);
                }
                else if(value['>=']!=undefined){
                  const intValor = objeto[key];
                  const intFiltro = value['>='];
                  return ( intValor >= intFiltro);
                }
                else if(value['=']!=undefined){
                    const intValor = objeto[key];
                    const intFiltro = value['='];
                    return (intValor == intFiltro);
                }
              }
              break;
            case 'array':
              if (
                objeto[key]!= null &&    //si existe el atributo a filtrar
                objeto[key]!= "" && 
                objeto[key]!= undefined
              ){
                if(value['has']!=undefined){
                    const intValor = objeto[key];
                    const intFiltro = value['has'];
                    return (intValor.indexOf(intFiltro)!=-1);
                }
                else if(value['in']!=undefined){
                  const intValor = objeto[key];
                  const intFiltro = value['in'];
                  return (  intFiltro.indexOf(intValor)!=-1);
                }
              }
              break;

          
          }
        }
        else if(objeto[key]!=null && objeto[key]!=undefined && typeof objeto[key] != 'object'){  //si es tipo de datos primitivo
          try {
            let atributoObjeto=objeto[key]
            let valorFiltro=value
            if(typeof objeto[key] == 'string' && typeof value=='string'){
              atributoObjeto=atributoObjeto.toUpperCase()
              valorFiltro=valorFiltro.toUpperCase()
              return atributoObjeto.indexOf(valorFiltro) != -1 
            }else if(typeof objeto[key] == 'number' && typeof value=='number'){
              return atributoObjeto==valorFiltro
            }
            return atributoObjeto==valorFiltro
          } catch (error) {
            console.log(error)
          }
        }
        return true
      });
    }
  });
  return arrayAFiltrar;
}

