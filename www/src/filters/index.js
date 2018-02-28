export const endword = (value,length) => {
  length = length || 15
  if( !value || typeof value !== 'string' ) return ''
  if( value.length <= length) return value

  return value.substring(value.length-length)
}

export const mobilehide = (value) => {
  if( !value || typeof value !== 'string' ) return ''
  if( value.length <= 7) return value

  return value.substring(0, 3) + '****' + value.substring(7); 
}
export const formatbankcardnumber=(value)=>{
  if(/\S{5}/.test(value)){
    return value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
  }
}
export const fee = (value,persent) => {
  if( !value || typeof value !== 'number' ) return ''
  return value*persent/100; 
}

export const outoffee = (value,persent) => {
  if( !value || typeof value !== 'number' ) return ''
  return value*(100-persent)/100; 
}

export const persent = (value) => {
  if( !value || typeof value !== 'number' ) return ''
  return value*100 + '%'; 
}

export const shiftToPersent=(value)=>{
  var persent=(value/5).toFixed(4);
  return persent*100 +'%'
}