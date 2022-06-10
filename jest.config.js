module.exports = {
    /*
    - Xác định chứa các file testing
    - Thông thường ta sẽ bỏ các file typescript vào hết thư mục src
    */
    "roots": [
        "<rootDir>/src"
    ],

    /*
    - Khai báo định dạng file
    - Jest sẽ dựa vào định dạng này để phát hiện các file cần được testing
     */
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],

    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },

    /* báo cáo các bài test lúc đang chạy */
    "verbose": true,

    "globals": {
        "ts-jest": {
            diagnostics: false
        }
    }
}