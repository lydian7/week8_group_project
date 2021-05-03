import React from "react";

const EndGame = ({userScore}) => {

    

    let greeting = ""

    
      if (userScore > 4){
        greeting = `Great score! ${userScore}/5`}
      if (userScore === 3){
        greeting = `Not Bad! ${userScore}/5`}
      if (userScore < 3){
        greeting = `Well.. that was embarrassing! ${userScore}/5`}

        console.log("greeting", greeting)

return(
    <div>
        {greeting}
    </div>
        )
}

export default EndGame;