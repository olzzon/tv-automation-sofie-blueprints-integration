import { IBlueprintPartInstance, IBlueprintPiece } from './rundown';
import * as TSR from 'timeline-state-resolver-types';
import { CombineArrayType } from './lib';
export { TSR };
export { Timeline } from 'timeline-state-resolver-types';
export declare enum PlayoutTimelinePrefixes {
    PART_GROUP_PREFIX = "part_group_",
    PART_GROUP_FIRST_ITEM_PREFIX = "part_group_firstobject_",
    PIECE_GROUP_PREFIX = "piece_group_",
    PIECE_GROUP_FIRST_ITEM_PREFIX = "piece_group_firstobject_"
}
export declare function getPartGroupId(part: IBlueprintPartInstance | string): string;
export declare function getPieceGroupId(piece: IBlueprintPiece | string): string;
export declare function getPartFirstObjectId(part: IBlueprintPartInstance | string): string;
export declare function getPieceFirstObjectId(piece: IBlueprintPiece | string): string;
export declare enum TimelineObjHoldMode {
    NORMAL = 0,
    ONLY = 1,
    EXCEPT = 2
}
export interface TimelineObjectCoreExt extends TSR.TSRTimelineObjBase {
    /** Restrict object usage according to whether we are currently in a hold */
    holdMode?: TimelineObjHoldMode;
    /** Arbitrary data storage for plugins */
    metaData?: {
        [key: string]: any;
    };
    /** Keyframes: Arbitrary data storage for plugins */
    keyframes?: CombineArrayType<TSR.TSRTimelineObjBase['keyframes'], {
        metaData?: {
            [key: string]: any;
        };
        /** Whether to keep this keyframe when the object is copied for lookahead. By default all keyframes are removed */
        preserveForLookahead?: boolean;
    }>;
}
/** TimelineObject extension for additional fields needed by onTimelineGenerate */
export interface OnGenerateTimelineObj extends TimelineObjectCoreExt {
    pieceInstanceId?: string;
    infinitePieceId?: string;
}
