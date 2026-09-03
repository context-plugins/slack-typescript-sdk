import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilesUploadErrorEnum = {
  PostingToGeneralChannelDenied: "posting_to_general_channel_denied",
  InvalidChannel: "invalid_channel",
  FileUploadsDisabled: "file_uploads_disabled",
  FileUploadsExceptImagesDisabled: "file_uploads_except_images_disabled",
  StorageLimitReached: "storage_limit_reached",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  NoPermission: "no_permission",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostType: "invalid_post_type",
  MissingPostType: "missing_post_type",
  TeamAddedToOrg: "team_added_to_org",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
} as const;
export type FilesUploadErrorEnum =
  | (typeof FilesUploadErrorEnum)[keyof typeof FilesUploadErrorEnum]
  | (string & {});

export const filesUploadErrorEnumSchema: EnumSchema<FilesUploadErrorEnum> =
  s.enumOf<FilesUploadErrorEnum>(FilesUploadErrorEnum);
