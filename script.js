// Create an object containing messages to be displayed
const collectiveAdvice = {
    diabetesTip: ['learn about the disease', 'know the disease and its impact on your body thoroughly', 'eat less salt', 'eat more fruits and vegetables'],
    healthTips: ['check your diet', 'exercise frequently to stay in shape', 'monitor your sugar in-take', 'avoid foods containing high levels of cholestrol'],
    doctorgivingTip: ['E.A. Quao', 'M.S. Nyan', 'A.B. Kwakye', 'D.N. Mkrumah']
  }
  
 //create an empty array
 let messageArr = []; 

// a function to randomly select message.
function randomSel(number){
    return Math.floor(Math.random()*number)
};
