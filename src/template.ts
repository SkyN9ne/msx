/******************************************************************************/
//Template Interaction Plugin v0.0.2 (TypeScript Edition)
//(c) 2020 Benjamin Zachey
/******************************************************************************/
import $ from "jquery";
import * as tvx from "./lib/tvx-plugin-module.min";

/******************************************************************************/
//TemplateHandler
/******************************************************************************/
class TemplateHandler implements tvx.TVXInteractionPluginHander {
    private logger = new tvx.Logger();

    init() {
        this.logger.registerControl($("#log"));
        this.logger.debug("Init");
    }

    ready() {
        this.logger.debug("Ready");
        tvx.InteractionPlugin.success("Template handler ready.");
    }

    handleEvent(data: object) {
        this.logger.debug("Handle event: " + tvx.Tools.serialize(data));
    }

    handleData(data: object) {
        this.logger.debug("Handle data: " + tvx.Tools.serialize(data));
    }

    handleRequest(dataId: string, data: object, callback: (respData?: object) => void) {
        this.logger.debug("Handle request: " + dataId);
        this.logger.debug("Request data: " + tvx.Tools.serialize(data));
        callback(null);
    }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.InteractionPlugin.setupHandler(new TemplateHandler());
tvx.InteractionPlugin.init();
/******************************************************************************/