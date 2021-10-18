"use strict";
// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonfyDatasourcePlugin = void 0;
const types_1 = require("@subql/types");
exports.JsonfyDatasourcePlugin = {
    kind: 'substrate/Jsonfy',
    validate(ds) {
        return true;
    },
    dsFilterProcessor(ds, api) {
        return true;
    },
    handlerProcessors: {
        'substrate/JsonfyEvent': {
            baseFilter: [],
            baseHandlerKind: types_1.SubqlHandlerKind.Event,
            transformer(original, ds) {
                return JSON.parse(JSON.stringify(original.toJSON()));
            },
            filterProcessor(filter, input, ds) {
                return (filter.module &&
                    input.event.section === filter.module &&
                    filter.method &&
                    input.event.method === filter.method);
            },
        },
    },
};
exports.default = exports.JsonfyDatasourcePlugin;
//# sourceMappingURL=jsonfy.js.map
