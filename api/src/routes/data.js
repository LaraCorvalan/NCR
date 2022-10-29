const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/data', async (req, res) => {
    try {
        let request = await axios.get("https://api.npoint.io/97d89162575a9d816661") 
        let result = request.data.cuentas 
        console.log(result)
        res.status(200).json(result)      
    } catch (error) {
        console.log('error', error)
    }
   
})

router.get('/detail/:id', async (req, res) => {
    const {id} = req.params
    try {
        let request = await axios.get("https://api.npoint.io/97d89162575a9d816661") 
        let result = request.data.cuentas 
        result.map(e => {
            console.log(e)
            if(id === e.n){
                res.status(200).json(e)
            }
        })  
    } catch (error) {
        console.log('error', error)
    }
   
})

module.exports = router;