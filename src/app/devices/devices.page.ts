import {Component, Injectable, NgZone, OnInit} from '@angular/core';
import {BLE} from '@ionic-native/ble/ngx';
import {NavController, NavParams, ToastController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {DeviceService} from './device.service';

interface Device {
    id: string;
    name: string;
    rssi: string;
}

@Component({
    selector: 'app-devices',
    templateUrl: './devices.page.html',
    styleUrls: ['./devices.page.scss'],
})

export class DevicesPage {

    devices: Device[] = [];
    statusMessage: string;

    constructor(public navCtrl: NavController,
                private toastCtrl: ToastController,
                private ble: BLE,
                private deviceService: DeviceService,
                private ngZone: NgZone) {
    }

    scan() {
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = [];  // clear list
        //
        // this.devices=this.deviceService.getDevices();
        // console.log(this.devices);

        // this.deviceService.getDevices().subscribe(
        //     device => this.onDeviceDiscovered(device),
        //     error => this.scanError(error)
        // )

        this.ble.scan([], 5).subscribe(
            device => this.onDeviceDiscovered(device),
            error => this.scanError(error)
        );
        setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
    }

    onDeviceDiscovered(device) {
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(() => {
            this.devices.push(device);
        });
    }

    // If location permission is denied, you'll end up here
    scanError(error) {
        this.setStatus('Error ' + error);
        let toast = this.toastCtrl.create({
            message: 'Error scanning for Bluetooth low energy devices',
            position: 'middle',
            duration: 5000
        });
        // toast.present();
    }

    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }
}
