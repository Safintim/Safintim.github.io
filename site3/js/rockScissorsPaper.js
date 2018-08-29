$(document).ready(function(){
    // назначаю обработчик события картинкам с классом choice
    $('.choice img').on('click', function(){
        
        // переменная для хранения выбора пользователя
        var userChoice;
        
        // задаю анимацию на ту картинку, на которую кликнул пользователь
        $(this).animate({left:'570px',top: '200px',width:'50px', height:'50px'},700);
        
        // записываю в переменную id на который тыкнул пользователь
        if(this.id === 'paper'){
            userChoice = 'paper';
        } else if (this.id === 'rock'){
            userChoice = 'rock';
        }else {
            userChoice = 'scissors';
        }
        // убираю обработчик с картинок, так как пользователь уже тыкнул
        $('.choice img').off('click');
        // проверяю получил ли значение
        
        
        // рандомный выбор компа
        var computerChoice = Math.random();
            if (computerChoice < 0.34) {
                computerChoice = "rock";
            } else if(computerChoice <= 0.67) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            }
        
        
        // функция сравнения
        var compare = function(choice1,choice2){
            if(choice1 === choice2){
                $('.textResult').text('Ничья, попробуй снова');
                if(userChoice === "paper"){
                    $('#Compaper').removeClass('out').addClass('fade');
                } else if(userChoice === "scissors"){
                    $('#Comscissors').removeClass('out').addClass('fade');
                } else {$('#Comrock').removeClass('out').addClass('fade');}
                
            } else if(choice1 === "rock"){
                if(choice2 === "scissors"){
                    $('.textResult').text('Ты выиграл! Поздравляю!');
                    $('#Comscissors').removeClass('out').addClass('fade');
                    
                }
                else{
                    $('.textResult').text('Мне жаль :(');
                    $('#Compaper').removeClass('out').addClass('fade');
                    
                }
            } else if (choice1 === "paper"){
                if(choice2 === "rock"){
                    $('.textResult').text('Ты выиграл! Поздравляю!');
                    $('#Comrock').removeClass('out').addClass('fade');
                    
                }
                else{
                    $('.textResult').text('Мне жаль :(');
                    $('#Comscissors').removeClass('out').addClass('fade');
                    
                }
            } else if (choice1 === "scissors"){
                if(choice2 == "rock"){
                    $('.textResult').text('Мне жаль :(');
                    $('#Comrock').removeClass('out').addClass('fade');
                    
                }
                else{
                    $('.textResult').text('Ты выиграл! Поздравляю!');
                    $('#Compaper').removeClass('out').addClass('fade');
                    

                }
            }
        };
        
        compare(userChoice, computerChoice);
        
        $('button#play').click(function(){
            location.reload();
        });
    });
});