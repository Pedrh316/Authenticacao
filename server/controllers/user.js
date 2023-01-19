const userModel = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const verifyToken = (req, res) => {
    const {token} = req.body;
    try{
        jwt.verify(token, process.env.TOKEN_KEY, (err) => {
            if(err){
                return res.status(401).json({success:false, msg:'Rota requisitada não autorizada.'});
            }
            return res.status(200).json({success:true, json:'Rota autorizada com sucesso.'})
        })
    } catch(err){
        return res.status(401).json({success:false, msg:'Rota requisitada não autorizada.'});
    }
}

const login = async (req, res) => {
    const {username, email, password} = req.body;
    const accountToCompare = await userModel.findOne({username, email}).exec();
    if(!accountToCompare?.password){
        return res.status(409).json({success:false, msg:'Este usuário não está cadastrado.'});
    }
    bcrypt.compare(password, accountToCompare.password).then((result) => {
        if(!result){
            return res.status(401).json({success:false, msg:'Senha incorreta.'});
        }
        const token = jwt.sign({username, email}, process.env.TOKEN_KEY, {expiresIn:300});
        return res.status(200).json({success:true, msg:'Voce foi logado com sucesso.', token:token});
    })
}

const register = async (req, res) => {
    const {username, email, password} = req.body;
    const thereIsUsername = await userModel.findOne({username}).exec();
    const thereIsEmail = await userModel.findOne({email}).exec();
    if(thereIsUsername){
        return res.status(409).json({success:false, msg:'Já existe uma pessoa com este nome de usuário.'});
    }
    if(thereIsEmail){
        return res.status(409).json({success:false, msg:'Este email já está registrado.'});
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const {DBusername, DBemail} = await userModel.create({
            username,
            email,
            password:hashedPassword
        })
        const token = jwt.sign({username:DBusername, email:DBemail}, process.env.TOKEN_KEY, {expiresIn:300})
        return res.status(201).json({success:true, msg:'Conta criada com sucesso.', token:token})
    } catch(err){
        return res.status(500).json({success:false, msg:'Falha ao criar conta.'})
    }
}

module.exports = {verifyToken, login, register};