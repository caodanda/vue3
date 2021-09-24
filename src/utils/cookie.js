export function getCookie(name){
  let cookieList = document.cookie === '' ? [] : document.cookie.split(';')
  if(cookieList.length){
    let index = cookieList.findIndex(item=>item.includes(name))
    return cookieList[index].split('=')[1]
  }else{
    return ''
  }
}


export function setCookie(key,value,seconds){
  let expires = ''
  if (seconds !== null) {
    let date = new Date()
    date.setTime(date.getTime() + seconds * 1000)
    expires = ';expires=' + date.toUTCString()
  }
  document.cookie = key + '=' + escape(value) + expires
}


export function deleteCookie(key){
  setCookie(key, '', -1)
}
