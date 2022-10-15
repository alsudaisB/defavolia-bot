const fs = require('fs-extra')

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `Hai Defavolia [Bot] disini`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, jame, betime, blockNumber, prem, banned, hit, cts, waver) => {
    return `
*┏━──Information Bot*
*┃*
*┃➥ Instagram : instagram.com/defavolia*
*┃➥ Library : @open-wa/wa-automate*
*┃➥ Bot Name : Defavolia [Bot]*
*┃➥ Whatsapp Bot Ver : 2.11.0*
*┃➥ Creator : Daisss*
*┃➥ Tanggal : ${betime}*
*┃➥ Jam : ${jame}*
*┃➥ Premium : ${blockNumber.length} User*
*┃➥ Banned : ${banned.length} User*
*┃➥ Block  : ${prem.length} User*
*┃➥ Hit : ${hit.length}*
*┃*
*┗━──────────────*


*┏━──Whatsapp*
*┃https://wa.me/628875090455*
*┗━──────────────*

*⌜ List Perintah ⌟*
*┏━───────────────╮*
*┃➥${prefix}afk*
*┃➥${prefix}attp*
*┃➥${prefix}addvn*
*┃➥${prefix}addsay*
*┃➥${prefix}addimg*
*┃➥${prefix}apakah*
*┃➥${prefix}aiquote*
*┃➥${prefix}autostik*
*┃➥${prefix}addbacot*
*┃➥${prefix}adminList*
*┃➥${prefix}addstiker*
*┃➥${prefix}s*
*┃➥${prefix}sfull*
*┃➥${prefix}ttp*
*┃➥${prefix}sgiffull*
*┃➥${prefix}startgif*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}meme*
*┃➥${prefix}quotemaker*
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}bisakah*
*┃➥${prefix}tiktokpic*
*┃➥${prefix}zodiak*
*┃➥${prefix}resep*
*┃➥${prefix}cuaca*
*┃➥${prefix}chord*
*┃➥${prefix}lirik*
*┃➥${prefix}doggo*
*┃➥${prefix}fakta*
*┃➥${prefix}quote*
*┃➥${prefix}cerpen*
*┃➥${prefix}puisi*
*┃➥${prefix}memes*
*┃➥${prefix}tts*
*┃➥${prefix}translate*
*┃➥${prefix}resi*
*┃➥${prefix}linkgc*
*┃➥${prefix}ownergc*
*┃➥${prefix}me*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}gcinfo*
*┃➥${prefix}howmuch*
*┃➥${prefix}kalkulator*
*┃➥${prefix}google*
*┃➥${prefix}ptl*
*┃➥${prefix}grupbot*
*┃➥${prefix}getpic @tagmember*
*┃➥${prefix}santet*
*┃➥${prefix}saylist*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}listbacot*
*┃➥${prefix}bacot*
*┃➥${prefix}delbacot*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}infogempa*
*┃➥${prefix}bucin*
*┃➥${prefix}playstore*
*┃➥${prefix}shopee*
*┃➥${prefix}glitch*
*┃➥${prefix}distance*
*┃➥${prefix}emot*
*┃➥${prefix}tebakgambar*
*┃➥${prefix}logoff*
*┃➥${prefix}blackpink*
*┃➥${prefix}glowtext*
*┃➥${prefix}twitter*
*┃➥${prefix}quotesen*
*┃➥${prefix}detail*
*┃➥${prefix}findsticker*
*┃➥${prefix}imgtourl*
*┃➥${prefix}myzodiak*
*┃➥${prefix}missing*
*┃➥${prefix}silverpb*
*┃➥${prefix}goldpb*
*┃➥${prefix}darkjokes*
*┃➥${prefix}trendingtwit*
*┃➥${prefix}fakta2*
*┃➥${prefix}memeindo*
*┃➥${prefix}bot*
*┃➥${prefix}reverseword*
*┃➥${prefix}happymod*
*┃➥${prefix}shortlink*
*┃➥${prefix}linknobg*
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan*
*┃➥${prefix}raingif*
*┃➥${prefix}translate*
*┃➥${prefix}buatgrup*
*┃➥${prefix}take*
*┃➥${prefix}sgifwm*
*┃➥${prefix}delstiker*
*┃➥${prefix}liststiker*
*┃➥${prefix}delvn*
*┃➥${prefix}listvn*
*┃➥${prefix}delimg*
*┃➥${prefix}listimg*
*┃➥${prefix}doaharian*
*┃➥${prefix}postig*
*┃➥${prefix}kalender*
*┃➥${prefix}bioskop*
*┃➥${prefix}infoloker*
*┃➥${prefix}luassegitiga*
*┃➥${prefix}kelsegitiga*
*┃➥${prefix}luaspersegi*
*┃➥${prefix}kelpersegi*
*┃➥${prefix}kuadrat*
*┃➥${prefix}kubik*
*┃➥${prefix}perkalian*
*┃➥${prefix}jadwaltvnow*
*┃➥${prefix}jadwaltv*
*┃➥${prefix}wanted*
*┃➥${prefix}burn*
*┃➥${prefix}trash*
*┃➥${prefix}stickerline*
*┃➥${prefix}readmore*
*┃➥${prefix}3dphoto*
*┃➥${prefix}wikihow*
*┃➥${prefix}sfile*
*┃➥${prefix}sfiledown*
*┃➥${prefix}tobecontinue*
*┃➥${prefix}thuglife*
*┃➥${prefix}givecolor*
*┃➥${prefix}faktaunik*
*┃➥${prefix}level*
*┃➥${prefix}leaderboard*
*┃➥${prefix}ytplaylist*
*┃➥${prefix}appstore*
*┃➥${prefix}dankmemes*
*┃➥${prefix}tobijak*
*┃➥${prefix}discord*
*┃➥${prefix}infoapp*
*┃➥${prefix}bbcindo*
*┃➥${prefix}addvid*
*┃➥${prefix}delvid*
*┃➥${prefix}listvid*
*┗━───────────────╯*


*⌜ Stalk & Search Sosmed ⌟*
*┏━───────────────╮*
*┃➥${prefix}stalkig*
*┃➥${prefix}githubstalk*
*┗━───────────────╯*

*⌜ Wibu ⌟*
*┏━───────────────╮*
*┃➥${prefix}neko*
*┃➥${prefix}waifu*
*┃➥${prefix}anime*
*┃➥${prefix}wallpaper*
*┃➥${prefix}wallpaper2*
*┃➥${prefix}kodenuklir*
*┃➥${prefix}animeavatar*
*┗━───────────────╯*


*⌜ Aksi ⌟*
*┏━───────────────╮*
*┃➥${prefix}rhug*
*┃➥${prefix}slap*
*┃➥${prefix}tickle*
*┃➥${prefix}cuddle*
*┃➥${prefix}kissgif*
*┃➥${prefix}randomhug*
*┃➥${prefix}randompat*
*┗━───────────────╯*

*⌜ Downloader & Media ⌟*
*┏━───────────────╮*
*┃➥${prefix}pinterest*
*┃➥${prefix}pinterestdown*
*┃➥${prefix}pinimg*
*┃➥${prefix}tiktok*
*┃➥${prefix}tiktokaudio*
*┃➥${prefix}ytsearch*
*┃➥${prefix}trendingyt*
*┃➥${prefix}trendmusic*
*┃➥${prefix}trendgaming*
*┃➥${prefix}tomp3*
*┃➥${prefix}spotify*
*┃➥${prefix}whatsong*
*┃➥${prefix}mediafire*
*┗━───────────────╯*

*⌜ Foto ⌟*
*┏━───────────────╮*
*┃➥${prefix}amel*
*┃➥${prefix}pictcogan*
*┃➥${prefix}googleimg*
*┗━───────────────╯*_

*⌜ About Bot ⌟*
*┏━───────────────╮*
*┃➥${prefix}tnc*
*┃➥${prefix}discordserver*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot*
*┃➥${prefix}join*
*┃➥${prefix}reportbug*
*┃➥${prefix}runtime*
*┃➥${prefix}shutdown*
*┃➥${prefix}eval*
*┗━───────────────╯*

*⌜ Owner Bot ⌟*
*┏━───────────────╮*
*┃➥${prefix}exec*
*┃➥${prefix}exif*
*┃➥${prefix}eval*
*┃➥${prefix}mute*
*┃➥${prefix}unmute*
*┃➥${prefix}ban*
*┃➥${prefix}unban*
*┃➥${prefix}addprem*
*┃➥${prefix}delprem*
*┃➥${prefix}deleteban*
*┃➥${prefix}bc*
*┃➥${prefix}bcgrup*
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall*
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┃➥${prefix}addcogan*
*┃➥${prefix}addcecan*
*┃➥${prefix}delallstik*
*┃➥${prefix}delallvn*
*┃➥${prefix}delallimg*
*┃➥${prefix}block*
*┃➥${prefix}unblock*
*┃➥${prefix}deleteleft*
*┃➥${prefix}deletewelcome*
*┃➥${prefix}listleft*
*┃➥${prefix}listwelcome*
*┃➥${prefix}vipupme*
*┃➥${prefix}vipup*
*┃➥${prefix}vipdown*
*┗━───────────────╯*

*┏━──Who is Defavolia?*
*┃➥ Dais*
*┗━──────────────*

*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Runtime: ${cts}*
*┃➥WA Version: ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*
`
}
exports.help = help

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

const admin = (prefix) => {
    return `
*┏━────Khusus Admin Grup*
*┃*
*┃ Fitur Grup*
*┃➥${prefix}antidelete enable/disable*
*┃➥${prefix}antivirtex enable/disable*
*┃➥${prefix}viewonce enable/disable*
*┃➥${prefix}autosticker enable/disable*
*┃➥${prefix}welcome enable/disable*
*┃➥${prefix}left enable/disable*
*┃➥${prefix}leveling on/off*
*┃➥${prefix}nsfw on/off*
*┃*
*┃ Update User*
*┃➥${prefix}promote* @tag
*┃➥${prefix}demote* @tag
*┃➥${prefix}opromote* <reply pesan yang ingin dipromote>
*┃➥${prefix}odemote* <reply pesan yang ingin didemote>
*┃
*┃ Add & Kick*
*┃➥${prefix}add 62xxxxxxxxxx*
*┃➥${prefix}kick* <reply pesan orang yang ingin dikick>
*┃➥${prefix}pkick* <tag member yang ingin dikick>
*┃➥${prefix}edotensei <tag member dan masukkan ulang>*
*┃➥${prefix}oedotensei* <reply pesan member>
*┃➥${prefix}setdesc*
*┃➥${prefix}hidetag*
*┃➥${prefix}ohidetag*
*┃
*┃ Update Grup*
*┃➥${prefix}seticon*
*┃➥${prefix}revoke link gc*
*┃➥${prefix}setgroupname*
*┃*
*┃ Kirim ulang, delete pesan dan list member grup*
*┃➥${prefix}resend*
*┃➥${prefix}del*
*┃➥${prefix}infoall*
*┃*
*┗━──────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Khusus Pembuat Grup* ] ⚠
*${prefix}kickall*
`
}
exports.admin = admin

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
Doakan agar project bot ini bisa terus berkembang
Doakan agar owner bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Pulsa : 088804225115 (Smartfren)

Terimakasih. 

-Dais`
}

exports.kodebahasa = () => {
    return `
Kode Bahasa : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}
