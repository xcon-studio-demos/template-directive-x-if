import {Widget, WidgetContext, xproperty} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";

@Widget({
    widgetName: 'XCON App Widget',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'template-directive-x-if',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
    initMode: "auto",
    encapsulation: 'component'
})
export default class App {
    @xproperty() showBox1: boolean = true;
    @xproperty() showBox2: boolean = false;
    @xproperty() showBox3: boolean = false;
    @xproperty() showBox4: boolean = false;
}