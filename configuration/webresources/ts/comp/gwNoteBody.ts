import {GwDomNode, GwMap} from "../types/gwTypes";
import {GwRegisteredSystem} from "../core/util/GwRegisteredSystem";
import {GwFileRequest} from "../core/GwFileRequest";

/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export class GwNoteBody extends GwRegisteredSystem {
  getSystemName (): string {
    return "gwNoteBody";
  }

  downloadDocument (triggerNode: GwDomNode, args: GwMap): void {
    new GwFileRequest(true).downloadDirectly({
      widgetId: args.id,
      docId: args.docId,
      contentDisposition: "inline"
    });
  }
}

export const gwNoteBody = new GwNoteBody();