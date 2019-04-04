(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.stateful = {}, global.React));
}(this, function (exports, React) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    (function (ViewState) {
        ViewState["IDLE"] = "IDLE";
        ViewState["LOADING"] = "LOADING";
        ViewState["RENDER"] = "RENDER";
        ViewState["EMPTY"] = "EMPTY";
        ViewState["ERROR"] = "ERROR";
    })(exports.ViewState || (exports.ViewState = {}));
    var StatefulComponent = /** @class */ (function (_super) {
        __extends(StatefulComponent, _super);
        function StatefulComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                viewState: exports.ViewState.IDLE
            };
            _this.setViewState = function (viewState) {
                _this.setState({
                    viewState: viewState
                });
            };
            return _this;
        }
        return StatefulComponent;
    }(React.Component));

    exports.default = StatefulComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
