"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PartHoldMode;
(function (PartHoldMode) {
    PartHoldMode[PartHoldMode["NONE"] = 0] = "NONE";
    PartHoldMode[PartHoldMode["FROM"] = 1] = "FROM";
    PartHoldMode[PartHoldMode["TO"] = 2] = "TO";
})(PartHoldMode = exports.PartHoldMode || (exports.PartHoldMode = {}));
var PieceLifespan;
(function (PieceLifespan) {
    PieceLifespan[PieceLifespan["Normal"] = 0] = "Normal";
    PieceLifespan[PieceLifespan["OutOnNextPart"] = 1] = "OutOnNextPart";
    PieceLifespan[PieceLifespan["OutOnNextSegment"] = 2] = "OutOnNextSegment";
    PieceLifespan[PieceLifespan["Infinite"] = 3] = "Infinite";
})(PieceLifespan = exports.PieceLifespan || (exports.PieceLifespan = {}));
//# sourceMappingURL=rundown.js.map