{ //save text

    let my_words = []
    let arrName = ['text0', 'text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8', 'text9']
    let array_keys_count = 0
    let co = 0


    $('.save_inp').hide()

    for (i = 0; i < arrName.length; i++) {

        $(".arh_base").append('<img id="my_arh" onclick="arhOpen(' + i + ')" class="my_arh' + i + '" src="./img/arh.svg" alt="">')

        if (localStorage.getItem("text" + i) == null) { //проверяем наличие ключей
            console.log("key" + i + "none")
            localStorage.setItem("text" + i, "empty") //если пусто, создаем ключи, что бы не было ошибок
        }
    }

    $(".my_key").click(function () {

        if ($(".my_inp_key").val() != '') {
            localStorage.setItem('text' + array_keys_count, $(".my_inp_key").val() ) // вписываем в ключь текст через запятую, заменя все

            for (i = 0; i < my_words.length; i++) {
                CreateCell(i)
            }
        }

    })


    $(".my_but").click(function () { //сохраняем текст

        if ($(".my_inp").val() != '') {

            my_words.push($(".my_inp").val())
            CreateCell(my_words.length - 1)
            $(".my_inp").val("")
            LocStor('set')
        }
    })

    $(".my_text").click(function () {

        if (my_words != null) {
            if (co <= my_words.length) {
                co++
                $(".my_text").text(my_words[co])
            }
            else {
                co = 0
                $(".my_text").text(my_words[0])
            }
        }
    })

    function DellDiv(coun) {

        $(".cell" + coun).remove()
        my_words.splice(coun, 1) //удаляем из масива по индексу
        LocStor('set')
    }

    function CopyTetxt(coun) {

        navigator.clipboard.writeText($(".cell" + coun).text()) // переносим текст в буфер обмена

        if (my_words[coun].match(/jpg|jpeg|png/) != null) { // если фото, то выводим
            $(".my_img").attr("src", my_words[coun])
            console.log(my_words[coun])
        }
    }

    function CreateCell(num) {

        if (my_words[num].match(/jpg|jpeg|png/) === null) { // проверка на фото

            $(".celss").append("<div id='cell' class='cell" + num + "'><div id='cell_text' onclick='CopyTetxt(" + num + ")' class='cell_text'> " + my_words[num] + " </div><img id='dell_but' onclick='DellDiv(" + num + ")' class='dell_but" + num + "' src='./img/dell.svg' alt=''></div>")
        }
        else {
            $(".celss").append("<div id='cell' class='cell" + num + "'><div id='cell_text' onclick='CopyTetxt(" + num + ")' class='cell_text'> " + 'photo' + " </div><img id='dell_but' onclick='DellDiv(" + num + ")' class='dell_but" + num + "' src='./img/dell.svg' alt=''></div>")
        }
    }

    function LocStor(name) {
        if (name == 'set') {
            localStorage.setItem(arrName[array_keys_count], my_words)
        }
        if (name == 'save') {
            my_words = localStorage.getItem(arrName[array_keys_count]).split(",")
        }
    }

    function StartArr() {

        if (localStorage.getItem(arrName[array_keys_count]) != null) { //создаем cells при загрузке страницы
            LocStor('save')

            for (i = 0; i < my_words.length; i++) {
                CreateCell(i)
            }

        }
    }

    function arhOpen(num) {
        console.log('keys' + num)
        $('.save_inp').show()
        $(".celss").empty()
        array_keys_count = num
        StartArr()
        $(".my_inp_arh").val(localStorage.getItem(arrName[num]).split(","))
    }

}

{

}