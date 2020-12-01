import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DevicesPageRoutingModule} from './devices-routing.module';

import {DevicesPage} from './devices.page';
import {BLE} from '@ionic-native/ble/ngx';
import {DeviceService} from './device.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DevicesPageRoutingModule,

    ],
    providers: [BLE

],
declarations: [DevicesPage]
})

export class DevicesPageModule {
}
