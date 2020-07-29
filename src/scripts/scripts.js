//"use strict";
//массив строк эталонов
function etalonarr(count) {
    var etalonstring = ["arise arose arisen",
        "awake, awoke, awaked awoke",
        "be, was were, been",
        "bear, bore, borne born",
        "beat beat beaten",
        "become became become",
        "begin began begun",
        "blow blew blown",
        "break broke broken",
        "bring brought brought",
        "build built built",
        "burn burnt burnt",
        "burst burst burst",
        "buy bought bought",
        "catch caught caught",
        "catch caught caught",
        "choose chose chosen",
        "come came come",
        "cost cost cost",
        "creep crept crept",
        "cut cut cut",
        "do did done",
        "draw drew drawn",
        "draw drew drawn",
        "drive drove driven",
        "eat ate eaten",
        "fall fell fallen",
        "feed fed fed",
        "feel felt felt",
        "fight fought fought",
        "find found found",
        "fly flew flown",
        "forget forgot forgotten",
        "forgive forgave forgiven",
        "freeze froze frozen",
        "get got got",
        "give gave given",
        "go went gone",
        "grow grew grown",
        "hang hung hung",
        "have had had",
        "hear heard heard",
        "hide hid hidden",
        "hit hit hit",
        "hold held held",
        "hurt hurt hurt",
        "keep kept kept",
        "kneel knelt knelt",
        "know knew known",
        "lay laid laid",
        "lead led led",
        "lean leant leant",
        "learn learnt learnt",
        "leave left left",
        "lend lent lent",
        "let let let",
        "lie lay lain",
        "light lit lit",
        "lose lost lost",
        "make made made",
        "mean meant meant",
        "meet met met",
        "mistake mistook mistaken",
        "pay paid paid",
        "prove proved proven",
        "put put put",
        "quit quit quit",
        "read read read",
        "ride rode ridden",
        "ring rang rung",
        "rise rose risen",
        "run ran run",
        "say said said",
        "see saw seen",
        "seek sought sought",
        "sell sold sold",
        "send sent sent",
        "set set set",
        "sew sewed sewn",
        "shake shook shaken",
        "show showed shown",
        "shrink shrank shrunk",
        "shut shut shut",
        "sing sang sung",
        "sink sank sunk",
        "sit sat sat",
        "sleep slept slept",
        "slide slid slid",
        "sow sowed sown",
        "speak spoke spoken",
        "spell spelt spelt",
        "spend spent spent",
        "spill spilt spilt",
        "spoil spoilt spoilt",
        "spread spread spread",
        "spring sprang sprung",
        "stand stood stood",
        "steal stole stolen",
        "stick stuck stuck",
        "sting stung stung",
        "sweep swept swept",
        "swell swelled swollen",
        "swim swam swum",
        "swing swung swung",
        "take took taken",
        "teach taught taught",
        "tear tore torn",
        "tell told told",
        "think thought thought",
        "throw threw thrown",
        "thrive throve thriven",
        "undertake undertook undertaken",
        "understand understood understood",
        "wake woke woken",
        "wear wore worn",
        "weep wept wept",
        "wet wet wet",
        "win won won",
        "wind wound wound",
        "write wrote written"];

    function string_element() {
        return etalonstring[count];
    }
    return string_element();
}

function rusword(count) {
    var russian_word = ["1 ) Появляться",
        "2 ) Просыпаться",
        "3 ) Быть",
        "4 ) Носить, рожать",
        "5 ) Бить",
        "6 ) Становиться",
        "7 ) Начинать",
        "8 ) Дуть",
        "9 ) Ломать",
        "10) Приносить",
        "11) Строить",
        "12) Гореть",
        "13) Взрываться",
        "14) Покупать",
        "15) Ловить",
        "16) Хватать",
        "17) Выбирать",
        "18) Приходить",
        "19) Стоить",
        "20) Ползать",
        "21) Резать",
        "22) Делать",
        "23) Рисовать",
        "24) Тащить",
        "25) Водить",
        "26) Есть",
        "27) Падать",
        "28) Кормить",
        "29) Чувствовать",
        "30) Бороться",
        "31) Находить",
        "32) Летать",
        "33) Забывать",
        "34) Прощать",
        "35) Замерзать",
        "36) Получать",
        "37) Давать",
        "38) Идти",
        "39) Расти",
        "40) Вешать",
        "41) Иметь",
        "42) Слышать",
        "43) Прятать",
        "44) Поп. в цель",
        "45) Держать",
        "46) Причинять боль",
        "47) Xранить",
        "48) Стоять на кол.",
        "49) Знать",
        "50) Класть",
        "51) Вести",
        "52) Наклоняться",
        "53) Учить",
        "54) Оставлять",
        "55) Давать взаймы",
        "56) Позволять",
        "57) Лежать",
        "58) Освещать",
        "59) Терять",
        "60) Производить",
        "61) Значить",
        "62) Встречать",
        "63) Ошибаться",
        "64) Платить",
        "65) Доказывать",
        "66) Положить",
        "67) Покидать, бросать",
        "68) Читать",
        "69) Ездить верхом",
        "70) Звенеть",
        "71) Подниматься",
        "72) Бежать",
        "73) Говорить",
        "74) Видеть",
        "75) Искать",
        "76) Продавать",
        "77) Посылать",
        "78) Ставить",
        "79) Шить",
        "80) Встряхивать",
        "81) Показывать",
        "82) Сжиматься",
        "83) Закрывать",
        "84) Петь",
        "85) Тонуть",
        "86) Сидеть",
        "87) Спать",
        "88) Скользить",
        "89) Сеять",
        "90) Говорить",
        "91) Произносить",
        "92) Тратить",
        "93) Проливать",
        "94) Портить",
        "95) Расстилать",
        "96) Прыгать",
        "97) Стоять",
        "98) Красть",
        "99) Колоть",
        "100) Жалить",
        "101) Выметать",
        "102) Разбухать",
        "103) Плавать",
        "104) Качать",
        "105) Брать, взять",
        "106) Учить",
        "107) Рвать",
        "108) Рассказывать",
        "109) Думать",
        "110) Бросать",
        "111) Процветать",
        "112) Браться",
        "113) Понимать",
        "114) Просыпаться",
        "115) Носить (одежду)",
        "116) Плакать",
        "117) Мочить",
        "118) Выигрывать",
        "119) Извиваться",
        "120) Писать" ];

    function russian_word_element() {
        return russian_word[count];
    }
    return russian_word_element();
}
//автозаполнение болоков перевода и корректных ответов на Javascript
function filling_answer() {
    for (var i = 1; i <= 120; i++) {
        document.getElementById('correct_' + i).innerHTML = etalonarr(i - 1);
        document.getElementById('rusword_' + i).innerHTML = rusword(i - 1);
    }
}
filling_answer();

// функция трансформации стороки эталона в массив эталон
function transet(stringet) {
    var arretalon = new Array(stringet.length);
    for (var i = 0; i < stringet.length; i++) {
        arretalon[i] = stringet[i];
    }
    return arretalon;
}
// функция трансформация пользовательской строки в пользовательский массив
function transus(stringus) {
    var arruser = new Array(stringus.length);
    // приводим строку к нижнему регистру
    stringus = stringus.toLowerCase();
    for (var i = 0; i < stringus.length; i++) {
        arruser[i] = stringus[i];
    }
    // удаляем  пробелы с начала и конца массива
    do {
        var flag = true;
        if (arruser[arruser.length - 1] == " ") {
            arruser.pop();
            flag = false;
        }
        if (arruser[0] == " ") {
            arruser.shift();
            flag = false;
        }
        //удаляем двойные пробелы между элементами массива
        for (var i = 0; i < arruser.length; i++) {
            if ((arruser[i] == " ") && (arruser[i + 1] == " ")) {
                arruser.splice(i, 1);
                flag = false;
            }

        }
    } while (flag == false);
    return arruser;
}
// функция ограничения ввода пунктуации и спецсимволов
function specialSimbols(userString, special_mes) {
    var simbol = true;
    for (var i = 0; i < userString.length; i++) {
        if (userString[i] == "," || userString[i] == "." || userString[i] == "\\" || userString[i] == "\/" || userString[i] == "!" || userString[i] == "?" || userString[i] == "!" || userString[i] == "[" || userString[i] == "]" || userString[i] == "(" || userString[i] == ")" || userString[i] == "~" || userString[i] == "%" || userString[i] == "$" || userString[i] == "^" || userString[i] == "*" || userString[i] == "-" || userString[i] == "_" || userString[i] == "=" || userString[i] == "+" || userString[i] == "@" || userString[i] == "\"" || userString[i] == "'" || userString[i] == ":" || userString[i] == ";" || userString[i] == "|" || userString[i] == "{" || userString[i] == "}" || userString[i] == "&" || userString[i] == "#" || userString[i] == "`" || userString[i] == "<" || userString[i] == ">") {
            simbol = false;
        }
    }
    //вывод сообщения на случай использования пунктуации или спецсимволов
    if (simbol == false) {
        $(document).ready(function() {
            var warning_spesial = $(special_mes);
            warning_spesial.show(500);
        });
    } else {
        $(document).ready(function() {
            var warning_spesial = $(special_mes);
            warning_spesial.hide(500);
        });
    }
}
//функция сравнения стороки пользователя и строки эталона
function compare(userString, etalonString) {
    var comuser = transus(userString);
    var cometal = transet(etalonString);

    var overallresult = true;

    if (cometal.length !== comuser.length) {
        overallresult = false;
    } else {
        var flag = true;
        for (var i = 0; i < cometal.length; i++) {
            if (cometal[i] == comuser[i]) {
                flag = true;
            } else {
                flag = false;
                overallresult = flag;
            }
        }
    }
    return overallresult;
}
//вывод сообщения на случай неправильного ввода слов
function visual_result(result, lamp, answer, correct, incorrect) {
    if (result == true) {
        document.getElementById(lamp).src = './img/lamp_on.gif';
    } else {
        document.getElementById(lamp).src = './img/lamp_of.gif';
        $(document).ready(function() {
            answer = $(answer);
            answer.show(500);
            correct = $(correct);
            correct.show(500);
            $('.answer_name').show(500);
        });
    }
}
// time of training
function timeStart(){
    let t = document.querySelector('time');
    t.started = new Date;
    t.update = ms => t.innerHTML = new Date(ms).toISOString().split(/T|\./)[1]
    setInterval(() => t.update(new Date - t.started), 500);

}
// скрытие блока ответов кнопкой 'Hide all answers'.
function start_training() {
    $(document).ready(function() {
        $('.answer_block').fadeOut();
        $('.statistics').show(900);
    });
    timeStart();
}
// скрытие окна статистики кнопкой 'Hide statistics'
function stop_training() {
    $(document).ready(function() {
        $('.statistics').hide(600);
    });
}
// исходное скрытие блоков предупреждений до появления ошибки
$(document).ready(function() {
    $('.red').hide();
    $('.statistics').hide();
    $('.answer_name').hide();
});
//скрытие блоков пяти строк
function hide_five(count) {
    $(document).ready(function() {
        $('#five_' + count).hide(600);
    });
}
//скрытие блоков двадцати строк
function hide_twenty(count) {
    $(document).ready(function() {
        $('#twenty_' + count).fadeOut(600);
    });
}

function show_twenty(count) {
    $(document).ready(function() {
        $('#twenty_' + count).fadeIn(600);
    });
}

function twenty(count) {
    for (var i = 1; i < count; i++) {
        hide_twenty(i);
    }
    for (var i = 6; i >= count; i--) {
        show_twenty(i);
    }
}
//счётчики блока статистики
function countCorrect() {
    var count_corr = $("#count_correct").html();
    count_corr = count_corr * 1 + 1;
    document.getElementById('count_correct').innerHTML = count_corr;
}

function countInorrect() {
    var count_corr = $("#count_incorrect").html();
    count_corr = count_corr * 1 + 1;
    document.getElementById('count_incorrect').innerHTML = count_corr;
}
// the counter of user answers
function countAnswer(){
    var _count = +document.getElementById('_count_answer').textContent;
        document.getElementById('_count_answer').innerHTML = ++_count;
}
//основная функция компарации входных данных с эталоном
function progressive(count) {
    // start_training();
    var lamp = "lamp_" + count,
        result = "result_" + count,
        answer = "#answer_" + count,
        correct = "#correct_" + count,
        special_mes = "#special_mes_" + count;
    // проверяем не вызывалась ли функции ранее
    var attendance = $("#attendance_" + count).html();
    attendance = attendance * 1;

    var user_string = document.getElementById('user_string_' + count).value;
    //если нет и поле заполнено - запускаем компарацию
    if (user_string.length > 0 && attendance == 0) {
        --count;
        resultOfCompare = compare(user_string, etalonarr(count));
        document.getElementById(result).innerHTML = resultOfCompare;
        visual_result(resultOfCompare, lamp, answer, correct);
        specialSimbols(user_string, special_mes);

        attendance = attendance * 1 + 1;
        ++count;
        document.getElementById('attendance_' + count).innerHTML = attendance;
        if (resultOfCompare == true) {
            countCorrect();
        } else {
            countInorrect();
        }
        countAnswer();
    }
    if ($("#attendance_" + count).html() !== '0') {
        $('#user_string_' + count).attr('readonly', 'readonly');
        $('#button_' + count).attr('disabled', 'disabled');
    }
    return attendance;
}

function dropping_focus() {
    for (var i = 1; i <= 120; i++) {
        document.getElementById('flag_' + i).innerHTML = 0;
        document.getElementById('flag_up_' + i).innerHTML = 0;
    }
}
    $(function() {
        $('.form').focus(function(){
            var _id =  $(this).attr("id");
            document.getElementById('autofocus').innerHTML = _id.substr(12,15);;
            dropping_focus();
        });
   });

function moveRect(e) {
    $(function() {
        var result = 0;
        result = e.keyCode;
        var count = 0;
        var flag = new Array();
        var flagUp = new Array();
        var execut = new Array();
        var amount = 120;
        for (var i = 1; i <= amount; i++) {
            flag[i] = $("#flag_" + i).html();
            flagUp[i] = $("#flag_up_" + i).html();
        }
        var autofocus = 1;

        function focusStepDown() {
            var startDown = $("#autofocus").html();
            startDown = startDown * 1;

            for (var i = 1; i <= amount; i++) {
                document.getElementById('flag_up_' + i).innerHTML = 0;
            }
            for (var i = startDown + 1; i <= amount; i++) {
                if (flag[i] == 0) {
                    count = i;
                    document.getElementById('flag_' + i).innerHTML = i;
                    result = 0;
                    break;
                }
            }
        }

        function focusStepUp() {
            var startUp = $("#autofocus").html();
            startUp = startUp * 1;
            for (var i = 1; i <= amount; i++) {
                document.getElementById('flag_' + i).innerHTML = 0;
            }
            for (var j = startUp - 1; j >= 1; j--) {
                if (flagUp[j] == 0) {
                    count = j;
                    document.getElementById('flag_up_' + j).innerHTML = j;
                    result = 0;
                    break;
                }
            }
        }

        function validation() {
            var number = $("#autofocus").html();
            number = number * 1;
            for (var i = 1; i <= amount; i++) {
                execut[i] = $("#attendance_" + i).html();
                if (execut[i] == 0 && i == number) {
                    progressive(number);
                    count = number + 1;
                    $("#user_string_" + count).focus();
                    break;
                }
            }
        }
        if (result == 40) focusStepDown();
        if (result == 38) focusStepUp();
        if (result == 13) validation();
        if (result == 37) start_training();
        if (result == 39) stop_training();
        $("#user_string_" + count).focus(function() {
            autofocus = count;
            document.getElementById('autofocus').innerHTML = autofocus;

        });
        $("#user_string_" + count).focus();
    });
}
addEventListener("keydown", moveRect);
