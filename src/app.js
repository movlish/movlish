require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')

function sendStarMessage(ctx) {
    
    ctx.deleteMessage();

    let startMessage = 'Xush kelibsiz aziz mehmon siz bu yerda ШНК (SHNQ Shaharsozlik Norma va Qoidalari) bilan tanishasiz ';
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Нормативные и руководящие документы", callback_data: 'one' }
                    ],
                    [
                        { text: "Подсистема №1. Организационно - методические нормы", callback_data: 'two' }
                    ],
                    [
                        { text: "Подсистема №2. Технические нормы проектирования", callback_data: 'three' }
                    ],
                    [
                        { text: "Подсистема №3. Правила организации и технология строительного производства", callback_data: 'four' }
                    ],
                    [
                        { text: "Подсистема №4. Экономические нормативы", callback_data: 'five' }
                    ],
                    [
                        { text: "Сборники сметных норм на пусконалодочные работы", callback_data: 'six' }
                    ],
                    [
                        { text: "Дополнение к ШНК", callback_data: 'seven' }
                    ]
                ]
            }
        }
    )
}

bot.on("message", async ctx => {
    const msg = ctx.message.text.toLowerCase()

    if (msg.includes(`шнк`)) {
//         ctx.replyWithHTML(`ШНК (SHNQ SHaharsozlik Norma va Qoidalar) bilan tanishing`)
        sendStarMessage(ctx);
    }
    if (msg.includes(`штукатурка`)) {
        ctx.replyWithHTML(`Е15-2-1-1 Улучшенная штукатурка стен.\nЕ15-2-31-1 Штукатурка откосов.\nЕ15-2-36-1 Штукатурка по Сетке стен.\nВнутренний отделка.\nE15-2-31-1 Штукатурка откосов.\nЕ15-2-16-5 Штукатурка высококачественные стен.`)
    }
    if (msg.includes(`травертин`)) {
        ctx.reply(`Е15-2-39-1 Травертин без ресунки, \nЕ15-2-39-2 Травертин с ресунки, `)
    }
    if (msg.includes('кондицанер')) {
        ctx.replyWithHTML(`Е20-6-18-1 Доп.6 Кондицанер раценкаси`)
    }
    if (msg.includes('бордюр')) {
        ctx.reply(`Е27-2-10-1 Установка Бордюр (бортовых камней)`)
    }

    if (msg.includes('ВОДОСТОЧНЫХ ТРУБ')) {
        ctx.replyWithHTML(`Е12-2-8-3 НАВЕСКА ВОДОСТОЧНЫХ ТРУБ.`)
    }
    if (msg.includes('желоб')) {
        ctx.reply(`Е12-1-9-2 УСТРОЙСТВО ЖЕЛОБА.`)
    }
    if (msg.includes('подоконные слив')) {
        ctx.replyWithHTML(`Е12-1-10-1 Устройство мелких покрытий брандмауэры (подоконные слив)`)
    }
    if (msg.includes('доска')) {
        ctx.replyWithHTML(`Е10-1-82-2 Уклад прогонов из досок.\nЕ10-1-82-1 Монтаж прогонов из досок.\nЕ10-1-2-1 Установка Балки, Стоек, Стропил\nЕ10-1-82-2 Уклад прогонов из досок.`)
    }
    if (msg.includes('профнастил')) {
        ctx.reply(`Е12-3-4-1 Установка кровли из ПРОФНАСТИЛ.`)
    }
    if (msg.includes('брусчатка')) {
        ctx.reply(`E11-1-25-1 Брусчатка пешеходные дорожки`)
    }
    if (msg.includes('щебен')) {
        ctx.reply(`Е11-1-2-4 Устройство подстилающих слоёв ЩЕБЕНЬ.`)
    }
    if (msg.includes('кафел')) {
        ctx.replyWithHTML(`Е11-1-27-5 Кафель пол Клей билан.\nЕ11-1-27-3 Кафель пол Раствор билан.\nЕ15-1-19-5 Облицовки стен кафель. (Клей билан)\nЕ15-1-19-1 Облицовки стен кафель. (Раствор билан)\nЕ11-1-39-1 Устройство плинтусов из КАФЕЛЬ`)
    }
    if (msg.includes('италлогранит')) {
        ctx.reply(`Е15-1-26-1 ГЛАДКИЙ ОБЛИЦОВКИ СТЕН ИТАЛЛОГРАНИТ.`)
    }
    if (msg.includes('Лексан')) {
        ctx.replyWithHTML(`Е9-3-22-1 Монтаж Лексан (Козерок)`)
    }
    if (msg.includes('алюпан')) {
        ctx.replyWithHTML(`Е15-1-91-1 Облицовки фасадов АЛЮПАН.\nЕ15-1-92-1 Раскрой АЛЮПАН.`)
    }
    if (msg.includes('подоконник')) {
        ctx.reply(`Е10-1-35-1 Установка подоконник.`)
    }
    if (msg.includes('окон')) {
        ctx.reply(`Е10-1-36-1 Установка Окон. Алюминиевые.\n
        Е10-1-36-2 Установка Окон. Алюминиевые.`)
    }
    if (msg.includes('двер')) {
        ctx.reply(`Е10-1-37-2 Установка дверей. Алюминиевые.\nЕ10-1-37-1 Установка дверей. Алюминиевые./nЕ10-1-39-1 Установка дверей из МДФ.\nЕ9-4-14-3 Установка дверей. Металические.`)
    }
    if (msg.includes('ОТМОСКА')) {
        ctx.replyWithHTML(`Е11-1-2-4 УСТРОЙСТВО ПОДСТИЛАЮЩИХ СЛОЁВ ЩЕБЕНЬ.\n
        Е6-1-1-1 УСТРОЙСТВО БЕТОННЫЕ ПОДГОТОВКА.`)
    }
    if (msg.includes('кирпич')) {
        ctx.replyWithHTML(`Е46-4-1-4 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (ishlatiladi)\nЕ46-4-1-4 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (ishlatilmayd)\nЕ8-2-2-3 Кладка перегородок из кирпича.\nE8-3-2-1 КЛАДКА СТЕН ИЗ ЛЕГКОБЕТОННЫХ КАМНЕЙ БЕЗ ОБЛИЦОВКИ ДО 4 М`)
    }
    if (msg.includes('стяжка')) {
        ctx.reply(`Е11-1-11-5 Устройство стяжки.\nЕ11-1-11-6 Устройство стяжек. 11-1-11-5`)
    }
    if (msg.includes('линолеум')) {
        ctx.reply(`Е11-1-36-1 Устройство покрытия ЛИНОЛЕУМА.\nЕ11-1-40-3 УСТРОЙСТВО ПЛИНТУСОВ ПЛАСТИКОВЫЕ.`)
    }
})
