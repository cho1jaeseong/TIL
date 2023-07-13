# GIT 이란 ...
> 분산 버전 관리 시스템


## GIT 의 3가지 영역
1. Working Directory
    - 실제 작업 영역
2. Staging Area

3. Repository
    -버전 이력과 파일들이 영구적으로 저장되는 영역

### git 초기화
```bash
$ git init
```


### 상태 학인 명령어
```bash
$ git status
```

### staging area에 추가
```bash
$ git add {path} <folder_name>/{file_name}
```

### Repository에 저장하기
```bash
$ git commit -m "commit message"
```

## git 기초 설정
```bash
$ git config --global user.email "we0620@naver.com"
$ git config --global user.name "최재성"
$ git config --global --list
```

## 커밋 기록 확인하기
```bash
$ git log 
```

### 직전 커밋 수정하기
```bash
$ git commit -- amend
# vlm에서 커밋 내용 수정하기
# 1 insert 키 눌러서 삽입상태로만듬
# 2 커밋 메시지 수정
#3 esc를 눌러 삽입상태 종료
#4  :wq를 입력하여 저장하고 종료
```

### git 설정 초기화
```bash
# vim을 활용해서 설정 제거하기
# vim git 설정 파일 열기
$ vim ~/.gitconfig
#insert 키 : 수정 상태 만들기
#--insert-- 인 상태에서 모든 내용 삭제
#esc : 수정상태 종료
# :wq로 종료
```




