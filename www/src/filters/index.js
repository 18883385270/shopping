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