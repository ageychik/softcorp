import range from "./scripts/range";
import customSelect from "custom-select/src";
import menu from "./scripts/menu";

menu();
document.querySelector('input[type=range]') && range();
document.querySelectorAll('.form__select') && customSelect('.form__select', {
    containerClass: 'custom-select',
    openerClass: 'custom-select__opener',
    panelClass: 'custom-select__dropdown',
    optionClass: 'custom-select__option',
    isSelectedClass: 'custom-select__option_selected',
    hasFocusClass: 'custom-select__option_focus',
    isDisabledClass: 'custom-select__option_disabled',
    isOpenClass: 'custom-select_open'
});