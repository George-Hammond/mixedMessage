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

//looping through the messages randomly

 for(let item in collectiveAdvice) {
    let optionIdx = randomSel(collectiveAdvice[item].length)

   
    switch(item) {
      case 'diabetesTip':
        messageArr.push(`You need to ${collectiveAdvice[item][optionIdx]}.`)
        break
      case 'healthTips':
        messageArr.push(`In order to stay healthy, you need to ${collectiveAdvice[item][optionIdx]}.`)
        break
      case 'doctorgivingTip':
        messageArr.push(`This is a special message from Doctor ${collectiveAdvice[item][optionIdx]}.`)
        break
      default:
        messageArr.push('There is not enough info.')
    }
  }