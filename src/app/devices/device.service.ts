import {Injectable} from '@angular/core';
import {BLE} from '@ionic-native/ble';
import {Observable} from 'rxjs';
import {Device} from '../device.model';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor(

    ) {
    }

    getDevices() {

        return [
            {"id":"dgdfg","name":"dev 1", "rssi": "34545"},
            {"id":"ola","name":"dev 3", "rssi": "34545"},
            {"id":"jejej","name":"dev 7", "rssi": "34545"},

        ]
        // return this.ble.scan([], 5);
    }
}
