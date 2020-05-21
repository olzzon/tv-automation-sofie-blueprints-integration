"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TSR = require("timeline-state-resolver-types");
exports.TSR = TSR;
var timeline_state_resolver_types_1 = require("timeline-state-resolver-types");
exports.Timeline = timeline_state_resolver_types_1.Timeline;
var PlayoutTimelinePrefixes;
(function (PlayoutTimelinePrefixes) {
    PlayoutTimelinePrefixes["PART_GROUP_PREFIX"] = "part_group_";
    PlayoutTimelinePrefixes["PART_GROUP_FIRST_ITEM_PREFIX"] = "part_group_firstobject_";
    PlayoutTimelinePrefixes["PIECE_GROUP_PREFIX"] = "piece_group_";
    PlayoutTimelinePrefixes["PIECE_GROUP_FIRST_ITEM_PREFIX"] = "piece_group_firstobject_";
})(PlayoutTimelinePrefixes = exports.PlayoutTimelinePrefixes || (exports.PlayoutTimelinePrefixes = {}));
function getPartGroupId(part) {
    if (typeof part === 'string') {
        return PlayoutTimelinePrefixes.PART_GROUP_PREFIX + part;
    }
    return PlayoutTimelinePrefixes.PART_GROUP_PREFIX + part._id;
}
exports.getPartGroupId = getPartGroupId;
function getPieceGroupId(piece) {
    if (typeof piece === 'string') {
        return PlayoutTimelinePrefixes.PIECE_GROUP_PREFIX + piece;
    }
    return PlayoutTimelinePrefixes.PIECE_GROUP_PREFIX + piece._id;
}
exports.getPieceGroupId = getPieceGroupId;
function getPartFirstObjectId(part) {
    if (typeof part === 'string') {
        return PlayoutTimelinePrefixes.PART_GROUP_FIRST_ITEM_PREFIX + part;
    }
    return PlayoutTimelinePrefixes.PART_GROUP_FIRST_ITEM_PREFIX + part._id;
}
exports.getPartFirstObjectId = getPartFirstObjectId;
function getPieceFirstObjectId(piece) {
    if (typeof piece === 'string') {
        return PlayoutTimelinePrefixes.PIECE_GROUP_FIRST_ITEM_PREFIX + piece;
    }
    return PlayoutTimelinePrefixes.PIECE_GROUP_FIRST_ITEM_PREFIX + piece._id;
}
exports.getPieceFirstObjectId = getPieceFirstObjectId;
var TimelineObjHoldMode;
(function (TimelineObjHoldMode) {
    TimelineObjHoldMode[TimelineObjHoldMode["NORMAL"] = 0] = "NORMAL";
    TimelineObjHoldMode[TimelineObjHoldMode["ONLY"] = 1] = "ONLY";
    TimelineObjHoldMode[TimelineObjHoldMode["EXCEPT"] = 2] = "EXCEPT"; // Only use when not in HOLD
})(TimelineObjHoldMode = exports.TimelineObjHoldMode || (exports.TimelineObjHoldMode = {}));
//# sourceMappingURL=timeline.js.map