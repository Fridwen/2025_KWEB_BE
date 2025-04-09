const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// async -> 비동기 함수를 나타내는 표지
// printFileSize는 비동기 함수임
const printFileSize = async filename => {
    try {
        const data = await readFile(filename);
        // await -> 함수 실행이 끝날때까지 기다리라는 뜻
        // readFile 함수의 실행이 끝난 이후에 다음 코드를 실행
        console.log(`data length -> ${data.length} bytes`);
    } catch (error) {
        console.log(error);
    }
};

console.log('String1');
printFileSize('./file.bin');
// printFileSize가 비동기 함수이므로 함수 실행이 끝나지 않은 상태로 2번째 console.log가 먼저 실행
console.log('String2');