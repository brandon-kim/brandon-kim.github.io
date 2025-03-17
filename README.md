# [MY Demo](https://brandon-kim.github.io)

이 페이지를 읽고 deploy 했는데, 작업 코드가 없어지는 상태가 되었다.
A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

- `main` 브랜치는 원본 코드를 유지하고, `gh-pages` 브랜치를 배포 전용으로 사용하세요.
- package.json의 `deploy` 스크립트를 다음과 같이 수정하세요:
  ```json
  "deploy": "gh-pages -b gh-pages -d build"
  ```

## AI 답변을 복사해둔다.

## 질문 1: deplay 후에 원본 코드가 사라지는 경우가 있다. 내가 뭘 잘못한건가?

작업 영역 정보 수집GitHub Pages에 배포한 후 원본 코드가 사라지는 문제는 보통 배포 과정에서 Git 브랜치 설정이나 파일 덮어쓰기와 관련된 실수로 발생합니다. 아래에서 몇 가지 원인을 살펴보고 해결 방법을 제안합니다.

---

### 1. **`gh-pages` 브랜치로 배포 시 원본 코드 덮어쓰기**
`gh-pages` 브랜치를 사용하여 배포할 때, `npm run deploy` 명령어가 실행되면 기본적으로 `gh-pages` 브랜치에 빌드된 파일만 남기고 기존 파일을 덮어씁니다. 이로 인해 원본 코드가 사라진 것처럼 보일 수 있습니다.

#### 해결 방법:
- **배포 브랜치와 원본 코드 브랜치를 분리**하세요.
  - 원본 코드는 `main` 브랜치에 유지하고, 배포는 `gh-pages` 브랜치에만 진행되도록 설정합니다.
  - package.json에서 `homepage`와 `deploy` 스크립트를 확인하세요:
    ```json
    "homepage": "https://YourUserName.github.io/your-repo/",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -b gh-pages -d build"
    }
    ```
  - `gh-pages` 브랜치가 아닌 `main` 브랜치에서 작업을 진행하세요.

---

### 2. **`main` 브랜치에 직접 배포한 경우**
`gh-pages` 브랜치가 아닌 `main` 브랜치에 배포를 설정하면, 빌드된 파일이 원본 코드 위에 덮어씌워질 수 있습니다.

#### 해결 방법:
- **`main` 브랜치를 복구**하세요:
  1. GitHub에서 `main` 브랜치의 이전 커밋을 확인하고, 해당 커밋으로 되돌립니다:
     ```bash
     git reset --hard <commit-hash>
     git push --force
     ```
  2. 이후, `gh-pages` 브랜치를 배포 전용으로 설정하세요.

---

### 3. **`.gitignore` 파일 확인**
.gitignore 파일이 제대로 설정되지 않으면, 배포 과정에서 원본 코드가 무시되거나 삭제될 수 있습니다.

#### 해결 방법:
.gitignore 파일에 다음 항목이 포함되어 있는지 확인하세요:
```plaintext
/node_modules
/build
```
이 설정은 빌드된 파일과 의존성 폴더가 Git에 포함되지 않도록 합니다.

---

### 4. **로컬 작업과 원격 저장소 동기화 문제**
로컬에서 작업한 내용을 커밋하지 않고 배포를 진행하면, 원본 코드가 GitHub에 반영되지 않을 수 있습니다.

#### 해결 방법:
- 배포 전에 항상 작업 내용을 커밋하고 푸시하세요:
  ```bash
  git add .
  git commit -m "작업 내용 설명"
  git push origin main
  ```

---

### 5. **백업 및 복구**
만약 원본 코드가 완전히 사라졌다면, 로컬에서 복구하거나 GitHub의 이전 커밋을 확인하여 복구할 수 있습니다.

#### 복구 방법:
1. GitHub에서 이전 커밋 기록을 확인합니다.
2. 해당 커밋으로 체크아웃하거나 복원합니다:
   ```bash
   git checkout <commit-hash>
   ```

---

### 요약
- 배포 브랜치를 `gh-pages`로 설정하고, 원본 코드는 `main` 브랜치에 유지하세요.
- 배포 전에 항상 작업 내용을 커밋하고 푸시하세요.
- .gitignore 파일을 확인하여 빌드 파일이 원본 코드에 영향을 주지 않도록 설정하세요.

## 질문 2: 로컬에서 deploy 를 실행했는데, 이게 문제인가?

로컬에서 `npm run deploy`를 실행했을 때 문제가 발생할 가능성이 있습니다. 현재 `package.json`의 `deploy` 스크립트를 보면, 다음과 같이 설정되어 있습니다:

```json
"deploy": "gh-pages -b main -d build"
```

이 설정은 `gh-pages` 패키지를 사용하여 `build` 디렉토리의 내용을 `main` 브랜치에 배포하도록 되어 있습니다. 이로 인해 `main` 브랜치에 원본 코드가 덮어씌워질 수 있습니다.

### 문제 원인
- `gh-pages`는 기본적으로 지정된 브랜치(`main`)에 `build` 디렉토리의 내용을 푸시합니다.
- 이 과정에서 `main` 브랜치의 기존 파일이 삭제되고, 빌드된 파일만 남게 됩니다.

### 해결 방법
1. **배포 브랜치를 분리**:
   - `main` 브랜치는 원본 코드를 유지하고, `gh-pages` 브랜치를 배포 전용으로 사용하세요.
   - package.json의 `deploy` 스크립트를 다음과 같이 수정하세요:
     ```json
     "deploy": "gh-pages -b gh-pages -d build"
     ```

2. **`main` 브랜치 복구**:
   - `main` 브랜치의 이전 커밋으로 되돌리세요:
     ```bash
     git reset --hard <commit-hash>
     git push --force
     ```

3. **`.gitignore` 확인**:
   - .gitignore 파일에 `/build`가 포함되어 있는지 확인하세요. 이렇게 하면 빌드된 파일이 `main` 브랜치에 포함되지 않습니다.

4. **배포 전 작업 커밋**:
   - 배포 전에 항상 작업 내용을 커밋하고 푸시하세요:
     ```bash
     git add .
     git commit -m "작업 내용"
     git push origin main
     ```

이렇게 설정하면 `main` 브랜치의 원본 코드가 안전하게 유지되고, `gh-pages` 브랜치에만 배포 파일이 저장됩니다.






# A React Portfolio Template for GitHub

[![GitHub Repo stars](https://img.shields.io/github/stars/mshuber1981/github-react-portfolio-template?color=%2361dbfb&style=for-the-badge&logo=github)](https://github.com/mshuber1981/github-react-portfolio-template/stargazers/) [![GitHub Repo Forks](https://img.shields.io/github/forks/mshuber1981/github-react-portfolio-template?color=%2361dbfb&style=for-the-badge&logo=github&label=Forks)](https://github.com/mshuber1981/github-react-portfolio-template/network/members) [![X (formerly Twitter) URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com&style=for-the-badge&logo=X&label=Say%20thank%20you!&labelColor=black&color=black)](https://twitter.com/intent/tweet?text=Thanks%20for%20the%20awesome%20Portfolio%20Template!%20https://github.com/mshuber1981/github-react-portfolio-template&via=MikeyHuber1981)

A performant, accessible, progressive React portfolio template that uses the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest).

Add your GitHub username once and all of your info will automatically be updated. Deploy to GitHub pages in a few simple steps.

## [Live Demo](https://mshuber1981.github.io/github-react-portfolio-template/#/)

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

![Page Speed](/README_images/speed.png)

## Light And Dark Themes

![Hero Light](/README_images/hero.png)

![Hero Dark](/README_images/heroDark.png)

### Getting Started

1. [Create a repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
2. [Clone your new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
3. Make sure [Node](https://nodejs.org/en/) is installed
4. Open your project and install the dependencies

   ```bash
   npm install
   ```

5. Navigate to the src directory and open src/config.js
6. Add your GitHub username ([src/config.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/config.js#L18) line 18)

   ```javascript
   /* START HERE
   ************************************************************** 
     Add your GitHub username (string - "YourUsername") below.
   */
   export const githubUsername = "Your GitHub username here";
   ```

7. Start the development server to view the results

   ```bash
   npm start
   ```

### Updating the Contact section

![Projects](/README_images/contact.png)

1. The contact form uses [Formspree](https://formspree.io/), create an account and add your endpoint URL ([src/config.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/config.js#L114) line 114)

   ```javascript
   /* Contact Info
   ************************************************************** 
     Add your formspree endpoint below.
     https://formspree.io/
   */
   export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
   ```

### Deploy

A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

1. Update the homepage value ([package.json](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/package.json#L3) line 3)

   ```json
   "homepage": "https://YourUserName.github.io/your-repo/",
   ```

2. Run the deploy command

   ```bash
   npm run deploy
   ```

### Customization Options

Checkout the [Wiki](https://github.com/mshuber1981/github-react-portfolio-template/wiki) for additional customization options:

- [Updating the Navbar Logo](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Navbar-Logo)
- [Updating the Main section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Main-section)
- [Updating the About Me section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-About-Me-section)
- [Updating the Skills section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Skills-section)
- [Updating the Projects section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Projects-section)
- [Updating the theme color](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-theme-color)
- [Updating the Footer icons theme (light or dark)](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Footer-icons-theme)

[Back to top :top:](#a-react-portfolio-template-for-github)

### License

[MIT](https://choosealicense.com/licenses/mit/)
