const express = require('express')
const db = require('../db/datastore.js')


const router = new express.Router

router.post('/register', async (req,res) =>
{
    console.log(req.body)
    try{
        getUser(req.body.email).then(user => 
            {
                if(user[0].length > 0)
                {
                    console.log('Email already exists!')
                }
                else
                {
                    saveUser(req.body.name, req.body.email, req.body.password)
                    .then(res.status(200).send())
                }
            })
    }catch (err)
    {
        res.status(400).send('Error: ' + err)
    }
})

router.post('/login', async (req,res) =>
{
    try{
        getUser(req.body.email).then(user => 
            {
                if(user[0].length > 0 && user[0][0].password == req.body.password)
                {
                    console.log('login successful!')
                }
                else
                {
                    console.log('Email or Password is invalid')
                }
            })
    }catch (err)
    {
        res.status(400).send('Error: ' + err)
    }
})

const saveUser = async (name, email, pass) =>
{
    const key = db.key('users')
    const entity = 
        {
            key: key,
            data:
            [
                {name: 'name', value: name},
                {name: 'email', value: email},
                {name: 'password', value: pass}
            ]
        }
        return await db.save(entity)
}

const getUser = async (email) =>
{
    const query = db.createQuery('users')
                    .filter('email', '=', email)
    const user = await db.runQuery(query)
    return user
}
module.exports = router