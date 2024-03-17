player1Name = localStorage.getItem("player1Name")
player2Name = localStorage.getItem("player2Name")

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").InnerHTML = Player1Score ; 
document.getElementById("player2Score").InnerHTML = player2Score ;

document.getElementById("PlayerQuestion").InnerHTML = "turno de pergunta - " + Player1Name ;
document.getElementById("PlayerQuestion").InnerHTML = "turno de pergunta - " + player2Name ;
function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase ();     
console.log("word in  lowerCase = + word);

 charAt1 = word.charAt(1);
 console.log(charAt1);

 lenght_divide_2 = math.floor(word.lenght/2);
 charAt2 = word.charAt(lenght_divine_2);
 console.log(charAt2);

 lenght_minus_1 = word.lenght - 1;      
 charAt3 = word.charAt(lenght_minus_1);
 console.log(charAt3);      
 
 removeCharAt1 = word.replace(charAt1, "_");
 removeCharAt2 = removeCharAt1.replace(charAt2,"_");
 removeCharAt3 = removeCharAt2.replace(charAt3,"_");
 console.log(removeCharAt3);

 questionWord = "<h4 id="wordDisplay">P. "+removeCharAt3+"</h4>";
imputBox = "<br>Resposta : <imput type="text" id="imputCheckBox">
checkbutton = "<br></br><button class="btn btn-info"onclick="check()">Checar<button>";
row = questionWord + inputBox + checkButton ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
 
function check()
{
    getAnswer = document.getElementById("imputCheckBox").Value;
    getAnswer.toLowerCase();      
    console.log("resposta em caixa baixa - " + answer);
    if(answer == word)                              
    {
        if(answerTurn == "player1")                                           

