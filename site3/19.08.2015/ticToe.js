// 1.убрать возможность повторного клика на занятую ячейку
// 2. когда все ячейки заполненны , если победителя нет, выводить "ничья", если есть то выводить победителя ------->>>>> выполненно


$(document).ready(function(){
    // создаем массив и обнуляем содержимое
    var position = [];
    for(var i = 0; i < 9; i++){
        position[i] = 0;
    }
    var i = 0;
    
    function win(array, num){
        if( (array[0] === 1 && array[1] === 1 && array[2] === 1) ||
            (array[3] === 1 && array[4] === 1 && array[5] === 1) || 
            (array[6] === 1 && array[7] === 1 && array[8] === 1) || 
            (array[0] === 1 && array[3] === 1 && array[6] === 1) ||
            (array[1] === 1 && array[4] === 1 && array[7] === 1) ||
            (array[2] === 1 && array[5] === 1 && array[8] === 1) ||
            (array[0] === 1 && array[4] === 1 && array[8] === 1) ||
            (array[2] === 1 && array[4] === 1 && array[6] === 1) ){
            $('h3').text("Победа!");
            
            $('td').unbind();
        } else if(
            (array[0] === 2 && array[1] === 2 && array[2] === 2) ||
            (array[3] === 2 && array[4] === 2 && array[5] === 2) || 
            (array[6] === 2 && array[7] === 2 && array[8] === 2) || 
            (array[0] === 2 && array[3] === 2 && array[6] === 2) ||
            (array[1] === 2 && array[4] === 2 && array[7] === 2) ||
            (array[2] === 2 && array[5] === 2 && array[8] === 2) ||
            (array[0] === 2 && array[4] === 2 && array[8] === 2) ||
            (array[2] === 2 && array[4] === 2 && array[6] === 2) ){
            $('h3').text("Проигрыш!");
            
            $('td').unbind();
            
        }else if(num === 9){
            $('h3').text("Ничья!");
            $('td').unbind();
        }
        
    }
    
    // обработчик клик
    $('td').click(function(){
        id = parseInt(this.id.split("").reverse().join(""));
        
        if(position[id]=== 1 || position[id]=== 2){
            alert('pfyznj');
            
        }else{
            position[id] = 1;
            i++;
            $(this).text('X');
        if( i === 9 ){
            $(this).text('X');
            win(position, i);
//            alert('the end');
//            $('td').unbind();
        }else{
            
            // при клике на определенную область узнаем id элемента, 
            // с помощью метода split разбиваю строку на элементы массива,
            // с помощью метода reverse переворачиваю массив
            // и с помощью метода parseInt беру число, он берет всецелые числа в строке и возвращает
            //join объединяет массив в одну строку
//     var id = parseInt(this.id.split("").reverse().join(""));

            console.log(id + 'id в число, на который пользователь нажал');
//            $(this).text('X');

//            position[id] = 1;
            console.log(position + ' куда тыкнул пользователь');
    //
    //        var index = Math.floor(Math.random()*9);
    //        
    //        console.log(index + ' сгенерированное число');
            var index = getRandom();
            console.log(index + 'сгенерированное число');
            while(position[index] === 1 || position[index] === 2){
                index = getRandom();
            }
            if( position[index] === 0){
                position[index] = 2;
                var change = '#p' + index;
                console.log(change + ' id компа');
                console.log(position + ' massive');
                $(change).text('O');
                i++;
            }
            win(position, i);
        }
        }
        
//        if(position[index] === 0){
//            // но теперь уже занято
//            position[index] = 1;
//            // новая переменная для приготвления id 
//            var change = '#p' + index;
//            console.log(change + ' id компа');
//            console.log(position + ' massive');
//            // передаю приготовленный id и пишу в том месте нолик
//            $(change).text('O');
//        } else if(position[index] === 1){
//            index = Math.floor(Math.random()*9);
//            proverka(index);
//        }
        
        
        
       
    });
    
});
 function getRandom(){
            return  Math.floor(Math.random()*9);
        }
//        function win(array){
//            if(){
//                $('h3').text("Победа");
//            }
//            return console.log("Winner");
//        }
