
import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	constructor(private camera: Camera) {}
	clickedImage;
	options: CameraOptions = {
		quality: 100,
		destinationType: this.camera.DestinationType.FILE_URI,
		encodingType: this.camera.EncodingType.JPEG,
	};
	click() {
		this.camera.getPicture(this.options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64 (DATA_URL):
				let base64Image = "data:image/jpeg;base64," + imageData;
				this.clickedImage = base64Image;
			},
			(err) => {
				console.log(err);
				// Handle error
			},
		);
	}
}
