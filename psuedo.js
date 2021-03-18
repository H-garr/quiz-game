// create 2 html files
    // game.html
            // qlist = [{
                                // question:"",
                                //  options:[op1,op2,op3,op4]
                                // correctAns: op1
                                // },
                                // {
                                    // question :"",
                                    // options:[op1,op2,op3,op4],
                                    // correctAns:op1
                                    //  },
                                    //]
                                



                                // activity 18 bubbling efefct for good reference
            
        // timer = 75s
        //click event on start btm
            // start the timer
                // if timer === 0 game over
            //start displaying questions one by one
                // create index var = 0
                // if (index < qList.length)
                        //qlist[index].question
                        //  for loop over qlist[index].options > crate html element for qList[index].options[i]
                    // index++
        
        //click on options button
        // which then starts the timer and starts quiz *is outside of your start button*
        // override button using innerhtml or hide button
            //find which element user clicked (eg: event.target,matches(.element))
            // capture the value on the button (eg: "data-user", OR "<button value = '' >")
            // compare the value to the correct answers. > //qlist[index].correctAns
            // if (its correct) { }
                //whatever time left that is user's score
                //display message to user
                // if you cant do this step just do score ++;
            // else time left - penalty
                            // display message of "you have gotten it wrong"
                    //save scores with initals in local storage
                //start displaying questions one by one
                        // create index var = 0
                        // if (index < qList.length)
                            //qlist[index].question
                            //  for loop over[index].options > crate html element for qList[index].options[i]
                        //index++;








    //score.html
        //capture the score from the local storage and display it to user
        //button to reset the local storage with 0.