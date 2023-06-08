import {LightningElement, api} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class ConfigurableLinks extends NavigationMixin(LightningElement) {
    alreadyRendered = false;

    @api col1Row1Label = 'Column 1 Row 1';
    @api col1Row1URL = '/';
    @api col1Row2Label = 'Column 1 Row 2';
    @api col1Row2URL = '/';
    @api col1Row3Label = 'Column 1 Row 3';
    @api col1Row3URL = '/';
    @api col2Row1Label = 'Column 2 Row 1';
    @api col2Row1URL = '/';
    @api col2Row2Label = 'Column 2 Row 2';
    @api col2Row2URL = '/';
    @api col2Row3Label = 'Column 2 Row 3';
    @api col2Row3URL = '/';
    @api col3Row1Label = 'Column 3 Row 1';
    @api col3Row1URL = '/';
    @api col3Row2Label = 'Column 3 Row 2';
    @api col3Row2URL = '/';
    @api col3Row3Label = 'Column 3 Row 3';
    @api col3Row3URL = '/';
    @api col4Row1Label = 'Column 4 Row 1';
    @api col4Row1URL = '/';
    @api col4Row2Label = 'Column 4 Row 2';
    @api col4Row2URL = '/';
    @api col4Row3Label = 'Column 4 Row 3';
    @api col4Row3URL = '/';
    @api linkMargin = '20px 0';
    @api backgroundColor = 'rgba(0,0,0,0)';
    @api textColor = 'black';

    renderedCallback() {
        if (!this.alreadyRendered) {
            this.initCSSVariables();
            this.alreadyRendered = true;
        }
    }

    initCSSVariables() {
        let myBackgroundColor = this.template.querySelector('.backgroundColor');
        myBackgroundColor.style.setProperty('--backgroundColor', this.backgroundColor);

        let myTextColor = this.template.querySelector('.textColor');
        myTextColor.style.setProperty('--textColor', this.textColor);
    }

    handleAllLinkClicks(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: `${event.target.dataset.url}`
            }
        });
    }
}