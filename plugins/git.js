const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/YT0pW4x/Screenshot-2021-11-10-09-29-10-1-1.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❤️LACHUTTY💙
            

*owner number Nijin* :https://wa.me/919778797059.


*owner is instagram* :https://instagram.com/arun_surendran_7


*github* : https://github.com/arunchristo/Lachutty-.



*audio commands* :https://github.com/arunchristo/uploads/tree/main/bgm.



*sticker commands* :https://github.com/arunchristo/uploads/tree/main/stickers.


■□■□■□■□■□■□■□■□■□■□
❤️Lachutty💙
▣▣ ~arun~ ~surendran~ ▣▣

`}) 

}));
