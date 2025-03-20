import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Copyright &copy;
        <strong>2025&nbsp;<a href="https://intes.in/" target="_blank">Intes</a></strong>. All Rights Reserved
    </div>`
})
export class AppFooter {
    date = new Date();
}
