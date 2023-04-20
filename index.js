const express = require('express')
const cookieParser= require('cookie-parser')
const bodyParser=require('body-parser')

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(bodyParser.json());
const port= process.env.PORT ||8000;
app.get('/',(req,res)=>{
   res.send('Hello World');
})
 app.listen(port,()=>{
    console.log('Server is running');
 })
 
       
app.get('/train', async ( )=>{
    const response = await fetch('http://localhost:3000/register',{
        method:'POST',
        body:JSON.stringify({"companyName":"Divyansh"}),
        headers:{
          'content-Type':'application/json'
        }
      })
      const data = await response.json();
      console.log(data);
      const response2 = await fetch('http://localhost:3000/auth',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
          'content-Type':'application/json'
        }
      })
      const data2 = await response2.json();
      console.log(data2.access_token);
      const response3 = await fetch('http://localhost:3000/trains',{
        method:'POST',
        body:JSON.stringify(),
        headers: {
           Auth: `Bearer {data2.access_token}`
       }
        
          
        
      })
      const data3 = await response3.json();
      console.log(data3);
      return data3;
     

   
})

