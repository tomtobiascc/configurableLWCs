import { LightningElement, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class PartnerFooter extends NavigationMixin(LightningElement) {
    alreadyRendered = false;

    @api tagline = 'Footer Tagline'
    @api phoneNumber = '1-888-555-1212'
    @api email = 'info@company.com'
    @api bottomLinkText1 = "Link Text 1";
    @api bottomLinkText2 = "Link Text 2";
    @api bottomLinkText3 = "Link Text 3";
    @api bottomLinkURL1 = "/resources";
    @api bottomLinkURL2 = "/resources";
    @api bottomLinkURL3 = "/resources";
    @api copyrightYear = (new Date().getFullYear()).toString();
    @api copyrightText = 'Instructure. All Rights Reserved.'
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
            type: "standard__webPage",
            attributes: {
                url: `${event.target.dataset.url}`
            }
        });
    }
}