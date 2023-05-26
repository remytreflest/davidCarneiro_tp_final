import React, { useState, useEffect } from 'react'
import {ReactComponent as Dodgecoin} from '../assets/img/dogecoin-doge-icon.svg';

export default function addDots(nStr) {
    nStr += ''
    const x = nStr.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2') // changed comma to dot here
    }
    return x1 + x2
}

export function shuffle(array){

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function setBackground(img, position = '50% 50%'){
    document.body.style.backgroundImage = 'url(' + '../../assets/img/' + img + ')'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.backgroundPosition = position;
    document.body.style.backgroundRepeat = 'no-repeat'
}

export function Timer( seconds, endTimerFunc, submitted = false ){
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [formSubmitted, setFormSubmitted] = useState(submitted);
    const timer = document.getElementById('timer');
  
    useEffect(() => {
        if(submitted){
            setTimeLeft(0)
        }
      // exit early when we reach 0
        if (!timeLeft){
            timer.classList.remove('alert-warning');
            timer.classList.add('alert-danger');
            endTimerFunc(true);
            return;
        } 
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [timeLeft, submitted]);
  
    return (
      <div id="timer" className='timer alert alert-warning'>
        <Dodgecoin className='rotating' />
        { timeLeft ? <h1>{timeLeft} seconde{ timeLeft > 1 ? "s" : null }</h1> : null }
      </div>
    );
  }