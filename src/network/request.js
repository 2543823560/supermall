import  axios from 'axios'
export function request(config) {
  const  instance=axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6'
  })
  instance.interceptors.request.use(config=>{
    return config
  },error => {

  })
  instance.interceptors.response.use(res=>{
    return res
  },error => {

  })
  return instance(config)
}
