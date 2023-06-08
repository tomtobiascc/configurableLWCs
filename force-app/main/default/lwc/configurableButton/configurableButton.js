import {LightningElement, api} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class ConfigurableButton extends NavigationMixin(LightningElement) {

    alreadyRendered = false;
    @api buttonText = 'Change me';
    @api buttonUrl = 'https://www.instructure.com/';
    @api buttonAlign = 'center';
    @api buttonMargin = '';
    @api buttonBackgroundColor = '#00a3af';
    @api buttonBorderColor = '#00a3af';
    @api buttonTextColor = '#ffffff';
    @api buttonBorderRadius = '3px';

    renderedCallback() {
        if (!this.alreadyRendered) {
            this.initCSSVariables();
            this.alreadyRendered = true;
        }
    }

    initCSSVariables() {
        let myDiv = this.template.querySelector('.divContainer');
        myDiv.style.setProperty('--buttonAlign', this.buttonAlign);

        let myButton = this.template.querySelector('.configurableButton');
        myButton.style.setProperty('--buttonMargin', this.buttonMargin);
        myButton.style.setProperty('--buttonBackgroundColor', this.buttonBackgroundColor);
        myButton.style.setProperty('--buttonBorderColor', this.buttonBorderColor);
        myButton.style.setProperty('--buttonTextColor', this.buttonTextColor);
        myButton.style.setProperty('--buttonBorderRadius', this.buttonBorderRadius);
    }

    handleClick(/*event*/) {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.buttonUrl
            }
        });
    }
}