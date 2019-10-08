import { Component } from "@angular/core";

@Component({
    selector: 'app-new-checkin',
    templateUrl: './new-checkin.component.html',
    styleUrls: ['./new-checkin.component.scss']
})

export class NewCheckinComponent {
    checkinImage: any;
    checkoutImage: any;

    onSelectFile(event: any, type) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                if (type === 'checkin') {
                    this.checkinImage = reader.result;
                } else {
                    this.checkoutImage = reader.result;
                }
            }
        }
    }

    chooseImage(imageEl: HTMLInputElement){
        imageEl.click();
    }
}