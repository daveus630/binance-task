"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const os = require("os");
const PORT = process.env.PORT || 3001;
app_1.default.listen(PORT, () => {
    console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map