import React from 'react'

export default function useFormatTime(){
  function  formatTime(release_date) {
        const date = new Date(release_date);
        let a = String(date).split(' ');
        let text = a[1] + " " + a[2] + ", " + a[3];
        return text;
    }

    return {formatTime}
}
