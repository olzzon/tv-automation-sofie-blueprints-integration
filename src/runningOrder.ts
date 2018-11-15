import { Time } from './common'
import { SomeContent } from './content'
import { TimelineTrigger } from './timeline'

export interface IBlueprintRunningOrder {
	_id: string
	/** Rundown slug - user-presentable name */
	name: string

	/** Expected start should be set to the expected time this running order should run on air. Should be set to EditorialStart from IMOSRunningOrder */
	expectedStart?: Time
	/** Expected duration of the running order - should be set to EditorialDuration from IMOSRunningOrder */
	expectedDuration?: number
}

export interface BlueprintRuntimeArguments {
	[key: string]: string
}

export interface IBlueprintSegmentLine {
	/** ID of the SegmentLine */
	_id: string
	/** The story Slug (like a title, but slimier) */
	slug: string
	/** Should this item should progress to the next automatically */
	autoNext?: boolean
	/** How much to overlap on when doing autonext */
	autoNextOverlap?: number
	overlapDuration?: number
	transitionDelay?: string
	transitionDuration?: number
	/** Should we block a transition at the out of this SegmentLine */
	disableOutTransition?: boolean

	/** Expected duration of the line, in milliseconds */
	expectedDuration?: number

	/** The type of the segmentLiene, could be the name of the template that created it */
	typeVariant: string
	/** The subtype fo the segmentLine */
	subTypeVariant?: string

	/** Whether this segment line supports being used in HOLD */
	holdMode?: SegmentLineHoldMode

	updateStoryStatus?: boolean
}

export interface IMessageBlueprintSegmentLine extends IBlueprintSegmentLine {
	/** ID of the source object in MOS */
	mosId: string
	/** The segment ("Title") this line belongs to */
	segmentId: string

	/** Expected duration of the line, in milliseconds */
	expectedDuration?: number

	/** The type of the segmentLiene, could be the name of the template that created it */
	typeVariant: string
	/** The subtype fo the segmentLine */
	subTypeVariant?: string

	/** Playout timings, in here we log times when playout happens */
	timings?: IMessageBlueprintSegmentLineTimings
}

export interface IMessageBlueprintSegmentLineTimings {
	/** Point in time the SegmentLine was taken, (ie the time of the user action) */
	take: Array<Time>
	/** Point in time the SegmentLine started playing (ie the time of the playout) */
	startedPlayback: Array<Time>
	/** Point in time the SegmentLine stopped playing (ie the time of the user action) */
	takeOut: Array<Time>
}
export enum SegmentLineHoldMode {
	NONE = 0,
	FROM = 1,
	TO = 2
}

/** A Single item in a "line": script, VT, cameras */
export interface IBlueprintSegmentLineItem {
	_id: string
	/** ID of the source object in MOS */
	mosId: string
	/** The segment line this item belongs to - can be undefined for global ad lib segment line items */
	segmentLineId?: string
	/** User-presentable name for the timeline item */
	name: string
	/** Timeline item trigger. Possibly, most of these will be manually triggered as next, but maybe some will be automatic. */
	trigger: TimelineTrigger
	/** Source layer the timeline item belongs to */
	sourceLayerId: string
  	/** Layer output this segment line item belongs to */
	outputLayerId: string
	/** Expected duration of the item as planned or as estimated by the system (in case of Script layers), in milliseconds. */
	expectedDuration: number | string
	virtual?: boolean
	/** The object describing the item in detail */
	content?: SomeContent
	/** The id of the item this item is a continuation of. If it is a continuation, the inTranstion must not be set, and trigger must be 0 */
	continuesRefId?: string

	isTransition?: boolean
	infiniteMode?: SegmentLineItemLifespan
	extendOnHold?: boolean
}
export interface IBlueprintSegmentLineAdLibItem {
	_rank: number
	/** ID of the source object in MOS */
	mosId: string
	/** The segment line this item belongs to - can be undefined for global ad lib segment line items */
	segmentLineId?: string
	/** User-presentable name for the timeline item */
	name: string
	/** Source layer the timeline item belongs to */
	sourceLayerId: string
  	/** Layer output this segment line item belongs to */
	outputLayerId: string
	/** Expected duration of the item as planned or as estimated by the system (in case of Script layers), in milliseconds. */
	expectedDuration: number | string
	/** The object describing the item in detail */
	content?: SomeContent

	infiniteMode?: SegmentLineItemLifespan
}

export enum SegmentLineItemLifespan {
	Normal = 0,
	OutOnNextSegmentLine = 1,
	OutOnNextSegment = 2,
	Infinite = 3
}