 const _0xcac0c5=_0xf567;(function(_0x91d661,_0x587717){const _0x41dd33=_0xf567,_0x5de398=_0x91d661();while(!![]){try{const _0x45f9c6=-parseInt(_0x41dd33(0x163))/0x1+-parseInt(_0x41dd33(0x137))/0x2+parseInt(_0x41dd33(0x14a))/0x3+-parseInt(_0x41dd33(0x185))/0x4*(-parseInt(_0x41dd33(0x146))/0x5)+parseInt(_0x41dd33(0xff))/0x6*(parseInt(_0x41dd33(0x151))/0x7)+parseInt(_0x41dd33(0x191))/0x8*(parseInt(_0x41dd33(0x112))/0x9)+-parseInt(_0x41dd33(0x173))/0xa*(-parseInt(_0x41dd33(0x188))/0xb);if(_0x45f9c6===_0x587717)break;else _0x5de398['push'](_0x5de398['shift']());}catch(_0x4c49cb){_0x5de398['push'](_0x5de398['shift']());}}}(_0x413d,0x79e01));function hi(){const _0x883c19=_0xf567;console['log'](_0x883c19(0x152));}hi(),require('./config');const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,jidDecode,proto,getContentType,downloadContentFromMessage,fetchLatestWaWebVersion}=require(_0xcac0c5(0x128)),fs=require('fs'),pino=require(_0xcac0c5(0xef)),lolcatjs=require('lolcatjs'),path=require(_0xcac0c5(0x162)),NodeCache=require(_0xcac0c5(0x12b)),msgRetryCounterCache=new NodeCache(),fetch=require(_0xcac0c5(0x145)),FileType=require(_0xcac0c5(0x12c)),_=require(_0xcac0c5(0x192)),{Boom}=require(_0xcac0c5(0x10b)),PhoneNumber=require(_0xcac0c5(0x11f)),readline=require(_0xcac0c5(0x13f)),{smsg,color,getBuffer}=require('./lib/myfunc'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0xcac0c5(0x10a)),{toAudio,toPTT,toVideo}=require('./lib/converter'),yargs=require(_0xcac0c5(0x177)),store=makeInMemoryStore({'logger':pino()[_0xcac0c5(0x116)]({'level':_0xcac0c5(0x153),'stream':_0xcac0c5(0x10d)})});global[_0xcac0c5(0x179)]=new Object(yargs(process['argv'][_0xcac0c5(0x10f)](0x2))[_0xcac0c5(0x18d)](![])[_0xcac0c5(0xf1)]());const low=require(_0xcac0c5(0x18b)),{Low,JSONFile}=low,mongoDB=require(_0xcac0c5(0xec)),opts=yargs(process[_0xcac0c5(0x144)][_0xcac0c5(0x10f)](0x2))[_0xcac0c5(0x18d)](![])[_0xcac0c5(0xf1)](),dbPath=_0xcac0c5(0xfe);let db;urldb!==''?(db=new mongoDB(urldb),lolcatjs[_0xcac0c5(0x141)](_0xcac0c5(0x17e))):(db=new JSONFile(dbPath),lolcatjs['fromString']('[Successfully\x20connected\x20to\x20Local\x20database]'));function _0xf567(_0x4a6cb6,_0x3c9431){const _0x413d1c=_0x413d();return _0xf567=function(_0xf56759,_0xdb3774){_0xf56759=_0xf56759-0xe7;let _0x223a97=_0x413d1c[_0xf56759];return _0x223a97;},_0xf567(_0x4a6cb6,_0x3c9431);}global['db']=new Low(db),global[_0xcac0c5(0xea)]=global['db'],global[_0xcac0c5(0x120)]=async function loadDatabase(){const _0x92a771=_0xcac0c5;if(global['db']['READ'])return new Promise(_0x276a2c=>setInterval(function(){const _0x4135c2=_0xf567;!global['db'][_0x4135c2(0x15c)]?(clearInterval(this),_0x276a2c(global['db'][_0x4135c2(0x119)]==null?global[_0x4135c2(0x120)]():global['db']['data'])):null;},0x1*0x3e8));if(global['db'][_0x92a771(0x119)]!==null)return;global['db'][_0x92a771(0x15c)]=!![],await global['db'][_0x92a771(0x102)](),global['db'][_0x92a771(0x15c)]=![],global['db'][_0x92a771(0x119)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x92a771(0x119)]||{}},global['db']['chain']=_['chain'](global['db']['data']);},global[_0xcac0c5(0x120)](),process['on'](_0xcac0c5(0x132),console['error']);global['db']&&urldb!==''&&setInterval(async()=>{const _0x378d91=_0xcac0c5;if(global['db'][_0x378d91(0x119)])await global['db']['write']();},0x1e*0x3e8);function createTmpFolder(){const _0x619a7e=_0xcac0c5,_0x47e0d3=_0x619a7e(0x167),_0x5ecdf4=path[_0x619a7e(0x172)](__dirname,_0x47e0d3);!fs[_0x619a7e(0xf9)](_0x5ecdf4)?(fs[_0x619a7e(0x122)](_0x5ecdf4),lolcatjs[_0x619a7e(0x141)](_0x619a7e(0x16f)+_0x47e0d3+'\x27\x20berhasil\x20dibuat.')):lolcatjs[_0x619a7e(0x141)](_0x619a7e(0x16f)+_0x47e0d3+_0x619a7e(0x15b));}createTmpFolder();function _0x413d(){const _0x362366=['./lib/mongoDB','messages','author','pino','replace','parse','json','buffer','sendText','sendContact','msg','connection.update','connectionReplaced','existsSync','ephemeralMessage','bind','public','endsWith','./src/database.json','30zbmvQy','application/octet-stream','decodeJid','read','image','registered','contacts.update','unwatchFile','test','mimetype','fromBuffer','./lib/exif','@hapi/boom','creds.update','store','Unknown\x20DisconnectReason:\x20','slice','logout','@s.whatsapp.net','2182455CfJzDV','sticker','Ubuntu','readMessages','child','end','\x0aitem1.TEL;waid=','data','20.0.04','length','subject','key','asImage','awesome-phonenumber','loadDatabase','isBuffer','mkdirSync','.bin','timedOut','fromMe','log','error','@adiwajshing/baileys','writeFileSync','messages.upsert','node-cache','file-type','question','downloadAndSaveMediaMessage','Connect,\x20welcome\x20owner!','international','string','uncaughtException','readFileSync','receivedPendingNotifications','true','Connection\x20closed,\x20reconnecting....','1316034oxHXDz','WhatsApp','0@s.whatsapp.net','creds','connectionClosed','mime','document','Error\x20Connection.update\x20','readline','downloadMediaMessage','fromString','server','stringify','argv','node-fetch','15zjCysF','loggedOut','Please\x20Type\x20Your\x20Phone\x20Number\x0aExample:\x202347043759577\x20:\x0a','serializeM','2012655TYcyAt','cache','packname','writeFile','video','toString','open','600607IQUWnm','Hello\x20World!','silent','Pairing\x20code:\x20','sendMessage','Connection\x20TimedOut,\x20Reconnecting...','user','createInterface','contacts','Update\x20','\x27\x20already\x20available..','READ','base64','restartRequired','concat','mtype','Result\x20is\x20not\x20a\x20buffer','path','533455fBIjKZ','\x20Contact','split','status','tmp','resolve','filename','getFile','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','Restart\x20Required,\x20Restarting...','output','getName','Folder\x20\x27','getNumber','message','join','41250eYiFcv','groupMetadata','connection','./tmp/','yargs/yargs','from','opts','QUEEN_ANITA_V3\x0aCONNECTED\x20♡゙\x20\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a❶\u00a0\x20||\x20*ᴡʜᴀᴛsᴀᴘᴘ\x20ᴄʜᴀɴɴᴇʟ*\x20=\x20https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a❷\x20||\x20*ᴛᴇʟᴇɢʀᴀᴍ*\x20=\x20https://t.me/davidcyriltech\x20\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a➌\x20||\x20*ʏᴏᴜᴛᴜʙᴇ*\x20=\x20https://www.youtube.com/@DavidCyril_TECH\x20\x0a▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a\x0a\x0a>\x20©\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ᴅᴀᴠɪᴅ\x20ᴄʏʀɪʟ\x20ᴛᴇᴄʜ™','ext','stdin','BAE5','[Successfully\x20connected\x20to\x20MongoDB\x20database]','Device\x20Logged\x20Out,\x20Please\x20link/scan\x20Again\x20And\x20Run.','notify','status@broadcast','promises','startsWith','name','431384MOFGUS','push','unlink','66mfnjUB','authState','audio/ogg;\x20codecs=opus','./lib/lowdb','remoteJid','exitProcess','\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','trim','stdout','8NVyTQP','lodash','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','asSticker','\x0aFN:','DATABASE','alloc'];_0x413d=function(){return _0x362366;};return _0x413d();}const usePairingCode=!![],question=_0x4a4a74=>{const _0x2f732c=_0xcac0c5,_0x1bf9f2=readline[_0x2f732c(0x158)]({'input':process[_0x2f732c(0x17c)],'output':process[_0x2f732c(0x190)]});return new Promise(_0x4016ab=>{const _0x54d4b4=_0x2f732c;_0x1bf9f2[_0x54d4b4(0x12d)](_0x4a4a74,_0x4016ab);});};async function startBotz(){const _0x3721a7=_0xcac0c5,{state:_0x522165,saveCreds:_0x309b9b}=await useMultiFileAuthState('session'),_0x59f35c=makeWASocket({'logger':pino({'level':_0x3721a7(0x153)}),'printQRInTerminal':!usePairingCode,'auth':_0x522165,'msgRetryCounterCache':msgRetryCounterCache,'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'emitOwnEvents':!![],'fireInitQueries':!![],'generateHighQualityLinkPreview':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'browser':[_0x3721a7(0x114),'Chrome',_0x3721a7(0x11a)]});if(usePairingCode&&!_0x59f35c[_0x3721a7(0x189)][_0x3721a7(0x13a)][_0x3721a7(0x104)]){const _0x299828=await question(_0x3721a7(0x148)),_0x5ca7ac=await _0x59f35c['requestPairingCode'](_0x299828[_0x3721a7(0x18f)]());console[_0x3721a7(0x126)](_0x3721a7(0x154)+_0x5ca7ac);}store[_0x3721a7(0xfb)](_0x59f35c['ev']),_0x59f35c['ev']['on'](_0x3721a7(0x12a),async _0xef870d=>{const _0x40ff13=_0x3721a7;try{const _0x1df6a8=_0xef870d[_0x40ff13(0xed)][0x0];if(!_0x1df6a8[_0x40ff13(0x171)])return;_0x1df6a8[_0x40ff13(0x171)]=Object['keys'](_0x1df6a8[_0x40ff13(0x171)])[0x0]===_0x40ff13(0xfa)?_0x1df6a8[_0x40ff13(0x171)]['ephemeralMessage'][_0x40ff13(0x171)]:_0x1df6a8[_0x40ff13(0x171)];_0x1df6a8[_0x40ff13(0x11d)]&&_0x1df6a8[_0x40ff13(0x11d)][_0x40ff13(0x18c)]===_0x40ff13(0x181)&&await _0x59f35c[_0x40ff13(0x115)]([_0x1df6a8[_0x40ff13(0x11d)]]);if(!_0x59f35c[_0x40ff13(0xfc)]&&!_0x1df6a8[_0x40ff13(0x11d)][_0x40ff13(0x125)]&&_0xef870d['type']===_0x40ff13(0x180))return;if(_0x1df6a8[_0x40ff13(0x11d)]['id'][_0x40ff13(0x183)](_0x40ff13(0x17d))&&_0x1df6a8[_0x40ff13(0x11d)]['id'][_0x40ff13(0x11b)]===0x10)return;const _0x1704c3=smsg(_0x59f35c,_0x1df6a8,store);require('./message')(_0x59f35c,_0x1704c3,_0xef870d,store);}catch(_0x1556c4){console[_0x40ff13(0x126)](_0x1556c4);}}),_0x59f35c[_0x3721a7(0x101)]=_0x50d27c=>{const _0x5975bb=_0x3721a7;if(!_0x50d27c)return _0x50d27c;if(/:\d+@/gi['test'](_0x50d27c)){let _0x4c889e=jidDecode(_0x50d27c)||{};return _0x4c889e['user']&&_0x4c889e['server']&&_0x4c889e['user']+'@'+_0x4c889e[_0x5975bb(0x142)]||_0x50d27c;}else return _0x50d27c;},_0x59f35c['ev']['on'](_0x3721a7(0x105),_0x1d4fca=>{const _0x366e41=_0x3721a7;for(let _0x2e463d of _0x1d4fca){let _0x5e4067=_0x59f35c[_0x366e41(0x101)](_0x2e463d['id']);if(store&&store[_0x366e41(0x159)])store[_0x366e41(0x159)][_0x5e4067]={'id':_0x5e4067,'name':_0x2e463d[_0x366e41(0x180)]};}}),_0x59f35c[_0x3721a7(0x16e)]=(_0x36a8fb,_0xaee750=![])=>{const _0x5647d7=_0x3721a7;id=_0x59f35c['decodeJid'](_0x36a8fb),_0xaee750=_0x59f35c['withoutContact']||_0xaee750;let _0x4bd942;if(id[_0x5647d7(0xfd)]('@g.us'))return new Promise(async _0x1c4528=>{const _0x4eb6fa=_0x5647d7;_0x4bd942=store[_0x4eb6fa(0x159)][id]||{};if(!(_0x4bd942[_0x4eb6fa(0x184)]||_0x4bd942[_0x4eb6fa(0x11c)]))_0x4bd942=_0x59f35c[_0x4eb6fa(0x174)](id)||{};_0x1c4528(_0x4bd942[_0x4eb6fa(0x184)]||_0x4bd942[_0x4eb6fa(0x11c)]||PhoneNumber('+'+id[_0x4eb6fa(0xf0)](_0x4eb6fa(0x111),''))[_0x4eb6fa(0x170)]('international'));});else _0x4bd942=id===_0x5647d7(0x139)?{'id':id,'name':_0x5647d7(0x138)}:id===_0x59f35c[_0x5647d7(0x101)](_0x59f35c[_0x5647d7(0x157)]['id'])?_0x59f35c[_0x5647d7(0x157)]:store[_0x5647d7(0x159)][id]||{};return(_0xaee750?'':_0x4bd942[_0x5647d7(0x184)])||_0x4bd942[_0x5647d7(0x11c)]||_0x4bd942['verifiedName']||PhoneNumber('+'+_0x36a8fb['replace'](_0x5647d7(0x111),''))[_0x5647d7(0x170)](_0x5647d7(0x130));},_0x59f35c['public']=!![],_0x59f35c[_0x3721a7(0x149)]=_0xacb2f7=>smsg(_0x59f35c,_0xacb2f7,store),_0x59f35c['ev']['on'](_0x3721a7(0xf7),async _0x449c43=>{const _0x30811f=_0x3721a7,{connection:_0x59d3ef,lastDisconnect:_0x27a1af}=_0x449c43;try{if(_0x59d3ef==='close'){let _0x56ec4b=new Boom(_0x27a1af?.[_0x30811f(0x127)])?.[_0x30811f(0x16d)]['statusCode'];if(_0x56ec4b===DisconnectReason['badSession'])console['log']('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20link/scan\x20Again'),_0x59f35c[_0x30811f(0x110)]();else{if(_0x56ec4b===DisconnectReason[_0x30811f(0x13b)])console['log'](_0x30811f(0x136)),startBotz();else{if(_0x56ec4b===DisconnectReason['connectionLost'])console['log'](_0x30811f(0xe7)),startBotz();else{if(_0x56ec4b===DisconnectReason[_0x30811f(0xf8)])console['log']('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),_0x59f35c[_0x30811f(0x110)]();else{if(_0x56ec4b===DisconnectReason[_0x30811f(0x147)])console['log'](_0x30811f(0x17f)),_0x59f35c[_0x30811f(0x110)]();else{if(_0x56ec4b===DisconnectReason[_0x30811f(0x15e)])console['log'](_0x30811f(0x16c)),startBotz();else{if(_0x56ec4b===DisconnectReason[_0x30811f(0x124)])console['log'](_0x30811f(0x156)),startBotz();else _0x59f35c[_0x30811f(0x117)](_0x30811f(0x10e)+_0x56ec4b+'|'+_0x59d3ef);}}}}}}}(_0x449c43[_0x30811f(0x175)]==_0x30811f(0x150)||_0x449c43[_0x30811f(0x134)]==_0x30811f(0x135))&&(lolcatjs[_0x30811f(0x141)](_0x30811f(0x12f)),lolcatjs[_0x30811f(0x141)]('Connected\x20to\x20=\x20'+JSON[_0x30811f(0x143)](_0x59f35c['user']['id'],null,0x2)),_0x59f35c[_0x30811f(0x155)]('2347043759577@s.whatsapp.net',{'text':_0x30811f(0x17a)}));}catch(_0xa46cdf){console[_0x30811f(0x126)](_0x30811f(0x13e)+_0xa46cdf);}}),_0x59f35c['ev']['on'](_0x3721a7(0x10c),_0x309b9b),_0x59f35c[_0x3721a7(0x16a)]=async(_0xb468d6,_0x4b211e)=>{const _0x20f34a=_0x3721a7;let _0x3e2963,_0x448d7b;const _0xbae379=Buffer[_0x20f34a(0x121)](_0xb468d6)?_0xb468d6:/^data:.*?\/.*?;base64,/i['test'](_0xb468d6)?Buffer[_0x20f34a(0x178)](_0xb468d6['split']`,`[0x1],'base64'):/^https?:\/\//[_0x20f34a(0x107)](_0xb468d6)?await(_0x3e2963=await fetch(_0xb468d6))[_0x20f34a(0xf3)]():fs[_0x20f34a(0xf9)](_0xb468d6)?(_0x448d7b=_0xb468d6,fs['readFileSync'](_0xb468d6)):typeof _0xb468d6===_0x20f34a(0x131)?_0xb468d6:Buffer['alloc'](0x0);if(!Buffer[_0x20f34a(0x121)](_0xbae379))throw new TypeError(_0x20f34a(0x161));const _0x527865=await FileType['fromBuffer'](_0xbae379)||{'mime':_0x20f34a(0x100),'ext':_0x20f34a(0x123)};if(_0xbae379&&_0x4b211e&&!_0x448d7b)_0x448d7b=_0xef4bf3[_0x20f34a(0x172)](__dirname,_0x20f34a(0x176)+new Date()*0x1+'.'+_0x527865[_0x20f34a(0x17b)]),await fs[_0x20f34a(0x182)][_0x20f34a(0x14d)](_0x448d7b,_0xbae379);return{'res':_0x3e2963,'filename':_0x448d7b,..._0x527865,'data':_0xbae379,'deleteFile'(){const _0x31ec3a=_0x20f34a;return _0x448d7b&&fs['promises'][_0x31ec3a(0x187)](_0x448d7b);}};},_0x59f35c[_0x3721a7(0x140)]=async _0x1b8e75=>{const _0x1f46b2=_0x3721a7;let _0x23eef0=(_0x1b8e75[_0x1f46b2(0xf6)]||_0x1b8e75)['mimetype']||'',_0x2218f8=_0x1b8e75[_0x1f46b2(0x160)]?_0x1b8e75[_0x1f46b2(0x160)][_0x1f46b2(0xf0)](/Message/gi,''):_0x23eef0[_0x1f46b2(0x165)]('/')[0x0];const _0x4ee608=await downloadContentFromMessage(_0x1b8e75,_0x2218f8);let _0x50f83a=Buffer[_0x1f46b2(0x178)]([]);for await(const _0x1a3372 of _0x4ee608){_0x50f83a=Buffer[_0x1f46b2(0x15f)]([_0x50f83a,_0x1a3372]);}return _0x50f83a;},_0x59f35c[_0x3721a7(0xf5)]=async(_0x136d52,_0x2bd82e,_0x16c6d2='',_0x58cbbf={})=>{const _0x371cf4=_0x3721a7;let _0x318d14=[];for(let _0x299354 of _0x2bd82e){_0x318d14[_0x371cf4(0x186)]({'displayName':await _0x59f35c[_0x371cf4(0x16e)](_0x299354),'vcard':_0x371cf4(0x16b)+await _0x59f35c[_0x371cf4(0x16e)](_0x299354)+_0x371cf4(0xe9)+await _0x59f35c[_0x371cf4(0x16e)](_0x299354)+_0x371cf4(0x118)+_0x299354[_0x371cf4(0x165)]('@')[0x0]+':'+_0x299354[_0x371cf4(0x165)]('@')[0x0]+_0x371cf4(0x18e)});}_0x59f35c[_0x371cf4(0x155)](_0x136d52,{'contacts':{'displayName':_0x318d14['length']+_0x371cf4(0x164),'contacts':_0x318d14},..._0x58cbbf},{'quoted':_0x16c6d2});},_0x59f35c['sendFile']=async(_0x33e9b0,_0xe72104,_0x1b470e='',_0x56332c='',_0x538f82,_0x231957=![],_0x557b23={})=>{const _0x184598=_0x3721a7;let _0x7f28e5=await _0x59f35c['getFile'](_0xe72104,!![]),{res:_0x2b4f37,data:_0x2eb219,filename:_0x545cbf}=_0x7f28e5;if(_0x2b4f37&&_0x2b4f37[_0x184598(0x166)]!==0xc8||_0x2eb219[_0x184598(0x11b)]<=0x10000)try{throw{'json':JSON[_0x184598(0xf1)](_0x2eb219[_0x184598(0x14f)]())};}catch(_0x1413f4){if(_0x1413f4[_0x184598(0xf2)])throw _0x1413f4[_0x184598(0xf2)];}let _0x16a20c={'filename':_0x1b470e};if(_0x538f82)_0x16a20c['quoted']=_0x538f82;if(!_0x7f28e5)_0x557b23['asDocument']=!![];let _0x574cc6='',_0x3c837c=_0x7f28e5['mime'],_0x1a49fb;if(/webp/['test'](_0x7f28e5['mime'])||/image/['test'](_0x7f28e5[_0x184598(0x13c)])&&_0x557b23[_0x184598(0xe8)])_0x574cc6=_0x184598(0x113);else{if(/image/[_0x184598(0x107)](_0x7f28e5[_0x184598(0x13c)])||/webp/[_0x184598(0x107)](_0x7f28e5['mime'])&&_0x557b23[_0x184598(0x11e)])_0x574cc6=_0x184598(0x103);else{if(/video/['test'](_0x7f28e5[_0x184598(0x13c)]))_0x574cc6=_0x184598(0x14e);else{if(/audio/[_0x184598(0x107)](_0x7f28e5['mime']))_0x1a49fb=await(_0x231957?toPTT:toAudio)(_0x2eb219,_0x7f28e5['ext']),_0x2eb219=_0x1a49fb[_0x184598(0x119)],_0x545cbf=_0x1a49fb[_0x184598(0x169)],_0x574cc6='audio',_0x3c837c=_0x184598(0x18a);else _0x574cc6=_0x184598(0x13d);}}}if(_0x557b23['asDocument'])_0x574cc6='document';let _0x41d6d9={..._0x557b23,'caption':_0x56332c,'ptt':_0x231957,[_0x574cc6]:{'url':_0x545cbf},'mimetype':_0x3c837c},_0x558379;try{_0x558379=await _0x59f35c[_0x184598(0x155)](_0x33e9b0,_0x41d6d9,{..._0x16a20c,..._0x557b23});}catch(_0x4bf630){console[_0x184598(0x127)](_0x4bf630),_0x558379=null;}finally{if(!_0x558379)_0x558379=await _0x59f35c[_0x184598(0x155)](_0x33e9b0,{..._0x41d6d9,[_0x574cc6]:_0x2eb219},{..._0x16a20c,..._0x557b23});return _0x558379;}},_0x59f35c['sendVideoAsSticker']=async(_0xecae57,_0xfb2dbf,_0x11817c,_0x5a531d={})=>{const _0x142280=_0x3721a7;let _0x21e280=Buffer[_0x142280(0x121)](_0xfb2dbf)?_0xfb2dbf:/^data:.*?\/.*?;base64,/i[_0x142280(0x107)](_0xfb2dbf)?Buffer[_0x142280(0x178)](_0xfb2dbf[_0x142280(0x165)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0xfb2dbf)?await await getBuffer(_0xfb2dbf):fs[_0x142280(0xf9)](_0xfb2dbf)?fs[_0x142280(0x133)](_0xfb2dbf):Buffer[_0x142280(0xeb)](0x0),_0x1305eb;return _0x5a531d&&(_0x5a531d[_0x142280(0x14c)]||_0x5a531d[_0x142280(0xee)])?_0x1305eb=await writeExifVid(_0x21e280,_0x5a531d):_0x1305eb=await videoToWebp(_0x21e280),await _0x59f35c[_0x142280(0x155)](_0xecae57,{'sticker':{'url':_0x1305eb},..._0x5a531d},{'quoted':_0x11817c}),_0x1305eb;},_0x59f35c[_0x3721a7(0x12e)]=async(_0x216f40,_0x205f0a,_0x49d485=!![])=>{const _0x52cba6=_0x3721a7;let _0x5b9fc3=_0x216f40[_0x52cba6(0xf6)]?_0x216f40[_0x52cba6(0xf6)]:_0x216f40,_0xaf97b8=(_0x216f40[_0x52cba6(0xf6)]||_0x216f40)['mimetype']||'',_0x329ab4=_0x216f40[_0x52cba6(0x160)]?_0x216f40[_0x52cba6(0x160)][_0x52cba6(0xf0)](/Message/gi,''):_0xaf97b8[_0x52cba6(0x165)]('/')[0x0];const _0x43f1d9=await downloadContentFromMessage(_0x5b9fc3,_0x329ab4);let _0x28063e=Buffer[_0x52cba6(0x178)]([]);for await(const _0x37493b of _0x43f1d9){_0x28063e=Buffer['concat']([_0x28063e,_0x37493b]);}let _0x4ec6ca=await FileType['fromBuffer'](_0x28063e);return trueFileName=_0x49d485?_0x205f0a+'.'+_0x4ec6ca['ext']:_0x205f0a,await fs[_0x52cba6(0x129)](trueFileName,_0x28063e),trueFileName;};const _0xef4bf3=require('path');return _0x59f35c[_0x3721a7(0x12e)]=async(_0x36cc32,_0x2b6cfe,_0x395fd9=!![])=>{const _0x45e11e=_0x3721a7;let _0x3ecd0d=_0x36cc32[_0x45e11e(0xf6)]?_0x36cc32[_0x45e11e(0xf6)]:_0x36cc32,_0x187032=(_0x36cc32[_0x45e11e(0xf6)]||_0x36cc32)[_0x45e11e(0x108)]||'',_0x4f41bf=_0x36cc32[_0x45e11e(0x160)]?_0x36cc32[_0x45e11e(0x160)][_0x45e11e(0xf0)](/Message/gi,''):_0x187032['split']('/')[0x0];const _0x4a7c74=await downloadContentFromMessage(_0x3ecd0d,_0x4f41bf);let _0x571276=Buffer[_0x45e11e(0x178)]([]);for await(const _0x220ada of _0x4a7c74){_0x571276=Buffer[_0x45e11e(0x15f)]([_0x571276,_0x220ada]);}let _0xaf9cdb=await FileType[_0x45e11e(0x109)](_0x571276),_0x492dbe=_0x395fd9?_0x2b6cfe+'.'+_0xaf9cdb['ext']:_0x2b6cfe,_0x3aecee=_0xef4bf3[_0x45e11e(0x172)](__dirname,_0x45e11e(0x167),_0x492dbe);return await fs['writeFileSync'](_0x3aecee,_0x571276),_0x3aecee;},_0x59f35c['sendImageAsSticker']=async(_0x2c348a,_0x404808,_0x3aad97,_0x3ec497={})=>{const _0x4528c8=_0x3721a7;let _0x4c4564=Buffer[_0x4528c8(0x121)](_0x404808)?_0x404808:/^data:.*?\/.*?;base64,/i[_0x4528c8(0x107)](_0x404808)?Buffer[_0x4528c8(0x178)](_0x404808[_0x4528c8(0x165)]`,`[0x1],_0x4528c8(0x15d)):/^https?:\/\//['test'](_0x404808)?await await getBuffer(_0x404808):fs[_0x4528c8(0xf9)](_0x404808)?fs[_0x4528c8(0x133)](_0x404808):Buffer[_0x4528c8(0xeb)](0x0),_0x321398;return _0x3ec497&&(_0x3ec497[_0x4528c8(0x14c)]||_0x3ec497[_0x4528c8(0xee)])?_0x321398=await writeExifImg(_0x4c4564,_0x3ec497):_0x321398=await imageToWebp(_0x4c4564),await _0x59f35c[_0x4528c8(0x155)](_0x2c348a,{'sticker':{'url':_0x321398},..._0x3ec497},{'quoted':_0x3aad97}),_0x321398;},_0x59f35c['sendPoll']=(_0x47882f,_0x312b5c='',_0x27c9db=[],_0x5c92e=0x1)=>{const _0x1493f4=_0x3721a7;return _0x59f35c[_0x1493f4(0x155)](_0x47882f,{'poll':{'name':_0x312b5c,'values':_0x27c9db,'selectableCount':_0x5c92e}});},_0x59f35c[_0x3721a7(0xf4)]=(_0x5a6032,_0x24baa8,_0x198cae='',_0x33202a)=>_0x59f35c[_0x3721a7(0x155)](_0x5a6032,{'text':_0x24baa8,..._0x33202a},{'quoted':_0x198cae}),_0x59f35c;}startBotz();let file=require[_0xcac0c5(0x168)](__filename);fs['watchFile'](file,()=>{const _0x227756=_0xcac0c5;fs[_0x227756(0x106)](file),console[_0x227756(0x126)](_0x227756(0x15a)+__filename),delete require[_0x227756(0x14b)][file],require(file);});
