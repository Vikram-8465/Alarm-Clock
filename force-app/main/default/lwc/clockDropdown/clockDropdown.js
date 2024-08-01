import { LightningElement, api } from 'lwc';

export default class ClockDropdown extends LightningElement {
    @api label = '';
    @api options = [];

    changeHandler(event){   
       this.callParent(event.target.value);
    }

    callParent(value){ 
        this.dispatchEvent(new CustomEvent('child', { detail: { label: this.label, value: value } }));
    }

    @api 
    reset(value){
        this.template.querySelector('select').value = value;
        this.callParent(value);
    }
}