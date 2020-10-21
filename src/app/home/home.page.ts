
import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	constructor(private camera: Camera) {}
	clickedImage: string = "Waiting";

	click() {
		this.camera
			.getPicture({
				sourceType: this.camera.PictureSourceType.CAMERA,
				destinationType: this.camera.DestinationType.FILE_URI,
			})
			.then(
				(imageData) => {
					// imageData is either a base64 encoded string or a file URI
					// If it's base64 (DATA_URL):
					this.clickedImage = imageData;
				},
				(err) => {
					console.log(err);
					// Handle error
					this.clickedImage = "hua nhi bhai";
				},
			);
	}
	libary(){
			this.camera
				.getPicture({
					sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
					destinationType: this.camera.DestinationType.FILE_URI,
				})
				.then(
					(imageData) => {
					
						this.clickedImage = imageData;
					},
					(err) => {
						console.log(err);
						// Handle error
						this.clickedImage = "hua nhi bhai";
					},
				);
	}
}
