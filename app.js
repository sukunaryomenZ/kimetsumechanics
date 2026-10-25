/* Диагностика: открыть сайт со ссылкой ...netlify.app/?debug */
if(/[?&]debug/.test(location.search)){
  var bar=document.createElement('div');
  bar.style.cssText='position:fixed;left:8px;top:8px;right:8px;z-index:99999;background:#003a1a;color:#fff;font:12px monospace;padding:8px;border-radius:8px;white-space:pre-wrap;word-break:break-all;pointer-events:none';
  bar.textContent='JS работает ✓ | '+navigator.userAgent;
  document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(bar);});
  ['pointerdown','click'].forEach(function(t){document.addEventListener(t,function(e){var n=e.target;bar.textContent='JS работает ✓ | '+t+' → <'+(n.tagName||'?').toLowerCase()+' class="'+(n.className&&n.className.baseVal!==undefined?n.className.baseVal:n.className)+'" id="'+n.id+'">';},true);});
}
/* Если что-то сломается — покажет текст ошибки внизу экрана (для диагностики) */
addEventListener('error',function(e){try{var d=document.createElement('div');d.style.cssText='position:fixed;left:8px;right:8px;bottom:8px;z-index:99999;background:#300;color:#fff;font:12px monospace;padding:10px;border-radius:8px;white-space:pre-wrap;word-break:break-all';d.textContent='Ошибка: '+(e.message||'')+' ['+(e.lineno||'?')+':'+(e.colno||'?')+'] '+navigator.userAgent;document.body.appendChild(d);}catch(x){}});
(() => {
  const $ = id => document.getElementById(id), body = document.body;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Блоки: "!" запрет, "-" пункт, ">" заметка, "!!" красная заметка, без префикса абзац */
  const B = {
    'Вода':['Змея','Цветок','Насекомое','Солнце 1%','Ничего'],'Ветер':['Зверь','Бамбук','Солнце 1%','Ничего'],
    'Гром':['Звук','Зенитцу','Кайгаку','Солнце 1%','Ничего'],'Пламя':['Любовь','Камень 5%','Солнце 1%','Ничего'],
    'Туман':['Сакура','Сеньёр Голд','Солнце 1%','Ничего'],'Луна':['Любое Дыхание','Солнце 1%'],
    'Солнце':['Вода','Ветер','Гром','Пламя','Туман','Луна']
  };
  const BI = { 'Вода':'🌊','Ветер':'💨','Гром':'⚡','Пламя':'🔥','Туман':'🌫️','Луна':'🌙','Солнце':'☀️' };
  const D = {
    main: { k:'戦', h:'Основные механики ⚔️', p:'Гайд для новичков, логика сервера, правила ПВП, строительство и профессии.', secs:[
      { t:'🌾 Добро пожаловать в деревню', cards:[
        ['🎭','Ты — Житель деревни','Гайд для новичков: как начать свою историю',['С первого шага на сервере ты перестаёшь быть собой. Ты надеваешь маску своего персонажа — обычного человека, который просыпается утром, заваривает чай из трав и живёт своей жизнью.','🔹 Что это значит на практике?','-У тебя есть история (ты уже описал её в разделе «Анкеты»). Придерживайся её как личного компаса.','-Если в анкете написано, что ты боишься грома — значит, во время грозы твой персонаж дрожит и прячется в сарае. Даже если тебе как игроку всё равно.','-Твой характер, привычки, манера речи — всё берётся из анкеты.'],1],
        ['⏳','Не торопись','Самое важное правило',['Забудь про скорость. Здесь нет рейтингов, гонок и «фарма».','-Ожидай — иногда лучшая сцена рождается из тишины или долгого взгляда на закат.','-Наслаждайся — рассматривай мир вокруг: скрип двери, запах сена, звон кузнеца.','-Главная цель — прожить момент в деревне, а не «пробежать» его.']],
        ['✨','Твоя задача — творить повседневность','Не нужно сразу искать демона или охотника',['Не нужно сразу искать демона или охотника. Интересно даже просто:','-Посплетничать у колодца.','>Начинай с малого. Игра сама потянет тебя в приключения, когда ты хорошо отыграешь «скучную» жизнь.']] ]},
      { t:'🏛️ Итоговая логика сервера', tiles:[['8','вещей, которых быть не должно'],['8','путей развития персонажа',1]], cards:[
        ['16','Главный принцип сервера','Всё должно быть заслужено',['>Сильные способности, высокие ранги и особые предметы должны быть заслужены.','На сервере не должно быть:','!Незаслуженных Хашир.','!Массовой раздачи Меток.','!Случайной выдачи Прозрачного мира.','!Свободного получения хаори.','!Игнорирования иерархии.','!Беспричинного повышения демонов.','!Использования НРП-информации в RP.','!Возвращения на место смерти после гибели.'],1],
        ['16.2','Как развивать персонажа','Восемь путей',['Все игроки должны развивать персонажа через:','-RP.','-Тренировки.','-Миссии.','-Отчёты.','-Участие в событиях.','-Дисциплину.','-Заслуги перед фракцией.','-РП отыгровку.']] ]},
      { t:'⚔️ Правила ПВП', tiles:[['1v1','Дуэль'],['1v2','Один против двоих'],['2v2','Двое на двое'],['1v3','Только против 1 Высшей Луны',1]], cards:[
        ['ПВП','Форматы боя','Разрешены 1v1, 1v2 и 2v2',['Битвы разрешены только 1v1, 1v2 или 2v2.','>Исключение: на 1 Высшую Луну разрешено 1v3.'],1],
        ['ВР','Вечный ран','Запрещён',['!Вечный ран запрещён.','Разрешено отступать и восстанавливать голод, и не более.']] ]},
      { t:'🗡️ Для охотников', cards:[
        ['1','Когда разрешено ПВП','Только при признаках демона',['ПВП разрешено только в случае, если охотник увидел у игрока что-то связанное с демонами.']],
        ['2','Победа над демоном','Забвение и тишина',['!Нельзя поднимать демона или разговаривать с ним.','При победе над демоном все охотники забывают его: для них он обычный человек.']],
        ['3','Проигрыш','Охотник забывает бой',['При проигрыше охотник забывает абсолютно всё, что происходило в битве с демоном.']] ]},
      { t:'😈 Для демонов', cards:[
        ['👑','Главное правило Высших Лун','Они сражаются по одному',['Из-за своего высокомерия Высшие Луны сражаются всегда по одному, чтобы господин признавал только их.']],
        ['1','Когда разрешено ПВП','Всегда',['ПВП разрешено в любом случае: как только вы увидели охотника, можно спокойно напасть.']],
        ['2','Победа над охотником','Без плена и разговоров',['!Нельзя поднимать охотника или разговаривать с ним.']],
        ['3','Проигрыш','Демон забывает бой',['При проигрыше демон забывает абсолютно всё, что происходило в битве с охотниками.']],
        ['4','Рука с жителем','Только арт и отхил',['!Демонам нельзя держать в свободной руке жителя: только арт и переключение на отхил.']] ]},
      { t:'🏗️ Строительство и выживание', cards:[
        ['14.1','Выживание игрокам не выдаётся','Строить нужно через администрацию',['Игрокам не выдаётся режим выживания для самостоятельного строительства.','Если игрок хочет что-то построить, он должен обратиться к:','-Ивентологу.','-Вышке.','-Администратору.','Если администрация свободна и согласна, она может отыграть строителя и построить желаемое.','Постройка должна быть:','-Адекватной.','-Финансово обоснованной.','-RP-логичной.','-Соответствующей сеттингу.']],
        ['14.2','Профессии жителей','Убрана профессия полевого работника',['У игроков-жителей необходимо убрать профессию полевого работника из-за отсутствия соединения системы полевых работ и защиты от грифа.','Профессии:','-Шахтёр.','-Рыбак.','-Дровосек.']] ]}
    ]},
    hunter: { k:'鬼狩', h:'Механики охотников 🗡️', p:'Законы Корпуса, система дыханий, хаори, Метка, Прозрачный мир, Какуши и кузнецы.', secs:[
      { t:'📜 Законы Истребителей', cards:[
        ['1.1','Первый закон — Прикрытие','Не показывать свою сущность',['Охотники не могут явно показывать свою сущность в общественных местах или при нежелательных свидетелях.','Запрещено:','!Носить одежду с эмблемой Истребителей в общественных местах.','!Открыто носить катану вне миссии.','!Демонстрировать сверхчеловеческие способности перед гражданскими.','!Использовать прыжки, силу и дыхания на глазах у обычных жителей без необходимости.'],1],
        ['1.2','Второй закон — РК','Возвращение на место смерти',['РК — возвращение на место смерти. Игрокам запрещено возвращаться на место своей смерти после гибели той же ночью.','После смерти:','-Вся информация, добытая в ту же ночь, забывается.','-Нельзя использовать смерть как способ разведки.','-Нельзя передавать информацию, которую персонаж узнал перед смертью.','-Нельзя возвращаться на место боя для продолжения участия.','>Умер — потерял всё, что узнал до этого момента.']],
        ['1.3','Третий закон — Иерархия','Младшие уважают старших',['Все Истребители обязаны соблюдать иерархию. Младшие ранги должны уважать старших.','Запрещено:','!Неуважение.','!Споры без причины.','!Неподчинение приказам.','!Насмешки.','!Провокации.','!Самовольное принятие решений в миссиях.']],
        ['1.4','Четвёртый закон — Честь','Честь и достоинство',['У Истребителя должны быть честь и достоинство.','Истребитель не должен:','!Беспричинно сбегать с миссии.','!Бросать товарищей без причины.','!Предавать Корпус.','!Помогать демонам.','!Трусливо избегать обязанностей.']] ]},
      { t:'🌬️ Система дыханий', tiles:[['7','основных дыханий'],['1%','шанс Солнца'],['5%','шанс Камня у Пламени',1]], cards:[
        ['3.1','Основные дыхания','Семь дыханий, из которых всё начинается',['Основные дыхания: Вода, Пламя, Ветер, Гром, Луна, Туман, Солнце.','Эти семь дыханий могут выпасть стандартно, и из них вы решаете, будут ли происходить ответвления.','>Чтобы обуздать дыхание, нужно пройти ряд тренировок.']],
        ['3.2','Особые дыхания','Отдельная крутка',['Для получения особых дыханий используется отдельная крутка. В ней может выпасть:','-Особое дыхание.','-Основное дыхание.','-Солнце.','-Ничего.']],
        ['3.3','Таблица дыханий','Нажмите на дыхание и узнайте, что может выпасть',['@breath','>Солнце нельзя оставить: его можно только выбить из других дыханий.'],1] ]},
      { t:'👘 Хаори', cards:[
        ['7','Хаори','Нельзя получить просто так',['Хаори нельзя получить просто так. Получить хаори можно:','-Став Хаширой.','-За особые заслуги перед Корпусом Истребителей.','-По решению главы Корпуса.','-Через важное RP-событие или награду.','>Хаори изготавливают Какуши, а не кузнецы.'],1]] },
      { t:'🌀 Метка и Прозрачный мир', tiles:[['6','возможных условий для Метки'],['6','возможных условий для Прозрачного мира',1]], cards:[
        ['8.1','Общее правило','Только заслуженные способности',['Метка Истребителя и Прозрачный мир должны быть заслуженными.','!Запрещена простая выдача этих способностей без RP-оснований.']],
        ['8.2','Получение Метки','Уникальный путь развития',['Для получения Метки необходимо пройти уникальный путь развития. Возможные условия:','-Тяжёлые тренировки.','-Смертельный бой.','-Достижение предела возможностей.','-Важная RP-сцена.','-Одобрение главы Корпуса или администрации.','-Наличие достаточного ранга и боевого опыта.','!!Метка не выдаётся автоматически.']],
        ['8.3','Получение Прозрачного мира','Ещё более редкая способность',['Прозрачный мир является ещё более редкой способностью. Возможные условия получения:','-Глубокое понимание собственного дыхания.','-Продолжительная RP-тренировка.','-Бой на грани смерти.','-Развитие концентрации.','-Наставничество от опытного персонажа.','-Одобрение администрации.','!!Прозрачный мир не должен быть массовой способностью.']] ]},
      { t:'🤝 Какуши и Кузнецы', cards:[
        ['17','Какуши','Вспомогательная организация Корпуса',['Какуши являются вспомогательной организацией Корпуса. Их задачи:','-Помощь раненым.','-Сопровождение Истребителей.','-Изготовление хаори.','-Поддержка штаба.','-Помощь в RP-мероприятиях.','>Какуши не являются кузнецами и не занимаются изготовлением катан.']],
        ['18','Кузнецы','Катаны и оружие',['Кузнецы занимаются:','-Созданием катан.','-Ремонтом оружия.','-Выдачей или заменой клинков.','-RP-обслуживанием Истребителей.','!Кузнецы не создают хаори.']] ]}
    ]},
    demon: { k:'鬼', h:'Механики демонов 😈', p:'Скрытность, Мудзан, собрания лун, строгая иерархия и гибриды.', secs:[
      { t:'🌑 Скрытность', cards:[
        ['12','Скрытность','Слабые демоны не показывают сущность',['Слабые демоны не могут открыто показывать свою сущность в общественных местах. Убивать людей они должны скрытно, без многочисленных свидетелей.','Хоть ты и высшее существо, ты прекрасно понимаешь, что всегда может найтись рыбка покрупнее, и не стоит привлекать всеобщее внимание. Ведь всегда проще убивать скрытно и без проблем на свою голову становиться сильнее.','>Рога можно не носить только на ранге Высшей Луны.'],1] ]},
      { t:'👑 Мудзан и Луны', tiles:[['3','игровых дня между собраниями'],['3','способа выполнить квоту Высшей Луне'],['6','Высшая Луна: с неё можно назвать имя Мудзана 1 на 1',1]], cards:[
        ['12.1','Отношение Мудзана к демонам','Он ценит свою кровь',['Демоны не являются полностью ненавистными Мудзану. Мудзан ценит свою кровь, поэтому:','-Не раздаёт её просто так.','-Не убивает Лун без веской причины.','-Не тратит сильных демонов без необходимости.','-Ожидает от демонов результатов.']],
        ['12.2','Собрания демонов','Раз в 3 игровых дня',['Собрания демонов проводятся раз в 3 игровых дня. За это время Луны должны выполнить требования.']],
        ['12.3','Обязанности Высших Лун','До собрания нужно выполнить одно из условий',['Высшие Луны обязаны за период до собрания:','-Принести важную информацию.','-Или убить достаточное количество Истребителей.','-Или выполнить особое поручение Мудзана.','Если Высшая Луна не выполнила требования, возможны наказания:','!Временное повышение квоты на следующее собрание.','!Понижение в ранге.','!Битва крови с демоном более низкого ранга.','!Принудительное восстановление в крепости.','>Если Луна восстанавливается после наказания, её квота переносится на следующее собрание, чтобы избежать бесконечного цикла наказаний.','!!За многократное повторение вас ждёт смерть.']],
        ['12.4','Обязанности Низших Лун','Польза и результат',['Низшие Луны также обязаны:','-Добывать информацию.','-Убивать Истребителей.','-Выполнять поручения.','-Доказывать свою полезность.','За невыполнение требований возможны наказания:','!Повышение квоты на следующее собрание.','!Понижение в ранге.','!Вызов на битву крови.','!Временное лишение привилегий.','!Изгнание из Лун.','!Казнь в особо тяжёлых случаях.']] ]},
      { t:'⛓️ Субординация', cards:[
        ['13.1','Субординация демонов','Строгая иерархия',['У демонов также существует строгая иерархия. Запрещено:','!Перебивать вышестоящих.','!Неуважительно обращаться к старшим по рангу.','!Лгать Мудзану.','!Лгать вышестоящим демонам.','!Игнорировать приказы.','!Нападать на союзных демонов без спарринга или RP-причины.','!Нарушать прямые распоряжения.']],
        ['13.2','Особое правило о лжи Мудзану','Он видит ложь',['Мудзан способен:','-Читать мысли, если игрок отписывает их как мысли в RP.','-Понимать, когда персонаж врёт.','-Наказывать за ложь.','-Использовать ложь как повод для серьёзного RP-наказания.','>НРП-сообщения не считаются RP-информацией.','!!Если игрок в НРП утверждает, что его персонаж не врёт, а по RP оказывается иначе, это может считаться серьёзным нарушением и привести к ЧС фракции.']],
        ['🚫','Имя Мудзана','Произносить вслух нельзя',['!Произносить имя и фамилию Мудзана вслух запрещено. Разрешено только демонам начиная с 6 Высшей Луны и только в разговоре 1 на 1 с самим Мудзаном.','>Примечание: обращаться к Мудзану в НРП как к другу тоже запрещено.']] ]},
      { t:'🧬 Гибриды', tiles:[['40%','успешный исход'],['60%','вы станете обычным человеком',1],['3','допустимых гибрида']], cards:[
        ['🧬','Превращение в гибрида','Только на 1 Низшей Луне',['Превращение в гибрид охотника и демона сопряжено с высоким риском и возможно только на ранге 1 Низшая Луна.','-Вероятность успешного исхода — 40%.','!!В остальных 60% случаев вы превратитесь в обычного человека.'],1],
        ['✅','Допустимые гибриды','Три варианта',['-Кайгаку 🌩️','-Ренгоку 🔥','-Синьор Голд 🪙']] ]}
    ]}
  };

  /* ===== Утилиты ===== */
  const toast = $('toast'); let tt;
  const say = m => { toast.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 3200); };
  const slash = $('slash'), hub = $('hub'), fine = matchMedia('(pointer: fine)').matches;
  const cut = () => { if (reduce) return; slash.classList.remove('cut'); void slash.offsetWidth; slash.classList.add('cut'); };
  const bursts = [];
  const burst = (x, y, n = 10) => { if (reduce) return; for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, v = Math.random() * 5 + 1.5; bursts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1.5, a: 1, r: Math.random() * 2.4 + .8 }); } };
  let read = {}; try { read = JSON.parse(localStorage.getItem('km_read') || '{}'); } catch (e) {}
  const save = () => { try { localStorage.setItem('km_read', JSON.stringify(read)); } catch (e) {} };
  const count = m => D[m].secs.reduce((a, s) => a + s.cards.length, 0);
  const doneN = m => Object.keys(read).filter(k => k.startsWith(m + '-')).length;
  const hubCounts = () => ['main', 'hunter', 'demon'].forEach(m => { const e = document.querySelector(`[data-c="${m}"]`), d = doneN(m); e.textContent = d ? `Изучено ${d} из ${count(m)}` : `${count(m)} правил`; });
  const updProg = m => { const e = $('rp'); if (!e) return; const d = doneN(m), t = count(m); e.textContent = `Изучено: ${d}/${t}`; $('rpi').style.width = d / t * 100 + '%'; };
  const mark = (a, m) => {
    const id = a.dataset.id; if (read[id]) return; read[id] = 1; a.classList.add('seen'); save(); updProg(m);
    if (doneN(m) === count(m) && !read['ach-' + m]) { read['ach-' + m] = 1; save(); burst(innerWidth / 2, innerHeight / 2, 80); say('🎉 Вы изучили все механики раздела!'); }
  };

  /* ===== Отрисовка ===== */
  const blk = s => {
    if (s === '@breath') return `<div class="bt">${Object.keys(B).map(k => `<button type="button" data-b="${k}">${BI[k]} ${k}</button>`).join('')}</div><div class="br" id="br"><small>Выберите дыхание выше</small></div>`;
    if (s.startsWith('!!')) return `<div class="cl x">${s.slice(2)}</div>`;
    if (s[0] === '>') return `<div class="cl">${s.slice(1)}</div>`;
    return s;
  };
  const body_ = c => {
    let out = '', ul = '', j = 0; const flush = () => { if (ul) { out += `<ul>${ul}</ul>`; ul = ''; } };
    for (const s of c[3]) {
      if (s[0] === '!' && s[1] !== '!') ul += `<li class="x" style="--j:${j++}">${s.slice(1)}</li>`;
      else if (s[0] === '-') ul += `<li style="--j:${j++}">${s.slice(1)}</li>`;
      else { flush(); const b = blk(s); out += /^<div/.test(b) ? b : `<p>${b}</p>`; }
    }
    flush(); return out;
  };
  const graph = k => {
    const it = B[k], N = it.length, cx = 320, cy = 140; let ln = '', nd = '';
    it.forEach((t, i) => {
      const a = -Math.PI / 2 + i / N * Math.PI * 2, w = Math.max(76, t.length * 8.4 + 30);
      let x = cx + 232 * Math.cos(a); const y = cy + 104 * Math.sin(a); x = Math.min(640 - w / 2 - 6, Math.max(w / 2 + 6, x));
      const cl = /%/.test(t) ? ' rare' : t === 'Ничего' ? ' none' : '';
      ln += `<path class="gl" pathLength="1" d="M${cx} ${cy}L${x.toFixed(1)} ${y.toFixed(1)}" style="--j:${i}"/>`;
      nd += `<g class="gn${cl}" style="--j:${i}"><rect x="${(x - w / 2).toFixed(1)}" y="${(y - 17).toFixed(1)}" width="${w}" height="34" rx="10"/><text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${t}</text></g>`;
    });
    const chips = it.map((t, j) => `<span class="chip${/%/.test(t) ? ' rare' : ''}${t === 'Ничего' ? ' none' : ''}" style="--j:${j}">${t}</span>`).join('');
    return `<small>${k === 'Солнце' ? 'Солнце может превратиться в:' : BI[k] + ' ' + k + ': что может выпасть'}</small><svg class="gsvg" viewBox="0 0 640 280" role="img" aria-label="Схема дыханий">${ln}<g class="gc"><circle cx="${cx}" cy="${cy}" r="46"/><text class="em" x="${cx}" y="${cy - 8}">${BI[k]}</text><text x="${cx}" y="${cy + 20}">${k}</text></g>${nd}</svg><div class="chips">${chips}</div>`;
  };
  let io, spy;
  const reveal = () => {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.sec').forEach(s => s.classList.add('in')); return; }
    io && io.disconnect(); spy && spy.disconnect();
    io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .06, rootMargin: '0px 0px -5% 0px' });
    spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) document.querySelectorAll('.toc button').forEach(b => b.classList.toggle('on', b.dataset.go === en.target.id)); }), { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.sec').forEach(s => { io.observe(s); spy.observe(s); });
  };
  function render(m) {
    const d = D[m]; let idx = 0, n = 0;
    const secs = d.secs.map((s, si) => `<section class="sec" id="s${si}">
      <h2>${s.t}</h2>${s.tiles ? `<div class="tiles">${s.tiles.map((t, k) => `<div class="tile${t[2] ? ' sp' : ''}" style="--i:${k}"><b>${t[0]}</b><span>${t[1]}</span></div>`).join('')}</div>` : ''}${
      s.cards.map(c => { const id = idx++; return `<article class="acc${c[4] ? ' open' : ''}${read[m + '-' + id] ? ' seen' : ''}" id="r${id}" data-id="${m}-${id}" style="--i:${Math.min(n++, 10)}" data-t="${(c[0] + ' ' + c[1] + ' ' + c[2] + ' ' + c[3].join(' ')).toLowerCase()}">
        <button class="ah" type="button" aria-expanded="${c[4] ? 'true' : 'false'}"><span class="no">${c[0]}</span><span class="tt"><b>${c[1]}</b><small>${c[2]}</small></span><span class="rd" aria-hidden="true">✓</span><i class="chev"></i></button>
        <div class="ab"><div class="in2">${body_(c)}<div class="ft"><button class="lk" type="button" data-l="${id}">🔗 Ссылка на правило</button></div></div></div></article>`; }).join('')}</section>`).join('');
    $('view').innerHTML = `<header class="hero"><div class="kj" aria-hidden="true">${d.k}</div><h1>${d.h}</h1><p>${d.p}</p><div class="bar"></div>
      <div class="stats"><span>Разделов: ${d.secs.length}</span><span>Правил: ${count(m)}</span><span id="rp"></span></div><div class="rpb"><i id="rpi"></i></div>
      <nav class="toc" aria-label="Разделы страницы">${d.secs.map((s, i) => `<button type="button" data-go="s${i}">${s.t}</button>`).join('')}</nav>
      <div class="tools"><input id="q" type="search" placeholder="Поиск по правилам… (нажмите /)" aria-label="Поиск"><button class="pill" id="all" type="button">Развернуть всё</button></div></header>${secs}<p class="empty" id="none">Ничего не найдено</p>`;
    updProg(m); reveal();
  }
  const openRule = i => {
    const a = $('r' + i); if (!a) return; a.classList.add('open'); a.querySelector('.ah').setAttribute('aria-expanded', 'true');
    mark(a, body.dataset.mode); a.scrollIntoView({ behavior: 'smooth', block: 'center' }); a.classList.add('hl'); setTimeout(() => a.classList.remove('hl'), 2000);
  };

  /* ===== Клики внутри ===== */
  const view = $('view');
  view.addEventListener('click', e => {
    const m = body.dataset.mode, go = e.target.closest('[data-go]');
    if (go) { $(go.dataset.go).scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    const lk = e.target.closest('.lk');
    if (lk) { const u = location.origin + location.pathname + '#' + m + '/r' + lk.dataset.l; try { navigator.clipboard.writeText(u); say('Ссылка на правило скопирована'); } catch (x) { say(u); } return; }
    const h = e.target.closest('.ah');
    if (h) { const a = h.parentNode, o = a.classList.toggle('open'); h.setAttribute('aria-expanded', o); if (o) mark(a, m); return; }
    const b = e.target.closest('[data-b]');
    if (b) {
      b.parentNode.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      $('br').innerHTML = graph(b.dataset.b); return;
    }
    if (e.target.id === 'all') {
      const cs = [...document.querySelectorAll('.acc:not([hidden])')], open = cs.some(a => !a.classList.contains('open'));
      cs.forEach(a => { a.classList.toggle('open', open); a.querySelector('.ah').setAttribute('aria-expanded', open); if (open) mark(a, m); });
      e.target.textContent = open ? 'Свернуть всё' : 'Развернуть всё';
    }
  });
  view.addEventListener('input', e => {
    if (e.target.id !== 'q') return; const q = e.target.value.trim().toLowerCase(); let any = 0;
    document.querySelectorAll('.sec').forEach(s => {
      let n = 0; s.querySelectorAll('.acc').forEach(a => { const ok = !q || a.dataset.t.includes(q); a.hidden = !ok; if (ok) { n++; if (q) a.classList.add('open'); } });
      s.hidden = !n; any += n;
    });
    $('none').style.display = any ? 'none' : 'block';
  });
  addEventListener('keydown', e => {
    if (!body.classList.contains('in')) return; const q = $('q');
    if (e.key === '/' && q && document.activeElement !== q) { e.preventDefault(); q.focus(); }
    if (e.key === 'Escape' && q && document.activeElement === q) { q.value = ''; q.dispatchEvent(new Event('input', { bubbles: true })); q.blur(); }
  });

  /* ===== Режимы ===== */
  let pal = 'main';
  function setMode(m, instant, rule) {
    const go = () => {
      body.dataset.mode = m; pal = m; body.classList.add('in'); hub.classList.add('gone'); render(m);
      try { history.replaceState(null, '', '#' + m); } catch (x) {}
      if (rule != null) setTimeout(() => openRule(rule), 500); else scrollTo(0, 0);
    };
    if (instant) return go();
    cut(); if (m === 'demon' && !reduce) { body.classList.remove('shake'); void body.offsetWidth; body.classList.add('shake'); }
    setTimeout(go, reduce ? 0 : 260);
  }
  document.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => { if (!(b.closest('.sw') && body.dataset.mode === b.dataset.m)) setMode(b.dataset.m); }));
  $('back').addEventListener('click', () => {
    cut(); setTimeout(() => { body.classList.remove('in'); hub.classList.remove('gone'); hubCounts(); try { history.replaceState(null, '', location.pathname + location.search); } catch (x) {} }, reduce ? 0 : 260);
  });

  /* ===== Курсор и прогресс ===== */
  addEventListener('pointermove', e => {
    $('glow').style.setProperty('--mx', e.clientX + 'px'); $('glow').style.setProperty('--my', e.clientY + 'px');
    if (fine && !reduce) ['b1', 'b2', 'b3'].forEach(id => { const s = $(id).style; s.setProperty('--px', ((.5 - e.clientX / innerWidth) * 22).toFixed(1) + 'px'); s.setProperty('--py', ((.5 - e.clientY / innerHeight) * 14).toFixed(1) + 'px'); });
  });
  addEventListener('scroll', () => { const h = document.documentElement; $('prog').style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });
  if (fine && !reduce) {
    const cur = $('cur'); let cx = 0, cy = 0, tx = 0, ty = 0;
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; cur.style.opacity = 1; cur.classList.toggle('big', !!e.target.closest('a,button')); });
    (function f() { cx += (tx - cx) * .18; cy += (ty - cy) * .18; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(f); })();
  }

  /* ===== Частицы ===== */
  if (!reduce) {
    const c = $('fx'), x = c.getContext('2d'); let w, h;
    const fit = () => { w = c.width = innerWidth; h = c.height = innerHeight; }; addEventListener('resize', fit); fit();
    const P = { main: [[345, 90, 72], [300, 30, 85]], hunter: [[38, 100, 62], [22, 100, 58]], demon: [[350, 95, 55], [0, 90, 40]] };
    const PC = { main: '255,150,180', hunter: '255,205,130', demon: '200,20,50' };
    const mk = y => ({ x: Math.random() * w, y: (y === undefined ? h + 10 : y), r: Math.random() * 2 + .6, v: Math.random() * .5 + .15, d: (Math.random() - .5) * .4, a: Math.random() * .5 + .2, p: Math.random() * 6.28, k: Math.random() < .3 ? 1 : 0 });
    const ps = Array.from({ length: 60 }, () => mk(Math.random() * h));
    const pt = Array.from({ length: 12 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 5 + 4, v: Math.random() * .7 + .4, p: Math.random() * 6.28, rot: Math.random() * 6.28, s: (Math.random() - .5) * .03, a: Math.random() * .4 + .4 }));
    (function tick() {
      x.clearRect(0, 0, w, h); x.shadowBlur = 0;
      for (const q of pt) {
        q.y += q.v; q.p += .015; q.x += Math.sin(q.p) * .7; q.rot += q.s; if (q.y > h + 20) { q.y = -20; q.x = Math.random() * w; }
        x.save(); x.translate(q.x, q.y); x.rotate(q.rot); x.scale(1, .55 + .45 * Math.sin(q.p * 2));
        x.beginPath(); x.ellipse(0, 0, q.r, q.r * .55, 0, 0, 6.283); x.fillStyle = `rgba(${PC[pal]},${q.a})`; x.fill(); x.restore();
      }
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i]; b.x += b.vx; b.y += b.vy; b.vy += .12; b.vx *= .98; b.a -= .018; if (b.a <= 0) { bursts.splice(i, 1); continue; }
        const [hu, s, l] = P[pal][0];
        x.beginPath(); x.arc(b.x, b.y, b.r, 0, 6.283); x.fillStyle = `hsla(${hu},${s}%,${l}%,${b.a})`; x.shadowColor = `hsl(${hu},${s}%,${l}%)`; x.shadowBlur = 12; x.fill();
      }
      for (const p of ps) {
        p.y -= p.v; p.p += .02; p.x += p.d + Math.sin(p.p) * .25; if (p.y < -10) Object.assign(p, mk());
        const [hu, s, l] = P[pal][p.k];
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fillStyle = `hsla(${hu},${s}%,${l}%,${p.a})`; x.shadowColor = `hsl(${hu},${s}%,${l - 8}%)`; x.shadowBlur = 10; x.fill();
      }
      requestAnimationFrame(tick);
    })();
  }

  /* ===== Старт: ссылки вида #hunter или #hunter/r3 ===== */
  hubCounts();
  const hm = location.hash.match(/^#(main|hunter|demon)(?:\/r(\d+))?$/);
  if (hm) setMode(hm[1], true, hm[2] != null ? +hm[2] : null);
})();
