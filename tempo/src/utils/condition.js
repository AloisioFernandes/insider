function condition(condition) {
  switch(condition) {
    case 'storm': 
      return icon = {
        name: 'thunderstorm-outline',
        color: '#1ec9ff' 
      }
      break
    case 'clear_day': 
      return icon = {
        name: 'sunny-outline',
        color: '#ffB300' 
      }
      break
    case 'clear_night': 
      return icon = {
        name: 'moon-outline',
        color: '#1ec9ff' 
      }
      break
    case 'cloudly_day': 
      return icon = {
        name: 'partly-sunny-outline',
        color: '#ffB300' 
      }
      break
    case 'cloudly_night': 
      return icon = {
        name: 'cloudy-night-outline',
        color: '#1ec9ff' 
      }
      break
    case 'rain': 
      return icon = {
        name: 'rainy-outline',
        color: '#1ec9ff' 
      }
      break
    default: 
      return icon = {
        name: 'cloud-outline',
        color: '#1ec9ff' 
      }
  }
}

function conditionIcon(condition) {
  switch(condition) {
    case 'storm': 
      return icon = {
        name: 'thunderstorm',
        color: '#ffffff' 
      }
      break
    case 'clear_day': 
      return icon = {
        name: 'sunny',
        color: '#ffB300' 
      }
      break
    case 'clear_night': 
      return icon = {
        name: 'moon',
        color: '#ffffff' 
      }
      break
    case 'cloudly_day': 
      return icon = {
        name: 'partly-sunny',
        color: '#ffB300' 
      }
      break
    case 'cloudly_night': 
      return icon = {
        name: 'cloudy-night',
        color: '#ffffff' 
      }
      break
    case 'rain': 
      return icon = {
        name: 'rainy',
        color: '#ffffff' 
      }
      break
    default: 
      return icon = {
        name: 'cloud',
        color: '#ffffff' 
      }
  }
}

export { condition, conditionIcon }

/*
storm - tempestade 
snow - neve
hail - granizo
rain - chuva
fog - neblina
clear_day - dia limpo 
clear_night - noite limpa
cloud - nublado
cloudly_day - nublado de dia 
cloudly_night - nublado de noite 
none_day - erro ao obter mas est?? de dia
none_night - erro ao obter mas est?? de noite
*/