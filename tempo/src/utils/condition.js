export function condition(condition) {
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
none_day - erro ao obter mas está de dia
none_night - erro ao obter mas está de noite
*/