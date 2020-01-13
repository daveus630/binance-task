import app from './app';
import * as os from 'os';
import * as path from 'path';

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
});
