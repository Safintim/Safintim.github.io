/* 
1.массив position - содержит занятые и не занятые ячейки, если нолик, то не занято, если 1, то занял пользователь, если 2, то комп
2. var i - счетчик
3. function win - проверка победы, функии передается массив и проверяеи его на одинаковые позиции
4. обработчик клик, назначаю каждой ячейки поля
5. переменная id - в нее , при каждом клике, записывается id ячейки, с помощью методов id ячейки преобразуется в число > то есть это позиция ячейки, далее я буду записыввать , что под этим индексом (id) значение равно = 1, то есть занято
*/
$(document).ready(function(){
    // создаем массив и обнуляем содержимое
    var position = [];
    for(var i = 0; i < 9; i++){
        position[i] = 0;
    }
    // переменная предназначенная для подсчета ходов, если сделаны все ходы (8),то игра завершается
    var i = 0;
    // обработчик клик
    $('.tic').click(function(){
        $('.toe').unbind();
        // получаю позицию ячейки, на которую кликнул пользователь
        var id = parseInt(this.id.split("").reverse().join(""));
        
        // проверяю на занятось этой ячейки, если занято, то говорЮ, что "Разве не видно? Тут занято елки-палки! Кликай в другую позицию"
        if(position[id]=== 1 || position[id]=== 2){
            alert('Разве не видно? Тут занято елки-палки! Кликай в другую позицию!');
            
        } else { // а если не занято, то...
            // пользователь кликнул, а значит нужно записать это :)
            position[id] = 1;
            
            //увеличиваем счетчик
            i++;
//            $(this).text('X');
            $(this).html('<img src="images/cross64.png">');
            // проверяем окончена ли игра?
            if( i === 9){
//                $(this).text('X');
                $(this).html('<img src="images/cross64.png">');
                randWin(position, i);
            }  else{
                // генерируем позицию компа
                var index = getRandom(9);
                
                //пока занято, генерируем снова и снова
                while(position[index] === 1 || position[index] === 2){
                    
                    index = getRandom(9);
                    
                }
                
                // если свободно
                if( position[index] === 0){
                    
                    // говорим, что занято компом
                    position[index] = 2;
                    // делаем id
                    var change = '#p' + index;
                   
                    // с помощью сделанного id выводим результат
//                    $(change).text('O');
                    $(change).html('<img src="images/circle_green.png">');
                    i++;
                    
                }
                
                // проверка на конец игры
                randWin(position, i);
            }
        }
    });
    
    $('#play').click(function(){
        location.reload();
        
    });
    
    //  при нажатии на кнопку "Уровень 'Джедай'" запускается обработчик
    $('#pro').click(function(){
        
        $('.tic').unbind();
            
        // всегда начинает с одной позиции
            position[4] = 2;
            $('#r4').html('<img src="images/cross64.png">');
            i++;
        
        $('.toe').click(function(){
            // описывать не буду , для пользователя все тоже самое, что и в предыдущем варинате

            var id = parseInt(this.id.split("").reverse().join(""));

            if(position[id]=== 1 || position[id]=== 2){

                alert('Разве не видно? Тут занято елки-палки! Кликай в другую позицию!');

            } else {

                position[id] = 1;
                i++;
                $(this).html('<img src="images/circle_green.png">');
                console.log(position);
                if( i === 9){
                    
                    $(this).html('<img src="images/circle_green.png">');
                    win(position,i);

                }else{
                    // левый верхний угол
                    if(position[0] == 1 && position[8] == 0){
                        i++;
                        position[2]=2;
                        $('#r2').html('<img src="images/cross64.png">');
                        if(position[6] == 1){
                            i++;
                            position[3]=2;
                            $('#r3').html('<img src="images/cross64.png">');
                            
                            if(position[5] == 1){
                                i++;
                                position[1]=2;
                                $('#r1').html('<img src="images/cross64.png">');
                                
                                if(position[7] == 1){
                                    i++;
                                    position[8]=2;
                                    $('#r8').html('<img src="images/cross64.png">');
                                    win(position, i);
                                }else if(position[8] == 1){
                                    i++;
                                    position[7]=2;
                                    $('#r7').html('<img src="images/cross64.png">');
                                    win(position, i);
                                }
                            }else if(position[1] == 1 || position[7] == 1 || position[8] == 1){
                                i++;
                                position[5]=2;
                                $('#r5').html('<img src="images/cross64.png">');
                                win(position, i);
                            } 
                            
                        }else if(position[1] == 1 || position[3] == 1 || position[5] == 1 || position[7] == 1 || position[8] == 1){
                            i++; 
                            position[6] = 2; 
                            $('#r6').html('<img src="images/cross64.png">'); 
                            win(position,i);
                        }
                    }
                    // правый нижний угол
                    else if((position[8] == 1 && position[7] == 0) || (position[8] == 1 && position[7] == 2)){
                        i++;
                        position[2]=2;
                        $('#r2').html('<img src="images/cross64.png">');
                        if(position[6] == 1){
                            i++;
                            position[7]=2;
                            $('#r7').html('<img src="images/cross64.png">');
                            if((position[0] == 1 || position[3] == 1 || position[5] == 1) && position[1]==0){
                                i++;
                                position[1]=2;
                                $('#r1').html('<img src="images/cross64.png">'); 
                                win(position,i);
                                console.log(position);
                            }else if(position[1] == 1){
                                i++;
                                position[3]=2;
                                $('#r3').html('<img src="images/cross64.png">'); 
                                if(position[0] == 1){
                                    i++;
                                    position[5]=2;
                                    $('#r5').html('<img src="images/cross64.png">'); 
                                    win(position,i);
                                }else if(position[5] == 1){
                                    i++;
                                    position[0]=2;
                                    $('#r0').html('<img src="images/cross64.png">'); 
                                    win(position,i);
                                }
                            }
                        }else if(position[1] == 1 || position[3] == 1 || position[5] == 1 || position[7] == 1 || position[0] == 1){
                            i++;
                            position[6]=2;
                            $('#r6').html('<img src="images/cross64.png">'); 
                            win(position,i);
                        }
                    
                    }// правый верхний угол
                    else if(position[2] == 1 && position[6] == 0){ //????????????????????/
                        i++;
                        position[8]=2;
                        $('#r8').html('<img src="images/cross64.png">');
                        console.log(i);
                        console.log(position);
                        if(position[0] == 1 && position[2] == 1){
                            i++;
                            position[1]=2;
                            $('#r1').html('<img src="images/cross64.png">');
                            console.log(i);
                            console.log(position);
                            if((position[3] == 1 || position[5] == 1 || position[6] == 1) && position[7]==0){
                                i++;
                                position[7]=2;
                                $('#r7').html('<img src="images/cross64.png">'); 
                                win(position,i);
                                console.log(i);
                                console.log(position);
                            }else if(position[7] == 1){
                                i++;
                                position[3]=2;
                                $('#r3').html('<img src="images/cross64.png">'); 
                                if(position[6] == 1){
                                    i++;
                                    position[5]=2;
                                    $('#r5').html('<img src="images/cross64.png">'); 
                                    win(position,i);
                                }else if(position[5] == 1){
                                    i++;
                                    position[6]=2;
                                    $('#r6').html('<img src="images/cross64.png">'); 
                                    win(position,i);
                                }
                            }
                        }else if(position[1] == 1 || position[3] == 1 || position[5] == 1 || position[7] == 1 || position[6] == 1){
                            i++;
                            position[0]=2;
                            $('#r0').html('<img src="images/cross64.png">'); 
                            win(position,i);
                        }
                    }//леывй нижний угол
                    else if((position[6] == 1 && position[3] == 0) || (position[6] == 1 && position[3] == 2)){
                        i++;
                        position[8]=2;
                        $('#r8').html('<img src="images/cross64.png">');
                        console.log(i);
                        console.log(position);
                        if(position[0] == 1){
                            i++;
                            position[3]=2;
                            $('#r3').html('<img src="images/cross64.png">');
                            console.log(i);
                            console.log(position);
                            if((position[1] == 1 || position[2] == 1 || position[7] == 1) && position[0]==1 && position[7]==0){
                                i++;
                                position[5]=2;
                                $('#r5').html('<img src="images/cross64.png">'); 
                                win(position,i);
                                console.log(i);
                                console.log(position);
                            }else if(position[5] == 1){
                                i++;
                                position[1]=2;
                                $('#r1').html('<img src="images/cross64.png">'); 
                                if(position[2] == 1){
                                    i++;
                                    position[7]=2;
                                    $('#r7').html('<img src="images/cross64.png">'); 
                                    win(position,i);
                                }else if(position[7] == 1){
                                    i++;
                                    position[2]=2;
                                    $('#r2').html('<img src="images/cross64.png">'); 
                                    win(position,i);
                                }
                            }
                        }else if(position[1] == 1 || position[2] == 1 || position[3] == 1 || position[5] == 1 || position[7] == 1){
                            i++;
                            position[0]=2;
                            $('#r0').html('<img src="images/cross64.png">'); 
                            win(position,i);
                        }
                    }//по серединке сверху
                    else if(position[1] == 1 && position[7] == 0){
                        i++;
                        position[6]=2;
                        $('#r6').html('<img src="images/cross64.png">');
                        if(position[2] == 1){
                            i++;
                            position[0]=2;
                            $('#r0').html('<img src="images/cross64.png">');
                            alert('В любом случае проигрыш, прости');
                            position[3]=2;
                            $('#r3').html('<img src="images/cross64.png">');
                            win(position,i);
                        }else if(position[0] == 1 || position[3] == 1 || position[5] == 1 || position[7] == 1 || position[8] == 1){
                            i++;
                            position[2]=2;
                            $('#r2').html('<img src="images/cross64.png">');
                            win(position,i);
                        }
                    }// слева по середке
                    else if(position[3] == 1 && position[5] == 0){
                        i++;
                        position[2]=2;
                        $('#r2').html('<img src="images/cross64.png">');
                        if(position[6] == 1){
                            i++;
                            position[0]=2;
                            $('#r0').html('<img src="images/cross64.png">');
                            alert('В любом случае проигрыш, прости');
                            position[1]=2;
                            $('#r1').html('<img src="images/cross64.png">');
                            win(position,i);
                        }else if(position[0] == 1 || position[1] == 1 || position[5] == 1 || position[7] == 1 || position[8] == 1){
                            i++;
                            position[6]=2;
                            $('#r6').html('<img src="images/cross64.png">');
                            win(position,i);
                        }
                    } // снизу по середке
                    else if(position[7] == 1 && position[1] == 0){
                        i++;
                        position[0]=2;
                        $('#r0').html('<img src="images/cross64.png">');
                        if(position[8] == 1){
                            i++;
                            position[6]=2;
                            $('#r6').html('<img src="images/cross64.png">');
                            alert('В любом случае проигрыш, прости');
                            position[3]=2;
                            $('#r3').html('<img src="images/cross64.png">');
                            win(position,i);
                        }else if(position[1] == 1 || position[2] == 1 || position[3] == 1 || position[5] == 1 || position[6] == 1){
                            i++;
                            position[8]=2;
                            $('#r8').html('<img src="images/cross64.png">');
                            win(position,i);
                        }
                    }// cправа по середке
                    else if(position[5] == 1 && position[3] == 0){
                        i++;
                        position[6]=2;
                        $('#r6').html('<img src="images/cross64.png">');
                        if(position[2] == 1){
                            i++;
                            position[8]=2;
                            $('#r8').html('<img src="images/cross64.png">');
                            alert('В любом случае проигрыш, прости');
                            position[7]=2;
                            $('#r7').html('<img src="images/cross64.png">');
                            win(position,i);
                        }else if(position[0] == 1 || position[1] == 1 || position[3] == 1 || position[7] == 1 || position[8] == 1){
                            i++;
                            position[2]=2;
                            $('#r2').html('<img src="images/cross64.png">');
                            win(position,i);
                        }
                    }
                }
            }
        });
    });

    
    
    // функия проверки победы сложного уровня
    function win(array){
        if( (array[0] === 1 && array[1] === 1 && array[2] === 1) ||
            (array[3] === 1 && array[4] === 1 && array[5] === 1) || 
            (array[6] === 1 && array[7] === 1 && array[8] === 1) || 
            (array[0] === 1 && array[3] === 1 && array[6] === 1) ||
            (array[1] === 1 && array[4] === 1 && array[7] === 1) ||
            (array[2] === 1 && array[5] === 1 && array[8] === 1) ||
            (array[0] === 1 && array[4] === 1 && array[8] === 1) ||
            (array[2] === 1 && array[4] === 1 && array[6] === 1) ){
            $('.textResult').html('<img src="images/flowers.png">');
//            $('.textResult').text("Победа!");
            
            $('td,#pro').unbind();
        } else if(
            (array[0] === 2 && array[1] === 2 && array[2] === 2) ||
            (array[3] === 2 && array[4] === 2 && array[5] === 2) || 
            (array[6] === 2 && array[7] === 2 && array[8] === 2) || 
            (array[0] === 2 && array[3] === 2 && array[6] === 2) ||
            (array[1] === 2 && array[4] === 2 && array[7] === 2) ||
            (array[2] === 2 && array[5] === 2 && array[8] === 2) ||
            (array[0] === 2 && array[4] === 2 && array[8] === 2) ||
            (array[2] === 2 && array[4] === 2 && array[6] === 2) ){
            
            $('.textResult').html('<img src="images/smile.png">');

            
            $('td,#pro').unbind();
            
        }else{
            $('.textResult').html('<img src="images/tie.jpg">');

            $('td,#pro').unbind();
        }
        
    }
    // функия проверки на победу для легкого уровня
    function randWin (array,num){
        if( (array[0] === 1 && array[1] === 1 && array[2] === 1) ||
            (array[3] === 1 && array[4] === 1 && array[5] === 1) || 
            (array[6] === 1 && array[7] === 1 && array[8] === 1) || 
            (array[0] === 1 && array[3] === 1 && array[6] === 1) ||
            (array[1] === 1 && array[4] === 1 && array[7] === 1) ||
            (array[2] === 1 && array[5] === 1 && array[8] === 1) ||
            (array[0] === 1 && array[4] === 1 && array[8] === 1) ||
            (array[2] === 1 && array[4] === 1 && array[6] === 1) ){
            $('.textResult').html('<img src="images/flowers.png">');
//            $('.textResult').text("Победа!");
            
            $('td,#pro').unbind();
        } else if(
            (array[0] === 2 && array[1] === 2 && array[2] === 2) ||
            (array[3] === 2 && array[4] === 2 && array[5] === 2) || 
            (array[6] === 2 && array[7] === 2 && array[8] === 2) || 
            (array[0] === 2 && array[3] === 2 && array[6] === 2) ||
            (array[1] === 2 && array[4] === 2 && array[7] === 2) ||
            (array[2] === 2 && array[5] === 2 && array[8] === 2) ||
            (array[0] === 2 && array[4] === 2 && array[8] === 2) ||
            (array[2] === 2 && array[4] === 2 && array[6] === 2) ){
            
            $('.textResult').html('<img src="images/smile.png">');

            
            $('td,#pro').unbind();
            
        }else if(num === 9){
            $('.textResult').html('<img src="images/tie.jpg">');
            $('td,#pro').unbind();
        }
    }
    
        // получаем рандомное значение, в нашей задача, позицию
        function getRandom(z){
            return  Math.floor(Math.random()*z);
        }
});

