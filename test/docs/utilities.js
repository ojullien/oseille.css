var myMap = new Map();

myMap.set('checkbox-toast', '#toast-css');
myMap.set('checkbox-tooltip', '#tooltip-css');
myMap.set('checkbox-modal', '#modal-css');
myMap.set('checkbox-grid', '#grid-css');
myMap.set('checkbox-drawer', '#drawer-css');
myMap.set('checkbox-card', '#card-css');
myMap.set('checkbox-border', '#border-css');
myMap.set('checkbox-paragraph', '#paragraph-css');
myMap.set('checkbox-list', '#list-css');
myMap.set('checkbox-figure', '#figure-css');
myMap.set('checkbox-definition', '#definition-css');
myMap.set('checkbox-quotation', '#quotation-css');
myMap.set('checkbox-root', '#root-css');
myMap.set('checkbox-buttons', '#buttons-css');
myMap.set('checkbox-text', '#text-css');
myMap.set('checkbox-mark', '#mark-css');
myMap.set('checkbox-code', '#code-css');
myMap.set('checkbox-multimedia', '#multimedia-css');
myMap.set('checkbox-iframe', '#iframe-css');
myMap.set('checkbox-sectioning', '#sectioning-css');
myMap.set('checkbox-navigation', '#navigation-css');
myMap.set('checkbox-heading', '#heading-css');
myMap.set('checkbox-header', '#header-css');
myMap.set('checkbox-footer', '#footer-css');
myMap.set('checkbox-details', '#details-css');
myMap.set('checkbox-fieldset', '#fieldset-css');
myMap.set('checkbox-form', '#form-css');
myMap.set('checkbox-input', '#input-css');
myMap.set('checkbox-utility', '#utility-css');
myMap.set('checkbox-table', '#table-css');
myMap.set('checkbox-time', '#time-css');
myMap.set('checkbox-collapse', '#collapse-css');
myMap.set('checkbox-legibility', '#legibility-css');
myMap.set('checkbox-progress', '#progress-css');

function switchToLocal(element) {
    if (element.checked != true) {
        document.querySelector(myMap.get(element.id)).disabled = true;
    } else {
        document.querySelector(myMap.get(element.id)).removeAttribute('disabled');
    }
};

function switchToOseille() {
    let checkbox = document.getElementById('checkbox-oseille');
    if (checkbox.checked != true) {
        for (let [theCheckbox, theLink] of myMap.entries()) {
            document.getElementById(theCheckbox).checked = true;
            document.querySelector(theLink).removeAttribute('disabled');
        }
        document.querySelector("#oseille-css").disabled = true;
    } else {
        for (let [theCheckbox, theLink] of myMap.entries()) {
            document.getElementById(theCheckbox).checked = false;
            document.querySelector(theLink).disabled = true;
        }
        document.querySelector("#oseille-css").removeAttribute('disabled');
    }
};