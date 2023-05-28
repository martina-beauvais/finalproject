import {keyService} from '../dao/index.js';

export const handleKey = async(req, res, next) => {
    const keyQuery = req.params.apiKey;
    if(!keyQuery){
        return res.status(401).send({stauts:"error", error:"No key provided"});
    };
    const key = await keyService.getKeyBy({keyCode: keyQuery});
    if(!key){
        return res.status(401).send({status:"error", error: "Invalid key"});
    };
    if(key.status!=="active"){
        return res.status(400).send({status:"error", error: "Key not active"});
    };
    if(key.usagesLeft <= 0){
        return res.status(400).send({stauts:"error", error:"No more usages left"});
    };
    key.usagesLeft--;
    if(key.usagesLeft <= 0){
        let mail = '';
        for(const key of key.user){
            mail += `<div> <h2>${user.firstName}}</h2> <h4> No more key usages left</h4> </div>` 
        };
        const mailResult = await transporter.sendMail({
            from: `Pandora's Box <marbeauvais17@gmail.com>`,
            to: ['hfjlarqkhurmuwwz', user.email],
            subject: `No more key usages left`,
            html: `
            <div>
                <h1>${user.firstName} </h1>
                <hr>
                <div>
                    I'm sorry, you don't have anymore key usages left on our website. 
                    You'll be assigned to one of employees to deal with the problem personally.
                    Thank you so much,
                    Pandora's box.
                </div>
            </div>
            `,
        })
    };
    await keyService.updateKey(key._id,{usagesLeft:key.usagesLeft});
    next();
};