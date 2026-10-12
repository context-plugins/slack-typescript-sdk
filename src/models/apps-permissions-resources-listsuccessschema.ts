import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./resource.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/** Schema for successful response apps.permissions.resources.list method */
export type AppsPermissionsResourcesListsuccessschema = {
  ok: boolean;
  resources: Resource[];
  responseMetadata?: ResponseMetadata;
};

export const appsPermissionsResourcesListsuccessschemaSchema: Schema<AppsPermissionsResourcesListsuccessschema> =
  s.object<AppsPermissionsResourcesListsuccessschema>({
    ok: s.boolean(),
    resources: s.array(s.lazy(() => resourceSchema)),
    responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  });
