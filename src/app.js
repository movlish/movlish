require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')

bot.start((ctx) => {
    sendStarMessage(ctx);
})

bot.start((ctx)=> {
    ctx.reply('Salom men Echo bot');
    ctx.reply(helpMessenger)
})

bot.command('contact', ctx => {
    ctx.replyWithHTML(`Biz bilan bog'laning <a href="https://t.me/movlish13">@movlish13</a>`);
})

bot.help(ctx => {
    let text = `<b>Botimiz qaytarishi mumkin bo'lgan komponentlar:</b> \n` + `/start - <code>botni ishga tushirish buyrug'i</code> \n` + `<a href="https://t.me/movlish13">/contact </a>- Biz bilan bog'laning \n` + `/help - yordamchi buyruq \n` + `<pre>Iltimos so'zlarni kirilchada yozing (asosan ruscha)</pre>Masalan: <code> шнк, штукатурка, двер ...</code>`

    ctx.replyWithHTML(text).then()
})

function sendStarMessage(ctx) {
    
//     ctx.deleteMessage();

//     let startMessage = 'Xush kelibsiz aziz mehmon siz bu yerda ШНК (SHNQ Shaharsozlik Norma va Qoidalari) bilan tanishasiz ';
//     bot.telegram.sendMessage(ctx.chat.id, startMessage,
    ctx.replyWithHTML((`<B>O'ZBEKISTON RESPUBLIKASI QURILISH VAZIRLIGI </B>\n (<b>ШНК</b> - SHaharsozlik Norma va Qoidalar)\n(<b>КМК</b> - Qurilish Me'yorlari va Qoidalari)\n<a href="https://mc.uz/gradostroitelnye-normy/">Shaharsozlik normalari</a> bilan tanishing`),
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
//         ctx.replyWithHTML(`<B>O'ZBEKISTON RESPUBLIKASI QURILISH VAZIRLIGI </B>\n (<b>ШНК</b> - SHaharsozlik Norma va Qoidalar)\n(<b>КМК</b> - Qurilish Me'yorlari va Qoidalari) bilan tanishing`)
        return sendStarMessage(ctx);
    }
    else if (msg.includes(`shnq`)) {
        return sendStarMessage(ctx);
    }
    else if (msg.includes(`shnk`)) {
        return sendStarMessage(ctx);
    }
    else if (msg.includes(`qmq`)) {
        return sendStarMessage(ctx);
    }
    else if (msg.includes(`кмк`)) {
//         ctx.replyWithHTML(`<B>O'ZBEKISTON RESPUBLIKASI QURILISH VAZIRLIGI </B>\n (<b>ШНК</b> - SHaharsozlik Norma va Qoidalar)\n(<b>КМК</b> - Qurilish Me'yorlari va Qoidalari) bilan tanishing`)
        return sendStarMessage(ctx);
    }
    else if (msg.includes(`арестон`)) {
        return ctx.reply(`Е18-2-3-(1-4) Установка Водоподогревателей (Арестон)`)
    }
    else if (msg.includes(`тяга`)) {
        return ctx.reply(`Е15-3-1-(1-4) УСТАНОВКА ГИПСОВЫХ ТЯГА`)
    }
    else if (msg.includes(`козерок`)) {
        return ctx.reply(`Е95-3-14-1(1-4) УСТРОЙСТВО МЕТАЛЛОКОНСТРУКЦИЙ КОЗЫРЬКА ИЗ УГОЛКА\nE9-4-2-1 ПОКРЫТИЕ КОЗЫРЬКА ПРОФНАСТИЛОМ\nE15-4-30-4 МАСЛЯНАЯ ОКРАСКА ЗА 2 РАЗА МЕТАЛЛОКОНСТРУКЦИЙ КОЗЫРЬКА\nE9-3-13-1 Установка готовый Козерок`)
    }
    else if (msg.includes(`штукатурка`)) {
        return ctx.reply(`Е15-2-19-7(1-10) СПЛОШНОЕ ВЫРАВНИВАНИЕ ПОВЕРХНОСТЕЙ (ОДНОСЛОЙНАЯ ШТУКАТУРКА) ГИПСОВЫМИ СУХИМИ СМЕСЯМИ(Ротбанд)\nЕ61 ШТУКАТУРНЫЕ РАБОТЫ\nЕ15-2-1-1 Улучшенная штукатурка стен.\nЕ15-2-31-1 Штукатурка откосов.\nЕ15-2-36-1 Штукатурка по Сетке стен.\nВнутренний отделка.\nE15-2-31-1 Штукатурка откосов.\nЕ15-2-16-5 Штукатурка высококачественные стен.\nE46-2-9-2	ОТБИВКА ШТУКАТУРКИ С ПОВЕРХНОСТЕЙ СТЕН И ПОТОЛКОВ КИРПИЧНЫХ`)
    }
    else if (msg.includes(`травертин`)) {
        return ctx.reply(`Е15-2-39-1 Травертин жидкий без ресунки, \nЕ15-2-39-2 Травертин жидкий с ресунки\nЕ15-1-2-(11-15) Травертин Плиты\nЕ15-1-4-(17-24) травертин Плиты\nЕ15-1-9-(4-6) травертин Плиты`)
    }
    else if (msg.includes('кондиционер')) {
        return ctx.replyWithHTML(`<a href="https://mc.uz/wp-content/up/VW/5JomlzNzxya9AweZoFvYwSxsRw9J6P.rar">ШНК 4.02.20-07 СКАЧАТЬ</a> ШНК\nЕ20-6 КОНДИЦИОНЕРЫ\nЕ20-6-18-1 Доп.6 Кондицанер раценкаси\nДемотаж Кондиционеров в) ички санитар-техник қурилмаларни (водопровод, канализация, водосток-лар, отопления, вентиляция) – 0,4;\nв) то же, внутренних санитарно-технических устройств (водопровода, газопровода, канализации, водостоков, отопления, вентиляции) - 0,4`)
    }
    else if (msg.includes('бордюр')) {
        return ctx.reply(`Е27-2-10-1 Установка Бордюр (бортовых камней)\nЕ68-014-01 РАЗБОРКА БОРТОВЫХ КАМНЕЙ: НА БЕТОННОМ ОСНОВАНИИ\nЕ1504-011-01	ОКРАСКА ФАСАДОВ С ЛЕСОВ С ПОДГОТОВКОЙ ПОВЕРХНОСТИ ИЗВЕСТКОВАЯ (БОРДЮРЫ)`)
    }
    else if (msg.includes('ВОДОСТОЧНЫХ ТРУБ')) {
        return ctx.reply(`Е12-2-8-3 НАВЕСКА ВОДОСТОЧНЫХ ТРУБ.\nE58-15 ПЕРЕНАВЕСКА ВОДОСТОЧНЫХ ТРУБ\nE58-3 РАЗБОРКА МЕЛКИХ ПОКРЫТИЙ\nE58-10 СМЕНА ЧАСТЕЙ ВОДОСТОЧНЫХ ТРУБ`)
    }
    else if (msg.includes('желоб')) {
        ctx.reply(`Е12-1-9-2 УСТРОЙСТВО ЖЕЛОБА\nE58-3 РАЗБОРКА МЕЛКИХ ПОКРЫТИЙ\nE58-19-5СМЕНА МЕЛКИХ ПОКРЫТИЙ ИЗ ЛИСТОВОЙ СТАЛИ:ЖЕЛОБОВ\nШНК 4.02.70-05<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar"> Скачать</a>`)
    }
    else if (msg.includes('маслян')) {
        return ctx.reply(`Е15-4-25-8 УЛУЧШЕННАЯ ОКРАСКА МАСЛЯНЫМИ СОСТАВАМИ ПО ШТУКАТУРКЕ СТЕН(Цокол)\nЕ13-6-3-1 ОЧИСТКА ПОВЕРХНОСТИ ЩЕТКАМИ\nЕ62-7-4(1-6) УЛУЧШЕННАЯ МАСЛЯНАЯ ОКРАСКА РАНЕЕ ОКРАШЕННЫХ СТЕН`)
    }
    else if (msg.includes('разборка шкаф')) {
        return ctx.reply(`Е55-1-3 РАЗБОРКА ВСТРОЕННОГО ШКАФА`)
    }
    else if (msg.includes('разборка ВЕНТИЛЯЦ')) {
        return ctx.reply(`Е65-30-3 РАЗБОРКА ВЕНТИЛЯЦИОННЫХ КОРОБОВ`)
    }
    else if (msg.includes('подоконные слив')) {
        return ctx.reply(`Е12-1-10-1 Устройство мелких покрытий брандмауэры (подоконные слив)`)
    }
    else if (msg.includes('доск')) {
        return ctx.reply(`ШНК 4.02.70-05<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar"> Скачать</a>\nE10 Деревянный конструкции\nЕ10-1-82-2 Уклад прогонов из досок.\nЕ10-1-82-1 Монтаж прогонов из досок.\nЕ10-1-2-1 Установка Балки, Стоек, Стропил\nЕ10-1-82-2 Уклад прогонов из досок.\nE11-1-45 УСТРОЙСТВО ПАЛУБНЫХ ПОЛОВ\nE58 Крыши, Кровли\nE58-12 УСТРОЙСТВО ОБРЕШЕТКИ\nE58-5 РЕМОНТ ДЕРЕВЯННЫХ ЭЛЕМЕНТОВ КОНСТ\nE58-1 РАЗБОРКА\nE58-2 РАЗБОРКА СЛУХОВЫХ ОКОН\nE58-4 РАЗБОРКА ПАРАПЕТНЫХ РЕШЕТОК`)
    }
    else if (msg.includes('профнастил')) {
        return ctx.reply(`Е12-3-4-1 Установка кровли из ПРОФНАСТИЛ.`)
    }
    else if (msg.includes('брусчатк')) {
        return ctx.reply(`E11-1-25-1 Брусчатка пешеходные дорожки\nЕ2705-002-01 УСТРОЙСТВО БРУСЧАТЫХ БРУСЧАТКИ 10 СМ\nЕ68-061-01 ДОП. 5 РАЗБОРКА ТРОТУАРОВ И ДОРОЖЕК ИЗ ПЛИТ С ИХ ОТНОСКОЙ И УКЛАДКОЙ`)
    }
    else if (msg.includes('щебен')) {
        return ctx.reply(`Е11-1-2-4 Устройство подстилающих слоёв ЩЕБЕНЬ.`)
    }
    else if (msg.includes('кафел')) {
        return ctx.reply(`Е11-1-27-5 Кафель пол Клей билан.\nЕ11-1-27-3 Кафель пол Раствор билан.\nЕ15-1-19-5 Облицовки стен кафель. (Клей билан)\nЕ15-1-19-1 Облицовки стен кафель. (Раствор билан)\nЕ11-1-39-1 Устройство плинтусов из КАФЕЛЬ\nE63-7-2	РАЗБОРКА ОБЛИЦОВКИ СТЕН ИЗ ПЛИТ И ПЛИТОК: ГРАНИТНЫХ`)
    }
    else if (msg.includes('италлогранит')) {
        return ctx.reply(`Е15-1-26-1 ГЛАДКИЙ ОБЛИЦОВКИ СТЕН ИТАЛЛОГРАНИТ.\nE63-7-2	РАЗБОРКА ОБЛИЦОВКИ СТЕН ИЗ ПЛИТ И ПЛИТОК: ГРАНИТНЫХ`)
    }
    else if (msg.includes('лексан')) {
        return ctx.reply(`Е9-3-22-1 Монтаж Лексан (Козерок)`)
    }
    else if (msg.includes('алюпан')) {
        return ctx.reply(`Е15-1-91-1 Облицовки фасадов АЛЮПАН.\nЕ15-1-92-1 Раскрой АЛЮПАН.\nE15-1-91-4 #ОЧ-3.4-д#К=0,6 ШHК.ДОП.9 ДЕМОНТАЖ ОБЛИЦОВКА ФАСАДА ДЕКОРАТИВНЫМИ ПАНЕЛЯМИ ТИПА «АЛЮКАБОНД»: ПО ГОТОВОМУ КАРКАСУ ДEМОHTАЖ`)
    }
    else if (msg.includes('подоконник')) {
        return ctx.reply(`Е10-1-35-1 Установка подоконник.\nE56-3-2 СНЯТИЕ ПОДОКОННЫХ ДОСОК: ПЛАСТИКОВОГО`)
    }
    else if (msg.includes('окон')) {
        return ctx.reply(`Е10-1-36-1 Установка Окон. Алюминиевые.\nЕ10-1-36-2 Установка Окон. Алюминиевые.\nE56-2-2	СНЯТИЕ ОКОННЫХ ПЕРЕПЛЕТОВ: ОСТЕКЛЕННЫХ        `)
    }
    else if (msg.includes('двер')) {
        return ctx.reply(`Е10-1-37-2 Установка дверей. Алюминиевые.\nЕ10-1-37-1 Установка дверей. Алюминиевые.\nЕ10-1-39-1 Установка дверей из МДФ.\nЕ9-4-14-3 Установка дверей. Металические.\nE56-9-5 ШHК.ДОП.5	ДЕМОНТАЖ ДВЕРНЫХ КОРОБОК В КАМЕННЫХ СТЕНАХ: С ОТБИВКОЙ ШТУКАТУРКИ В ОТКОСАХ\nE56-10-1	СНЯТИЕ ДВЕРНЫХ ПОЛОТЕН`)
    }
    else if (msg.includes('ОТМОСК')) {
        return ctx.reply(`Е11-1-2-4 УСТРОЙСТВО ПОДСТИЛАЮЩИХ СЛОЁВ ЩЕБЕНЬ.\nЕ6-1-1-1 УСТРОЙСТВО БЕТОННЫЕ ПОДГОТОВКА.`)
    }
    else if (msg.includes('кирпич')) {
        return ctx.reply(`Е08 КОНСТРУКЦИЯ ИЗ КИРПИЧА И БЛОК\nЕ46-4-1-4 РАЗБОРКА СТЕН КИРПИЧНЫХ (bu rasenkada g'ishtdan foydalanib bo'lmaydi yani musurga chiqib ketadi)\nЕ53-2-1 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (bu rasenkada g'ishtdan foydalansa bo'ladi)\nЕ8-2-2-3 Кладка перегородок из кирпича.\nE8-3-2-1 КЛАДКА СТЕН ИЗ ЛЕГКОБЕТОННЫХ КАМНЕЙ БЕЗ ОБЛИЦОВКИ ДО 4 М\nE55-8-2 ШHК.ДОП.5	РАЗБОРКА КИРПИЧНЫХ ПЕРЕГОРОДОК НА ОТДЕЛЬНЫЕ КИРПИЧИ\nE53-2-6 ШHК.ДОП.5	РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА`)
    }
    else if (msg.includes('стяжк')) {
        return ctx.reply(`Е11-1-11-5 Устройство стяжки.\nЕ11-1-11-6 Устройство стяжек.11-1-11-5`)
    }
    else if (msg.includes('линолеум')) {
        return ctx.reply(`Е11-1-36-1 Устройство покрытия ЛИНОЛЕУМА.\nЕ11-1-40-3 УСТРОЙСТВО ПЛИНТУСОВ ПЛАСТИКОВЫЕ.`)
    }
    else if (msg.includes('земляные работ')) {
        return ctx.reply(`Е01 ЗЕМЛЯНЫЕ РАБОТ\nЕ51 ЗЕМЛЯНЫЕ РАБОТ\nE1-2-58-2 КОПАНИЕ ЯМ ВРУЧНУЮ БЕЗ КРЕПЛЕНИЙ ДЛЯ СТОЕК И СТОЛБОВ БЕЗ ОТКОСОВ ГЛУБИНОЙ ДО 0,7 М ГРУППА ГРУНТОВ 2\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nE1-2-5-1	УПЛОТНЕНИЕ ГРУНТА ПНЕВМАТИЧЕСКИМИ ТРАМБОВКАМИ, ГРУППА ГРУНТОВ 1, 2\nE1-1-18-5 ШHК.ДОП.3	РАЗРАБОТКА ГРУНТА С ПОГРУЗКОЙ НА АВТОМОБИЛИ-САМОСВАЛЫ В КОТЛОВАНАХ ОБЪЕМОМ ДО 500 М3, ЭКСКАВАТОРАМИ С КОВШОМ ВМЕСТИМОСТЬЮ 0,25 М3, ГРУППА ГРУНТОВ: 2\nE1-1-31-2	РАЗРАБОТКА ГРУНТА С ПЕРЕМЕЩЕНИЕМ ДО 10 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 96 [130] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-1-31-10 К=4	ПРИ ПЕРЕМЕЩЕНИИ ГРУНТА НА КАЖДЫЕ ПОСЛЕДУЮЩИЕ 10 М ДОБАВЛЯТЬ К НОРМЕ 01-01-031-2\nE1-2-55-2	РАЗРАБОТКА ГРУНТА ВРУЧНУЮ С КРЕПЛЕНИЯМИ В ТРАНШЕЯХ ШИРИНОЙ ДО 2 М, ГЛУБИНОЙ ДО 2 М, ГРУППА ГРУНТОВ 2\nE1-1-33-2	ЗАСЫПКА ТРАНШЕЙ И КОТЛОВАНОВ С ПЕРЕМЕЩЕНИЕМ ГРУНТА ДО 5 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 59 [80] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nС310-1030	ПЕРЕВОЗКА ГРУЗОВ АВТОМОБИЛЕМ НА 30 КМ, КЛАСС ГРУЗА 1`)
    }
    else if (msg.includes('yer ishlari')) {
        return ctx.reply(`Е01 ЗЕМЛЯНЫЕ РАБОТ\nЕ51 ЗЕМЛЯНЫЕ РАБОТ\nE1-2-58-2 КОПАНИЕ ЯМ ВРУЧНУЮ БЕЗ КРЕПЛЕНИЙ ДЛЯ СТОЕК И СТОЛБОВ БЕЗ ОТКОСОВ ГЛУБИНОЙ ДО 0,7 М ГРУППА ГРУНТОВ 2\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nE1-2-5-1	УПЛОТНЕНИЕ ГРУНТА ПНЕВМАТИЧЕСКИМИ ТРАМБОВКАМИ, ГРУППА ГРУНТОВ 1, 2\nE1-1-18-5 ШHК.ДОП.3	РАЗРАБОТКА ГРУНТА С ПОГРУЗКОЙ НА АВТОМОБИЛИ-САМОСВАЛЫ В КОТЛОВАНАХ ОБЪЕМОМ ДО 500 М3, ЭКСКАВАТОРАМИ С КОВШОМ ВМЕСТИМОСТЬЮ 0,25 М3, ГРУППА ГРУНТОВ: 2\nE1-1-31-2	РАЗРАБОТКА ГРУНТА С ПЕРЕМЕЩЕНИЕМ ДО 10 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 96 [130] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-1-31-10 К=4	ПРИ ПЕРЕМЕЩЕНИИ ГРУНТА НА КАЖДЫЕ ПОСЛЕДУЮЩИЕ 10 М ДОБАВЛЯТЬ К НОРМЕ 01-01-031-2\nE1-2-55-2	РАЗРАБОТКА ГРУНТА ВРУЧНУЮ С КРЕПЛЕНИЯМИ В ТРАНШЕЯХ ШИРИНОЙ ДО 2 М, ГЛУБИНОЙ ДО 2 М, ГРУППА ГРУНТОВ 2\nE1-1-33-2	ЗАСЫПКА ТРАНШЕЙ И КОТЛОВАНОВ С ПЕРЕМЕЩЕНИЕМ ГРУНТА ДО 5 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 59 [80] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nС310-1030	ПЕРЕВОЗКА ГРУЗОВ АВТОМОБИЛЕМ НА 30 КМ, КЛАСС ГРУЗА 1`)
    }
    else if (msg.includes('фундамент')) {
        return ctx.reply(`Е52 ФУНДАМЕНТЫ\nE8-1-2-3 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ГРАВИЙНОГО /T.70ММ\nE8-1-2-1 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ПЕСЧАНОГО /T.30ММ\nE26-1-55-2 К=2	ГИДРОИЗОЛЯЦИЯ П/Э ПЛЕНКОЙ В 2 СЛОЯ ЗА 2 PАЗА\nE6-1-1-13	УСТРОЙСТВО ФУНДАМЕНТОВ-СТОЛБОВ БЕТОННЫХ ИЗ БETОHА КЛ.В15 HА С/С ЦEМEHTE\nE12-2-2-2	УСТРОЙСТВО ГИДРОИЗОЛЯЦИЙ ВЕРТИКАЛЬНЫХ ПОВЕРХНОСТЕЙ. ОБМАЗОЧНАЯ БИТУМНАЯ В ОДИН СЛОЙ ПО ВЫРОВНЕННОЙ ПОВЕРХНОСТИ КИРПИЧА И БЕТОНА /В 2 СЛОЯ/\nE12-2-2-3	ДОБАВЛЯЕТСЯ 1 СЛОЙ ДО 2-Х СЛОЕВ\nE6-1-15-7	УСТАНОВКА ЗАКЛАДНЫХ ДЕТАЛЕЙ ВЕСОМ ДО 4 КГ /ЗД-1-11ШT/\nE6-1-1-1	УСТРОЙСТВО БЕТОННОЙ ПОДГОТОВКИ\nE6-1-1-16	УСТРОЙСТВО ФУНДАМЕНТНЫХ ПЛИТ ЖЕЛЕЗОБЕТОННЫХ ПЛОСКИХ\nE6-2-11-2 ШHК.ДОП.7	ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ (С124-25-2	ГОРЯЧЕКАТАННАЯ АРМАТУРНАЯ СТАЛЬ КЛАССА А-III ДИАМ. 22 ММ)\nE6-1-1-5	УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ФУНДАМЕНТОВ ОБЩЕГО НАЗНАЧЕНИЯ ПОД КОЛОННЫ ОБЪЕМОМ ДО 3 М3\nE6-1-24-4	УСТРОЙСТВО СТЕН ПОДВАЛОВ И ПОДПОРНЫХ СТЕН ЖЕЛЕЗОБЕТОННЫХ ВЫСОТОЙ ДО 3 М, ТОЛЩИНОЙ ДО 500 ММ\nE6-1-1-22	УСТРОЙСТВО ЛЕНТОЧНЫХ ФУНДАМЕНТОВ ЖЕЛЕЗОБЕТОННЫХ ПРИ ШИРИНЕ ПОВЕРХУ ДО 1000 ММ\n`)
    }
    else if (msg.includes('fundament')) {
        return ctx.reply(`Е52 ФУНДАМЕНТЫ\nE8-1-2-3	УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ГРАВИЙНОГО /T.70ММ\nE8-1-2-1 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ПЕСЧАНОГО /T.30ММ\nE26-1-55-2 К=2	ГИДРОИЗОЛЯЦИЯ П/Э ПЛЕНКОЙ В 2 СЛОЯ ЗА 2 PАЗА\nE6-1-1-13	УСТРОЙСТВО ФУНДАМЕНТОВ-СТОЛБОВ БЕТОННЫХ ИЗ БETОHА КЛ.В15 HА С/С ЦEМEHTE\nE12-2-2-2	УСТРОЙСТВО ГИДРОИЗОЛЯЦИЙ ВЕРТИКАЛЬНЫХ ПОВЕРХНОСТЕЙ. ОБМАЗОЧНАЯ БИТУМНАЯ В ОДИН СЛОЙ ПО ВЫРОВНЕННОЙ ПОВЕРХНОСТИ КИРПИЧА И БЕТОНА /В 2 СЛОЯ/\nE12-2-2-3	ДОБАВЛЯЕТСЯ 1 СЛОЙ ДО 2-Х СЛОЕВ\nE6-1-15-7	УСТАНОВКА ЗАКЛАДНЫХ ДЕТАЛЕЙ ВЕСОМ ДО 4 КГ /ЗД-1-11ШT/\nE6-1-1-1	УСТРОЙСТВО БЕТОННОЙ ПОДГОТОВКИ\nE6-1-1-16	УСТРОЙСТВО ФУНДАМЕНТНЫХ ПЛИТ ЖЕЛЕЗОБЕТОННЫХ ПЛОСКИХ\nE6-2-11-2 ШHК.ДОП.7	ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ (С124-25-2	ГОРЯЧЕКАТАННАЯ АРМАТУРНАЯ СТАЛЬ КЛАССА А-III ДИАМ. 22 ММ)\nE6-1-1-5	УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ФУНДАМЕНТОВ ОБЩЕГО НАЗНАЧЕНИЯ ПОД КОЛОННЫ ОБЪЕМОМ ДО 3 М3\nE6-1-24-4	УСТРОЙСТВО СТЕН ПОДВАЛОВ И ПОДПОРНЫХ СТЕН ЖЕЛЕЗОБЕТОННЫХ ВЫСОТОЙ ДО 3 М, ТОЛЩИНОЙ ДО 500 ММ\nE6-1-1-22	УСТРОЙСТВО ЛЕНТОЧНЫХ ФУНДАМЕНТОВ ЖЕЛЕЗОБЕТОННЫХ ПРИ ШИРИНЕ ПОВЕРХУ ДО 1000 ММ\ `)
    }
    else if (msg.includes('приямк')) {
        return ctx.reply(`E6-1-1-22 УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ПРИЯМОК\nE6-2-11-2 ШHК.ДОП.7 ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ`)
    }
    else if (msg.includes('радиатор')) {
        return ctx.replyWithHTML('E18-3-1-2 УСТАНОВКА РАДИАТОРОВ <u>АЛЮМИНИЕВЫХ</u> и <u>СТАЛЬНЫХ</u>\nЕ65-19-1 демонтаж радиаторов\n'+'<b>Коэффициент расчета м2=квт</b>\n'+'<u>При высоте потолка 3м = 1.05\nПри высоте потолка 3.5 м = 1.1\nПри высоте потолка 4м = 1.15\nПри высоте потолка 4.5м = 1.2</u>\n'+'<b>Соответственно расчет по коэффициенту!!!\n</b>'+'Исходя из этого если комната 10м2 с высотой потолка 3м То необходимые кВт для обогрева комнаты необходимо 10.5\n'+'<b>Дальше простая арифметика</b>\n<i>Среднее значение теплоотдачи одной секции биметаллического радиатора составляет от 170 до 210 Вт. Что соответственно 0.17-0.21 кВт!</i>')
    }
    else if (msg.includes('гипсокартон')) {
        return ctx.reply(`E15-7-16-1 ШHК.ДОП.4	ОБШИВКА ОТКОСОВ ГИПСОКАРТОНОМ\nE15-7-18-3 ШHК.ДОП.9	ОБЛИЦОВКА СТЕН "КНАУФ" ГИПСОКАРТОННЫМИ ЛИСТАМИ\nE15-1-52-1 ШHК.ДОП.1 УСТРОЙСТВО ПОДВЕСНОГО ПОТОЛКА ГИПСОКАРТОННЫМИ ПЛИТАМИ КНАУФ ПО МЕТАЛЛИЧЕСКИМ НЕСУЩИМ КОНСТРУКЦИЯМ, ПРОСТОЙ СЛОЖНОСТИ\nE63-10-1	РАЗБОРКА ОБЛИЦОВКИ ИЗ ГИПСОКАРТОННЫХ ЛИСТОВ: СТЕН И ПЕРЕГОРОДОК\nE63-10-2 РАЗБОРКА ОБЛИЦОВКИ ИЗ ГИПСОКАРТОННЫХ ЛИСТОВ: ПОТОЛКОВ`)
    }
    else if (msg.includes('армстронг')) {
        return ctx.reply(`E15-1-47-15 ШHК.ДОП.4 УСТРОЙСТВО ПОДВЕСНЫХ ПОТОЛКОВ ТИПА "АРМСТРОНГ" ПО КАРКАСУ ИЗ ОЦИНКОВАННОГО ПРОФИЛЯ\nE54-3-4 ШHК.ДОП.8 РАЗБОРКА ПОДШИВКИ ПОТОЛКОВ ИЗ АРМСТРОНГ`)
    }
    else if (msg.includes('пластик')) {
        return ctx.reply(`E15-7-17-4 ШHК.ДОП.4	ОБЛИЦОВКА КАРКАСОВ ПАНЕЛЯМИ ДЕКОРАТИВНЫМИ ПЛАСТИКОВЫМИ С УСТРОЙСТВОМ КАРКАСА БЕЗ ОТНОСА ОТ ПОТОЛКА\n`)
    }
    else if (msg.includes('сердечник')) {
        return ctx.reply(`Е0601-035-01	УСТРОЙСТВО СЕРДЕЧНИКОВ`)
    }
    else if (msg.includes('сесмапояс')) {
        return ctx.replyWithHTML(`ШНК 4.02.70-05<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar"> Скачать</a>\nЕ0601-035-01 УСТРОЙСТВО СЕЙСМАПОЯС, УСТРОЙСТВО ПОЯСОВ`)
    }
    else if (msg.includes('обой')) {
        return ctx.reply(`Е15-6-... ОБОЙНЫЕ РАБОТА\nЕ63-5-1 СНЯТИЕ ОБОЕВ\nЕ63-6-1 СМЕНА ОБОЕВ`)
    }
    else if (msg.includes('oboy')) {
        return ctx.reply(`Е15-6-... ОБОЙНЫЕ РАБОТА\nЕ63-5-1 СНЯТИЕ ОБОЕВ\nЕ63-6-1 СМЕНА ОБОЕВ`)
    }
    else if (msg.includes('асфальт')) {
        return ctx.replyWithHTML(`Е11-1-19 УСТРОЙСТВО ПОКРЫТИЙ АСФАЛЬТОБЕТОННЫХ\nЕ27 АВТОМОБИЛЬНЫЕ ДОРОГИ\Е2704-001-04 УСТРОЙСТВО ПОДСТИЛАЮЩИХ И ВЫРАВНИВАЮЩИХ СЛОЕВ ЩЕБНЯ\nЕ2706-020-01 УСТРОЙСТВО ПОКРЫТИЯ ТОЛЩИНОЙ 4 СМ ИЗ ГОРЯЧИХ АСФАЛЬТОБЕТОННЫХ СМЕСЕЙ(ТОЛЩИНОЙ 7 СМ)\nЕ2706-021-01 К=6	ПРИ ИЗМЕНЕНИИ ТОЛЩИНЫ ПОКРЫТИЯ НА 0,5 СМ ДОБАВЛЯТЬ К НОРМЕ 27-06-020-1`)
    }
    else if (msg.includes('671')) {
        return ctx.replyWithHTML(`<b><u>671-modda.</u>Loyiha-smeta hujjatlariga o‘zgartishlar kiritish</b>\n`+`Agar texnik hujjatlarga o‘zgartishlar kiritish tufayli bajarilishi kerak bo‘ladigan qo‘shimcha ishlar qiymati jihatidan smetada ko‘rsatilgan qurilish umumiy qiymatining o‘n foizidan oshib ketmasa va qurilish pudrati shartnomasida nazarda tutilgan ishlarning xususiyatini o‘zgartirmasa, buyurtmachi texnik hujjatlarga o‘zgartishlar kiritishga haqli.\n`+`Texnik hujjatlarga ushbu moddaning birinchi qismida ko‘rsatilganiga nisbatan kattaroq hajmda o‘zgartishlar kiritish taraflar kelishgan qo‘shimcha smeta asosida amalga oshiriladi.\n`+`Agar ishning qiymati pudratchiga bog‘liq bo‘lmagan sabablarga ko‘ra smetadan kamida o‘n foiz oshgan bo‘lsa, pudratchi ushbu Kodeksning <u>382-moddasiga</u> muvofiq smetani qayta ko‘rib chiqishni talab qilishga haqli.\n`+`Pudratchi loyiha-smeta hujjatlaridagi kamchiliklarni aniqlash va yo‘qotish bilan bog‘liq oqilona xarajatlarni qoplashni talab qilishga haqli.\n`+`<b>LexUZ sharhi</b>\n`+`Qo‘shimcha ma’lumot uchun qarang: O‘zbekiston Respublikasi Oliy xo‘jalik sudi Plenumining 2016-yil 23-dekabrdagi 306-son “Iqtisodiy sudlar tomonidan qurilish pudrati shartnomasidan kelib chiqadigan nizolarni hal etishda qonun hujjatlarini qo‘llashning ayrim masalalari to‘g‘risida”gi qarorining 6.1-bandi, 6.5-bandi, 7-bandining uchinchi xatboshisi.`)
    }
    else if (msg.includes('382')) {
        return ctx.replyWithHTML(`<b>28-BOB  ShARTNOMANI O‘ZGARTIRISh VA BEKOR QILISh</>\n<b><u>382-modda.</u> Shartnomani o‘zgartirish va bekor qilish asoslari</b>\nAgar ushbu Kodeksda, boshqa qonunlarda yoki shartnomada boshqacha tartib nazarda tutilgan bo‘lmasa, shartnoma taraflarning kelishuviga muvofiq o‘zgartirilishi va bekor qilinishi mumkin.\nTaraflardan birining talabi bilan shartnoma sud tomonidan faqat quyidagi hollarda o‘zgartirilishi yoki bekor qilinishi mumkin:\n1) ikkinchi taraf shartnomani jiddiy ravishda buzsa;\n2) ushbu Kodeks, boshqa qonunlar va shartnomada nazarda tutilgan o‘zga hollarda.\nTaraflardan birining shartnomani buzishi ikkinchi tarafga u shartnoma tuzishda umid qilishga haqli bo‘lgan narsadan ko‘p darajada mahrum bo‘ladigan qilib zarar yetkazishi shartnomani jiddiy buzish hisoblanadi.\nBir taraf shartnomani bajarishdan to‘la yoki qisman bosh tortib, qonun yohud taraflarning kelishuvida bunga yo‘l qo‘yilsa, shartnoma tegishlicha bekor qilingan yoki o‘zgartirilgan hisoblanadi.\n<b>LexUZ sharhi</b>\n<b>Qarang:</b> mazkur Kodeksning 353, 354, 357, 364, 367, 370, 377, 383 — 385-moddalari, O‘zbekiston Respublikasining 29.08.1998-yildagi “Xo‘jalik yurituvchi subyektlar faoliyatining shartnomaviy-huquqiy bazasi to‘g‘risida”gi Qonunining 2, 10 — 16-moddalari.\n<b>Qo‘shimcha ma’lumot uchun qarang:</b> Oliy sudi Plenumining 02.05.1997-yildagi “Xususiylashtirilgan turar joylarga egalik qilish, ulardan foydalanish va ularni tasarruf qilish bilan bog‘liq ishlar bo‘yicha sud amaliyoti haqida”gi 3-son qarorining 9-bandi, Oliy xo‘jalik sudi Plenumining 18.12.2009-yildagi “Xo‘jalik shartnomalarini tuzish, o‘zgartirish va bekor qilishni tartibga soluvchi fuqarolik qonun hujjatlari normalarini qo‘llashning ayrim masalalari to‘g‘risida”gi qarori 18-bandining uchinchi — oltinchi xatboshilari, 25, 26-bandlari.`)
    }
    else if (msg.includes('302')) {
        return ctx.replyLWithHTML(`<b><u>302-modda.</u> Kafolatning chaqirib olinmasligi</b>\nAgar kafolatda boshqacha tartib nazarda tutilgan bo‘lmasa, u kafil tomonidan chaqirib olinishi mumkin emas.\n<b>LexUZ sharhi</b>\n<b>Qarang:</b> mazkur Kodeksning 259, 299 — 301, 303 — 310-moddalari.\nQo‘shimcha ma’lumot uchun qarang: O‘zbekiston Respublikasi Oliy sudi va Oliy xo‘jalik sudi Plenumining 22.12.2006-yildagi “Kredit shartnomalaridan kelib chiqadigan majburiyatlar bajarilishini ta’minlash to‘g‘risidagi fuqarolik qonun hujjatlarini qo‘llashning ayrim masalalari haqida”gi 13/150-son qarorining 40-bandi.`)
    }
    else if (msg.includes('306')) {
        return ctx.replyWithHTML(`<b><u>306-modda.</u> Benefitsiarning talabini ko‘rib chiqishda kafilning majburiyatlari</b>\nKafil benefitsiarning talabini olganidan so‘ng bu haqda darhol prinsipalni xabardor qilishi va unga talabning nusxasini barcha tegishli hujjatlar bilan topshirishi kerak.\nKafil benefitsiarning talabini unga ilova qilingan hujjatlar bilan birga kafolatda ko‘rsatilgan muddatda ko‘rib chiqishi, muddat ko‘rsatilmaganda esa — mutanosib muddatda bu talab hamda unga ilova qilingan hujjatlar kafolat shartlariga mos kelishi yoki kelmasligini aniqlash uchun oqilona jonkuyarlik ko‘rsatishi kerak.\n<b>LexUZ sharhi</b>\n<b>Qarang:</b> mazkur Kodeksning 234, 235, 237, 241, 259, 299 — 305, 307 — 310-moddalari.`)
    }
    else if (msg.includes('321')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/32?single">Скачать </a>321-сон қарори`)
    }
    else if (msg.includes('акт скр')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/48">Скачать</a> АКТ Скрытых Работ\n<a href="https://t.me/shnkuz/49">Скачать</a> Образец АКТ Скрытых Работ\n<a href="https://t.me/shnkuz/50">Скачать</a> Яширин ишлар далолатномаси`)
    }
    else if (msg.includes('актскр')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/48">Скачать</a> АКТ Скрытых Работ\n<a href="https://t.me/shnkuz/49">Скачать</a> Образец АКТ Скрытых Работ\n<a href="https://t.me/shnkuz/50">Скачать</a> Яширин ишлар далолатномаси`)
    }
    else if (msg.includes('ВОДОЭМУЛ')) {
        return ctx.replyWithHTML(`Е62-16-(1-9) ОКРАШИВАНИЕ ПОВЕРХНОСТЕЙ СТЕН ВОДОЭМУЛЬСИОННЫМИ СОСТАВАМИ\nЕ62-17-(1-9)ОКРАШИВАНИЕ ПОВЕРХНОСТЕЙ ПОТОЛКОВ ВОДОЭМУЛЬСИОННЫМИ СОСТАВАМИ`)
    }
    else if (msg.includes('Иш Х')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/82">Скачать</a> Ish Haqi 2021\n<a href="https://t.me/shnkuz/80">Скачать</a> Ish haqi 2021 1-kvartal\n<a href="https://t.me/shnkuz/81">Скачать</a>Ish haqi 2021 2-kvartal`)
    }
    else if (msg.includes('м-29')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/43">Скачать</a> М-29\n<a href="https://t.me/shnkuz/42">Скачать</a> М-29\n<a href="https://t.me/shnkuz/40">Скачать mini</a> М-29\n<a href="https://t.me/shnkuz/41">Скачать Образец</a> М-29`)
    }
    else if (msg.includes('поле')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/47">Скачать Образец</a> МИНИФУТБОЛЬНОЕ ПОЛЕ,  БАСКЕТБОЛЬНОЕ ПОЛЕ`)
    }
    else if (msg.includes('qaror')) {
        return ctx.replyWithHTML(`<b>ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ ФУҚАРОЛИК КОДЕКСИ</b><a href="https://lex.uz/docs/111189">\nLex.UZ сайтига Ўтиш</a> Биринчи қисм\n<b>ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ ФУҚАРОЛИК КОДЕКСИ</b><a href="https://lex.uz/docs/180552">\nLex.UZ сайтига Ўтиш</a> ИККИНЧИ ҚИСМ\n<a href="https://lex.uz/docs/180552#:~:text=671-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%9B%D0%BE%D0%B9%D0%B8%D2%B3%D0%B0,%D0%B1%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%20%D1%83%D1%87%D0%B8%D0%BD%D1%87%D0%B8%20%D1%85%D0%B0%D1%82%D0%B1%D0%BE%D1%88%D0%B8%D1%81%D0%B8.">Ўтиш манзили</a> 671-modda.\n<a href="https://lex.uz/docs/111189#:~:text=382-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%A8%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8,%D1%91%D0%BA%D0%B8%20%D1%9E%D0%B7%D0%B3%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B8%D0%BB%D0%B3%D0%B0%D0%BD%20%D2%B3%D0%B8%D1%81%D0%BE%D0%B1%D0%BB%D0%B0%D0%BD%D0%B0%D0%B4%D0%B8.">Ўтиш манзили</a> 382-modda.\n<a href="https://lex.uz/docs/111189#:~:text=302-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%9A%D0%B0%D1%84%D0%BE%D0%BB%D0%B0%D1%82%D0%BD%D0%B8%D0%BD%D0%B3,%D0%BE%D0%BB%D0%B8%D0%BD%D0%B8%D1%88%D0%B8%20%D0%BC%D1%83%D0%BC%D0%BA%D0%B8%D0%BD%20%D1%8D%D0%BC%D0%B0%D1%81.">Ўтиш манзили</a> 302-modda.\n<a href="https://lex.uz/docs/111189#:~:text=306-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%91%D0%B5%D0%BD%D0%B5%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D1%80%D0%BD%D0%B8%D0%BD%D0%B3,%D0%B6%D0%BE%D0%BD%D0%BA%D1%83%D1%8F%D1%80%D0%BB%D0%B8%D0%BA%20%D0%BA%D1%9E%D1%80%D1%81%D0%B0%D1%82%D0%B8%D1%88%D0%B8%20%D0%BA%D0%B5%D1%80%D0%B0%D0%BA.">Ўтиш манзили</a> 306-modda.\n<a href="https://t.me/shnkuz/46">Скачать</a> 321-сон қарори.`)
    }
    else if (msg.includes('смонт')) {
        return ctx.replyWithHTML(`<a href="https://t.me/shnkuz/54">Скачать Образец</a> АКТ смонтированного оборудования, инвентаря и материалов.\n<a href="https://t.me/shnkuz/51">Скачать</a> ВЕДОМОСТЬ смонтированного оборудования\n<a href="https://t.me/shnkuz/52">Скачать Образец</a> ВЕДОМОСТЬ смонтированного оборудования\n<a href="https://t.me/shnkuz/56">Скачать ШНК 3.01.04-04</a> ПРИЕМКА В ЭКСПЛУАТАЦИЮ ЗАКОНЧЕННЫХ СТРОИТЕЛЬСТВОМ ОБЪЕКТОВ`)
    }
    else if (msg.includes('пропис')) {
        return ctx.replyWithHTML(`<a href="http://www.summa-propisyu.ru/?summ=269866635&vat=20&val=10&sep=0">Havolaga o'tish</a> Сумма Прописью Онлайн - сервис быстрого перевода`)
    }
    else if (msg.includes('калькулятор')) {
        return ctx.replyWithHTML(`<a href="https://www.calc.ru/kalkulyator-rascheta-kirpicha-onlayn.html">Онлайн Калькулятор расчета кирпича</a>\n<a href="https://metallicheckiy-portal.ru/calculator/calculator_metalla">Калькулятор металла онлайн\n</a><a href="http://metsi.ru/calc">Калькулятор металлопроката онлайн\n</a><a href="http://compositgroup74.ru/kalkulyator.html">Онлайн калькулятор расчета размеров, арматуры и количества бетона монолитного ленточного фундамента</a>`)
    }
    else if (msg.includes('kalkulyator')) {
        return ctx.replyWithHTML(`<a href="https://www.calc.ru/kalkulyator-rascheta-kirpicha-onlayn.html">Онлайн Калькулятор расчета кирпича</a>\n<a href="https://metallicheckiy-portal.ru/calculator/calculator_metalla">Калькулятор металла онлайн\n</a><a href="http://metsi.ru/calc">Калькулятор металлопроката онлайн\n</a><a href="http://compositgroup74.ru/kalkulyator.html">Онлайн калькулятор расчета размеров, арматуры и количества бетона монолитного ленточного фундамента</a>`)
    }
     else if (msg.includes('демонт')) {
        return ctx.replyWithHTML(`<u>ШНК 4.02.70-05  19 стр.<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar"> Скачать</a>\n</u>15м; при большей высоте ремонтируемых зданий учитывают дополнитель-ные затраты на вертикальный транспорт.\n2.3. Если проектом организации капитального ремонта  предусмотрено производство работ в эксплуатируемых зданиях и сооружениях, вблизи объ-ектов, находящихся под высоким напряжением, на территории действующих предприятий, имеющих разветвленную сеть транспортных и инженерных коммуникаций и стесненные условия для складирования материалов, и в других усложняющих условиях проведения ремонтно-строительных работ, к затратам труда рабочих-строителей, затратам труда машинистов, времени использования строительных машин следует принимать коэффициенты, ука-занные в приложении 2.\n2.4. Затраты на выполнение работ по демонтажу (разборке) отдельных конструкций зданий и сооружений, внутренних санитарно-технических устройств и наружных инженерных сетей, при отсутствии в сборниках РЭСНр на ремонтно-строительные работы и в сборнике РЭСН на строитель-ные работы №46 «Работы при реконструкции зданий и сооружений» норм на их демонтаж (разборку), могут определяться по соответствующим ре-сурсным элементным сметным нормам на строительные работы без учета ма-териалов, изделий и конструкций, санитарно-технического оборудования, приборов, арматуры и трубопроводов, с применением к затратам труда ра-бочих-строителей, затратам труда машинистов, времени использования ма-шин и механизмов следующих коэффициентов:\nа) при демонтаже сборных железобетонных и бетонных конструкций – 0,8;\nб) то же сборных деревянных конструкций – 0,8;\nв) то же внутренних санитарно-технических устройств (водопровода, кана-лизации, водостоков, отопления, вентиляции) – 0,4;\n<u>стр.17   ШНК 4.02.70-05\n</u>г) то же наружных сетей водопровода, канализации, теплоснабжения – 0,6;\nд) то же металлических конструкций:\n0,6 – к затратам труда рабочих-строителей;\n0,7 – ко времени использования машин и механизмов и затратам труда машинистов.\n2.5.	На конструкции и работы, предусматриваемые в проектах ремон-та, при отсутствии для них норм в сборниках РЭСНр на ремонтно-строительные работы и сборниках РЭСН на монтаж оборудования, разраба-тываются индивидуальные ресурсные сметные нормы, которые утверждают-ся заказчиком в составе проекта (рабочего проекта).`)
    }
    else if (msg.includes('demontaj')) {
        return ctx.replyWithHTML(`ШНК 4.02.70-05<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar"> Скачать</a>\nБинолар ва иншоотларни айрим конструкцияларини, ички санитар-техник қурилмалари ва ташқи мухандислик тармоқларини демонтаж (бузиш) ишларини бажариш харажатлари таъмирлаш-қурилиш ЭРСН тўпламларида ва ЭРСН қурилиш ишлари бўйича 46 тўплам “Бинолар ва иншоотларни реконструк-ция қилишда бажариладиган ишлар”да берилмаган бўлса, уларни демонтаж (бузиш) нормалари керакли ресурс смета нормаларини қурилиш ишлари бўйича материаллар, буюмлар ва конструкциялар, санитар-техник ускуналари, приборлар, арматуралари ва қувурларига қурувчи-ишчиларни меҳнат харажатлари, машинистларни меҳнат харажатлари, машина ва механизмлардан фойдаланилган вақти бўйича демонтаж ишлар қуйидаги коэффициентлар орқали аниқланади:\nа) йиғма темирбетон ва бетон конструкцияларини  – 0,8;\nб) йиғма ёғоч конструкцияларни – 0,8;\nв) ички санитар-техник қурилмаларни (водопровод, канализация, водосток-лар, отопления, вентиляция) – 0,4;\nг) ташқи водопровод, канализация, иссиқлик таъминоти тармоқларини – 0,6;\nд) металл конструкциялар:\nе) қурувчи-ишчилар харажатига - 0,6;\nж) машина ва механизмларни фойдаланиш вақти ва машинистларни меҳнат харажатига - 0,7.\n`)
    }
    else {ctx.reply(`Bu haqida ma'lumot topilmadi.\nIltimos kirilchada yoki ruschada bexato yozib ko'ring!`)}
})
