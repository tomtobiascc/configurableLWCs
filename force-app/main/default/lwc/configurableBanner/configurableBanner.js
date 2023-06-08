import {LightningElement, api} from 'lwc';
import IMAGE_URL from '@salesforce/resourceUrl/HeroImages';
import {NavigationMixin} from 'lightning/navigation';

export default class Hero extends NavigationMixin(LightningElement) {
    alreadyRendered = false;
    @api imageURL = 'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    @api imageMinHeight = '300px';
    @api imageBackgroundPosition = 'center';
    @api internalResource;
    @api textBlockPositionTop = '30%';
    @api textBlockPositionLeft = '10%';
    @api textBlockInternalAlignment = 'left';
    @api textBlockWidth = 'auto';

    @api tagline = 'Tagline';
    @api taglineMargin = '0px 0px 15px 0px';
    @api taglineFontSize = '0.813rem';
    @api taglineLineHeight = '1';
    @api taglineTextColor = 'black';
    @api taglineBackgroundColor = 'rgba(0,0,0,0)';
    @api taglineLetterSpacing = '';
    @api taglineFontWeight = 'normal';
    @api taglineFontStyle = 'normal';

    @api title = 'Title';
    @api titleMargin = '0px 0px 15px 0px';
    @api titleFontSize = '1.75rem';
    @api titleLineHeight = '1.25';
    @api titleTextColor = 'black';
    @api titleBackgroundColor = 'rgba(0,0,0,0)';
    @api titleLetterSpacing = '';
    @api titleFontWeight = 'normal';
    @api titleFontStyle = 'normal';

    @api subtitle = 'Subtitle';
    @api subTitleMargin = '0px 0px 15px 0px';
    @api subTitleFontSize = '0.813rem';
    @api subTitleLineHeight = '1';
    @api subTitleTextColor = 'black';
    @api subTitleBackgroundColor = 'rgba(0,0,0,0)';
    @api subTitleLetterSpacing = '';
    @api subTitleFontWeight = 'normal';
    @api subTitleFontStyle = 'normal';

    @api hideButton = false;
    @api buttonText = 'Button Title';
    @api buttonUrl = '/clouderapartners/s/partner-success-desk';
    @api buttonPadding = '5px 24px';
    @api buttonMargin = '';
    @api buttonBackgroundColor = '#00a3af';
    @api buttonBorderColor = '#00a3af';
    @api buttonTextColor = '#ffffff';
    @api buttonBorderRadius = '3px';
    @api buttonLetterSpacing = '';
    @api buttonFontSize = '16px';
    @api buttonFontStyle = 'normal';
    @api buttonLineHeight = '1.5';
    @api buttonHeight = '40px';

    @api hideButton2 = false;
    @api button2Text = 'Button Title';
    @api button2Url = '/clouderapartners/s/partner-success-desk';
    @api button2Padding = '5px 24px';
    @api button2Margin = '';
    @api button2BackgroundColor = 'rgba(0,0,0,0)';
    @api button2BorderColor = '#00a3af';
    @api button2TextColor = '#00a3af';
    @api button2BorderRadius = '3px';
    @api button2LetterSpacing = '';
    @api button2FontSize = '16px';
    @api button2FontStyle = 'normal';
    @api button2LineHeight = '1.5';
    @api button2Height = '40px';

    get resUrl() {
        if (this.internalResource) {
            return IMAGE_URL + this.imageURL;
        }
        return this.imageURL;
    }

    renderedCallback() {
        if (!this.alreadyRendered) {
            this.initCSSVariables();
            this.alreadyRendered = true;
        }
    }

    initCSSVariables() {
        let myEnclosingDiv = this.template.querySelector('.enclosingDiv');
        const imageURLPropertyString = `url(${this.resUrl})`;

        myEnclosingDiv.style.setProperty('--imageURL', imageURLPropertyString);
        myEnclosingDiv.style.setProperty('--imageMinHeight', this.imageMinHeight);
        myEnclosingDiv.style.setProperty('--imageBackgroundPosition', this.imageBackgroundPosition);

        let myDiv = this.template.querySelector('.divContainer');
        myDiv.style.setProperty('--textBlockPositionTop', this.textBlockPositionTop);
        myDiv.style.setProperty('--textBlockPositionLeft', this.textBlockPositionLeft);
        myDiv.style.setProperty('--textBlockInternalAlignment', this.textBlockInternalAlignment);
        myDiv.style.setProperty('--textBlockWidth', this.textBlockWidth);

        let myTagline = this.template.querySelector('.tagline');
        myTagline.style.setProperty('--taglineMargin', this.taglineMargin);
        myTagline.style.setProperty('--taglineFontSize', this.taglineFontSize);
        myTagline.style.setProperty('--taglineLineHeight', this.taglineLineHeight);
        myTagline.style.setProperty('--taglineTextColor', this.taglineTextColor);
        myTagline.style.setProperty('--taglineBackgroundColor', this.taglineBackgroundColor);
        myTagline.style.setProperty('--taglineLetterSpacing', this.taglineLetterSpacing);
        myTagline.style.setProperty('--taglineFontWeight', this.taglineFontWeight);
        myTagline.style.setProperty('--taglineFontStyle', this.taglineFontStyle);

        let myTitle = this.template.querySelector('.title');
        myTitle.style.setProperty('--titleMargin', this.titleMargin);
        myTitle.style.setProperty('--titleFontSize', this.titleFontSize);
        myTitle.style.setProperty('--titleLineHeight', this.titleLineHeight);
        myTitle.style.setProperty('--titleTextColor', this.titleTextColor);
        myTitle.style.setProperty('--titleBackgroundColor', this.titleBackgroundColor);
        myTitle.style.setProperty('--titleLetterSpacing', this.titleLetterSpacing);
        myTitle.style.setProperty('--titleFontWeight', this.titleFontWeight);
        myTitle.style.setProperty('--titleFontStyle', this.titleFontStyle);

        let mySubTitle = this.template.querySelector('.subtitle');
        mySubTitle.style.setProperty('--subTitleMargin', this.subTitleMargin);
        mySubTitle.style.setProperty('--subTitleFontSize', this.subTitleFontSize);
        mySubTitle.style.setProperty('--subTitleLineHeight', this.subTitleLineHeight);
        mySubTitle.style.setProperty('--subTitleTextColor', this.subTitleTextColor);
        mySubTitle.style.setProperty('--subTitleBackgroundColor', this.subTitleBackgroundColor);
        mySubTitle.style.setProperty('--subTitleLetterSpacing', this.subTitleLetterSpacing);
        mySubTitle.style.setProperty('--subTitleFontWeight', this.subTitleFontWeight);
        mySubTitle.style.setProperty('--subTitleFontStyle', this.subTitleFontStyle);

        if (!this.hideButton) {
            let myButton = this.template.querySelector('.configurableButton');
            myButton.style.setProperty('--buttonPadding', this.buttonPadding);
            myButton.style.setProperty('--buttonMargin', this.buttonMargin);
            myButton.style.setProperty('--buttonBackgroundColor', this.buttonBackgroundColor);
            myButton.style.setProperty('--buttonBorderColor', this.buttonBorderColor);
            myButton.style.setProperty('--buttonTextColor', this.buttonTextColor);
            myButton.style.setProperty('--buttonBorderRadius', this.buttonBorderRadius);
            myButton.style.setProperty('--buttonLetterSpacing', this.buttonLetterSpacing);
            myButton.style.setProperty('--buttonFontSize', this.buttonFontSize);
            myButton.style.setProperty('--buttonFontStyle', this.buttonFontStyle);
            myButton.style.setProperty('--buttonLineHeight', this.buttonLineHeight);
            myButton.style.setProperty('--buttonHeight', this.buttonHeight);
        }

        if (!this.hideButton2) {
            let myButton2 = this.template.querySelector('.configurableButton2');
            myButton2.style.setProperty('--button2Padding', this.button2Padding);
            myButton2.style.setProperty('--button2Margin', this.button2Margin);
            myButton2.style.setProperty('--button2BackgroundColor', this.button2BackgroundColor);
            myButton2.style.setProperty('--button2BorderColor', this.button2BorderColor);
            myButton2.style.setProperty('--button2TextColor', this.button2TextColor);
            myButton2.style.setProperty('--button2BorderRadius', this.button2BorderRadius);
            myButton2.style.setProperty('--button2LetterSpacing', this.button2LetterSpacing);
            myButton2.style.setProperty('--button2FontSize', this.button2FontSize);
            myButton2.style.setProperty('--button2FontStyle', this.button2FontStyle);
            myButton2.style.setProperty('--button2LineHeight', this.button2LineHeight);
            myButton2.style.setProperty('--button2Height', this.button2Height);
        }
    }

    handleClick(/*event*/) {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.buttonUrl
            }
        });
    }
    handleClick2(/*event*/) {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.button2Url
            }
        });
    }
}