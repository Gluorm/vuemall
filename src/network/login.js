import axios from 'axios'
export function Getlogin(name,password){
 return axios.post('/api/user.php',{
    Name: name,
    userPwd: password
  })
}

export function Getregistered(name,password){
  return axios.post('/api/registered.php',{
    Name: name,
    userPwd: password
  })
}