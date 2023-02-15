"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDone = exports.registerTest = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const { SalesforceTestBridge, TestModule } = react_native_1.NativeModules;
const createReactClass = require("create-react-class");
const componentForTest = (test) => {
    return createReactClass({
        componentDidMount() {
            test();
        },
        render() {
            return <react_native_1.View />;
        },
    });
};
const registerTest = (test) => {
    react_native_1.AppRegistry.registerComponent(test.name.substring("test".length), () => componentForTest(test));
};
exports.registerTest = registerTest;
const testDone = () => {
    if (TestModule) {
        TestModule.markTestCompleted();
    }
    else if (SalesforceTestBridge) {
        SalesforceTestBridge.markTestCompleted();
    }
};
exports.testDone = testDone;
//# sourceMappingURL=react.force.test.js.map