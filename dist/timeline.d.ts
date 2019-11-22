import { IBlueprintPartDB, IBlueprintPiece } from './rundown';
import { Timeline, TSRTimelineObjBase } from 'timeline-state-resolver-types';
export { Timeline };
export declare enum PlayoutTimelinePrefixes {
    PART_GROUP_PREFIX = "part_group_",
    PART_GROUP_FIRST_ITEM_PREFIX = "part_group_firstobject_",
    PIECE_GROUP_PREFIX = "piece_group_",
    PIECE_GROUP_FIRST_ITEM_PREFIX = "piece_group_firstobject_"
}
export declare function getPartGroupId(part: IBlueprintPartDB | string): string;
export declare function getPieceGroupId(piece: IBlueprintPiece | string): string;
export declare function getPartFirstObjectId(part: IBlueprintPartDB | string): string;
export declare function getPieceFirstObjectId(piece: IBlueprintPiece | string): string;
export declare enum TimelineObjHoldMode {
    NORMAL = 0,
    ONLY = 1,
    EXCEPT = 2
}
export interface TimelineObjectCoreExt extends TSRTimelineObjBase {
    /** Restrict object usage according to whether we are currently in a hold */
    holdMode?: TimelineObjHoldMode;
    /** Arbitrary data storage for plugins */
    metaData?: {
        [key: string]: any;
    };
}
/** TimelineObject extension for additional fields needed by onTimelineGenerate */
export interface OnGenerateTimelineObj extends TimelineObjectCoreExt {
    pieceId?: string;
    infinitePieceId?: string;
}
