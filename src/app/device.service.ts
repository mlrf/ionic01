import {Injectable, NgZone} from '@angular/core';
import {BLE} from '@ionic-native/ble';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private ble: BLE) { }

  getDevices() {
    return this.ble.scan([], 5);
  }
}
