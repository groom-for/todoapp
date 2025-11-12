각각의 버전 확인 
node v22.19.0
npm -v 10.9.3
react@18.2.0
react-dom@18.2.0
tailwindcss@3.4.18

그밖의 구조 
@testing-library/dom@10.4.1
├── @testing-library/jest-dom@6.9.1
├── @testing-library/react@16.3.0
├── @testing-library/user-event@13.5.0
├── autoprefixer@10.4.21
├── eslint-plugin-jest-dom@5.5.0
├── eslint-plugin-testing-library@7.13.3
├── postcss@8.5.6
├── react-beautiful-dnd@13.1.1
├── react-dom@18.2.0
├── react-scripts@5.0.1
├── react@18.2.0
├── tailwindcss@3.4.18
└── web-vitals@2.1.4



할일목록 디자인 특이사항 
1. 스타일 변경
2. 전체/완료/남음 갯수 카운터 추가
3. 완료시 배경/컬러 변경
4. 버튼 호버시 컬러 변경
5. 리스트 넘치게 많을 시, 스크롤 y만 존재
6. 배경 깨지는 스타일 수정 
7. 테스트 : 한줄 할일 입력하기 글자수가 오버 되었을때, 스타일/버튼 깨지는 현상 수정 
8. 테스트 : 여러줄 할일입력시, 줄바꿈 되도록 적용 
> 추가하고 싶은 기능 : 현재의 날짜나 시간 표시 / 완료다하면 별도의 파일로 저장하기?  
00. 완성 이미지는 스크린샷 참고. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
