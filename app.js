$('#start').on('click',function(){ 
    game.start 
    
})

var questions = [{  
    question:'what does BMW stand for? ',
    answers:[ 'Bavarian Motor Works', 'Bararian Motor Workshop','Bimmer Motor Workshop'],
    correctAnswers:'Bavarian Motor Works'

}, {


question:'who created Ford?',
    answers:['Tom Ford','Henry Ford','Samuel Jackson'],
    correctAnswers:'Henry Ford'

}, {

question:'how much horsepower does a lamborghini aventador have?',
    answers:['1200','850','729'],
    correctAnswers:'729'

}, {


question:' who Founded BMW?',
    answers:['Scott Charels','Rob Dan','Franz Josef Popp'],
    correctAnswers:'Franz Josef Popp'
},{

question:' Who founded Acura? ',
answers:['Honda Motor Company','Alex Smith','Acura'],
correctAnswers:'Honda Motor Company'
}, {


question:'Who Founded Buick',
    answers:['Ellis West','Dave Smith','David Dunbar Buick'],
    correctAnswers:'David Dunbar Buick'
    
    



}];



var game = {    
    correct: 0,
    incorrect: 0,
    counter: 120,
            
        countdown: function(){  
            game.counter--;
            $('#counter').html(game.counter);
            if(game.counter<0){ 
                game.done();
            }
        },
        start:function(){
                timer = setInterval(game.countdown,1000);
                $('#subwrapper').prepend('<h2>Time Remaining: <span id= "counter">120></span> Seconds</h2>')
        $('#start').remove();
   for(var i = 0;i<questions.length;i++){   
       $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
       for (var j = 0;j<question[i].answer.length;j++){
           $('#subwrapper').append("<input type = 'radio' name='question-"+i+"' value' "+questions[i].answers[j]+"'>"+questions[i].answers[j] ) 
        }
    }
},

done: funtion(){    
   $.each($('inpuit[name="question-1]":checked'),function(){   
        if($(this).val()==questions[i].correctAnswer){
            game.correct++;
        }else {
            game,incorrect++;
        
    
            }           
        })
    }
}

