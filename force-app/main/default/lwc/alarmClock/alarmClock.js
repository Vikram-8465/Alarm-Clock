import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClock extends LightningElement {
    imageUrl = AlarmClockAssets + '/AlarmClockAssets/clock.png';
    ringtone = new Audio(AlarmClockAssets + '/AlarmClockAssets/Clocksound.mp3');
    currentTime = '';
    hourOptions = [];
    minuteOptions = [];
    ampmOptions = ['AM', 'PM'];
    hourSelected ;
    minuteSelected ;
    ampmSelected ;
    alarmTime = '';
    isAlarmSet = false;
    alarmRinging = false;

    get isDisabled(){
        return !(this.hourSelected && this.minuteSelected && this.ampmSelected);
    }

    get getShakeClass(){
       return this.alarmRinging ? 'shake' : '';
    }

    connectedCallback(){
        this.getCurrentTime();
        this.getHourOptions();
        this.getMinuteOptions();
    }

    getCurrentTime(){

        setInterval(()=>{
            let date = new Date();
            let hours = date.getHours();
               hours = hours > 12 ? `0${hours - 12}`.slice(-2) : `0${hours}`.slice(-2);
            let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            let AmPm = date.getHours() > 12 ? 'PM' : 'AM';
            this.currentTime = `${hours} : ${minutes} : ${seconds} ${AmPm}`;
            if(this.alarmTime === `${hours} : ${minutes} : ${AmPm}`) {
                this.alarmRinging = true;
                this.ringtone.play();
                this.ringtone.loop = true;
            }
        }, 1000);
        
    }

    getHourOptions(){
        for(let i = 1; i <= 12 ; i++){
            let hour = i < 10 ? '0' + i : i;
            this.hourOptions.push(hour);
        }
    }

     getMinuteOptions(){
        for(let i = 0; i <= 59 ; i++){
            let minute = i < 10 ? '0' + i : i;
            this.minuteOptions.push(minute);
        }
     }

     changeHandler(event){
            const {label, value} = event.detail;
            if(label==='Hour(s)') this.hourSelected = value;
            if(label==='Minute(s)') this.minuteSelected = value;        
            if(label==='AM/PM') this.ampmSelected = value;

     }

     alarmSetHandler(){
         this.alarmTime = `${this.hourSelected} : ${this.minuteSelected} : ${this.ampmSelected}`
         this.isAlarmSet = true;
     }

     alarmClearHandler(){
         this.alarmRinging = false;
         this.ringtone.pause();
         this.isAlarmSet = false;
         this.alarmTime = '';
         const elements = this.template.querySelectorAll('c-clock-dropdown');

        Array.from(elements).forEach(element => {
            element.reset('');
        })
     }
     
}