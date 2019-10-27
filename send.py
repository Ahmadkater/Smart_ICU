from firebase import firebase
import statistics
import json
import time

fire = firebase.FirebaseApplication('https://project-2-c8b25.firebaseio.com/', None)

data = fire.get("/", None)

print(data)

mode = fire.get("/MODE", None)

print(mode)

Temp = [37,33,35,36,38,37,38,40]

HR = [90,60,88,55,90,60,88,55,90,60,55]

ECG = [0, 0, 0, 1, 1.5, 2, 5, 2, 1.5, 1.5, 1.5, -1, 10, -5, 1, 1, 1, 1.5, 2.5, 5, 2.5, 0, 0, 2, 0]


# example of updating ecg values to get 2 signals

j = 0

while j <= 1:

    for i in range(len(ECG)):
        fire.put('https://project-2-c8b25.firebaseio.com/', "ECG", ECG[i])
        print(ECG[i])
        # time.sleep(2)
    j = j + 1

