import random 
student = ['강성은','강주원','고유한','김연빈','김지수','황성주','김해인','문지호','박주헌','이수빈','배준형',	'손종민','신현기','옥세훈','이승집','이준우','이흔오',	'장현욱','정지헌','정창휘','조혜원','최용훈','최재성',	'탁윤희']
# print(student)
random.shuffle(student)
# print(student)
# ctrl + alt + 방향키 위 아래 포커싱 증가
# ctrl + 왼쪽 ,오른쪽 방향키
# alt 방향키 포커싱 되어있는 줄 위치 이동

for index in range(0,len(student),6):
    for i in range(6):
        if i % 3 ==0 and i != 0:
            print('       ',end=' ')
        print(student[index+i],end=' ')
    print("\n")
