import { Component, OnInit } from '@angular/core';
import { IBox, IMapOptions, MarkerTypeId } from "angular-maps";

// @Component({
//   selector: 'app-contact-us',
//   templateUrl: './contact-us.component.html',
//   styleUrls: ['./contact-us.component.scss']
// })
 
    @Component({
        selector: 'some-component',
        template: `
            <div style="height: 500px">
                <x-map #xmap [Options]="_options">
                    <x-map-marker
                        [Latitude]="30" 
                        [Longitude]="90" 
                        [Title]="'My Marker'" 
                        [IconUrl]="'https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png'" 
                        [IconInfo]="{
                            markerType: _markerTypeId.FontMarker,
                            fontName: 'FontAwesome',
                            fontSize: 48,
                            color: 'green',
                            markerOffsetRatio: { x: 0.5, y: 1 },
                            text: '\uF276'
                        }"> 
                        <info-box [DisableAutoPan]="true" [Title]="'My InfoBox'" [Description]="'Hi, this is the content of the <strong>info window</strong>. It is your responsibility to implement functionality such as close, etc...'">
                            <info-box-action [Label]="'Click Me'" (ActionClicked)="_click()"></info-box-action>
                        </info-box>   
                    </x-map-marker>
                </x-map>
            </div>
        `,
        styles: []
    })
    export class ContactUsComponent {
       private _markerTypeId = MarkerTypeId 
            // a little trick so we can use enums in the template...

       private _options: IMapOptions = {
            disableBirdseye: false,
            disableStreetside: false,
            navigationBarMode: 1
       };
            // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

       private _click(){
           console.log("hello world...");
       }
   }